"""Optional local WSL verification helper. Downloads pinned public image data.

Uses Python's standard library; installs nothing and never executes image files.
Only /tmp/FX_CS16RailwayBackend paths are accepted. Cached layers are hash-checked
before reuse. Extraction uses the data filter and only selects owned runtime data.
"""
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import shutil
import subprocess
import sys
import tarfile
import urllib.request

REPOSITORY = "balintsoos/cs16-web-server"
DIGEST = "sha256:75a410e3406cbc525329df93216c740ca76d92d45b0da7e850ef762b4f106148"


def main():
    destination = Path(sys.argv[1]).resolve()
    if destination.parent != Path("/tmp") or not destination.name.startswith("FX_CS16RailwayBackend"):
        raise SystemExit("destination must be a named /tmp/FX_CS16RailwayBackend directory")
    cache = destination / "layers"
    if len(sys.argv) > 3:
        cache = Path(sys.argv[3]).resolve()
        if cache.name != "FX_CS16_backend_image_layers":
            raise SystemExit("persistent cache must be named FX_CS16_backend_image_layers")
    runtime = destination / "root"
    compat = destination / "compat"
    for directory in (cache, runtime, compat):
        directory.mkdir(parents=True, exist_ok=True)
    with urllib.request.urlopen("https://ghcr.io/token?scope=repository:" + REPOSITORY + ":pull", timeout=60) as response:
        token = json.load(response)["token"]

    def request(path):
        return urllib.request.Request("https://ghcr.io/v2/" + REPOSITORY + path,
                                      headers={"Authorization": "Bearer " + token,
                                               "Accept": "application/vnd.oci.image.manifest.v1+json"})

    with urllib.request.urlopen(request("/manifests/" + DIGEST), timeout=60) as response:
        manifest_bytes = response.read()
    if "sha256:" + hashlib.sha256(manifest_bytes).hexdigest() != DIGEST:
        raise SystemExit("manifest digest mismatch")
    manifest = json.loads(manifest_bytes)
    for index, layer in enumerate(manifest["layers"]):
        expected = layer["digest"].split(":", 1)[1]
        archive = cache / (expected + ".tar.gz")
        valid = archive.exists() and archive.stat().st_size == layer["size"]
        if valid:
            with archive.open("rb") as content:
                valid = hashlib.file_digest(content, "sha256").hexdigest() == expected
        if not valid:
            print(f"download layer {index + 1}/{len(manifest['layers'])}: {layer['size']} bytes", flush=True)
            partial = archive.with_suffix(".partial")
            digest = hashlib.sha256()
            with urllib.request.urlopen(request("/blobs/" + layer["digest"]), timeout=180) as response, partial.open("wb") as output:
                while block := response.read(1024 * 1024):
                    output.write(block)
                    digest.update(block)
            if digest.hexdigest() != expected:
                raise SystemExit("layer digest mismatch")
            partial.replace(archive)
        print(f"inspect layer {index + 1}/{len(manifest['layers'])}", flush=True)
        with tarfile.open(archive, "r:gz") as contents:
            selected = []
            for entry in contents:
                path = PurePosixPath(entry.name)
                if path.is_absolute() or ".." in path.parts:
                    raise SystemExit("unsafe image entry")
                if path.parts and path.parts[0] == "xashds":
                    if ".wh." in path.name:
                        raise SystemExit("runtime whiteout requires explicit inspection")
                    selected.append(entry)
                # Ubuntu already supplies the i386 loader/libc. Keep only this
                # additional Debian library next to the copied game libraries.
                if entry.isfile() and path.name.startswith("libgomp.so.1."):
                    with contents.extractfile(entry) as source, (compat / "libgomp.so.1").open("wb") as output:
                        shutil.copyfileobj(source, output)
            contents.extractall(runtime, members=selected, filter="data")
    print(json.dumps({"runtime": str(runtime / "xashds"), "compat": str(compat), "manifest": DIGEST}), flush=True)
    if len(sys.argv) > 2:
        # Keep extraction and execution in one WSL invocation: /tmp was not
        # available to the next invocation in this managed environment.
        binary = Path(sys.argv[2]).resolve()
        if not binary.is_file():
            raise SystemExit("compiled native test binary does not exist")
        environment = os.environ.copy()
        environment["CS16_TEST_GAME_DIR"] = str(runtime / "xashds")
        environment["LD_LIBRARY_PATH"] = str(compat) + ":" + str(runtime / "xashds")
        raise SystemExit(subprocess.run([str(binary), "-test.run=TestNativeGameInfoThroughTCPGateway",
                                         "-test.v=true", "-test.timeout=150s"], env=environment).returncode)


if __name__ == "__main__":
    main()
