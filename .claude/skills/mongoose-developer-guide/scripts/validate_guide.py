"""Validate a creation reference, retaining support for existing v1 sequences."""
import re
import sys
from pathlib import Path
from urllib.parse import unquote

SECTIONS = (
    "Objective", "Why this comes now", "Prerequisites", "Instructions",
    "Code and destinations", "Verify", "Troubleshooting", "Evidence and limits",
    "Completion gate",
)


def _validate_legacy(root):
    errors = []
    files = sorted(root.glob("[0-9][0-9]-*.md"))
    readme = root / "README.md"
    if not readme.is_file() or not files or not (root / "images").is_dir():
        errors.append("Expected README.md, numbered steps and images directory")
    overview = readme.read_text(encoding="utf-8") if readme.is_file() else ""
    for index, path in enumerate(files, 1):
        body = path.read_text(encoding="utf-8")
        if not path.name.startswith(f"{index:02d}-"):
            errors.append(f"{path.name}: numbering is not consecutive")
        if not re.match(rf"# {index:02d} [—-] ", body):
            errors.append(f"{path.name}: heading number does not match its position")
        offsets = [body.find(f"\n## {section}\n") for section in SECTIONS]
        if -1 in offsets or offsets != sorted(offsets):
            errors.append(f"{path.name}: required sections missing or out of order")
        gate = body.split("## Completion gate", 1)[-1]
        if "PASS:" not in gate or "FAIL:" not in gate:
            errors.append(f"{path.name}: PASS/FAIL gate missing")
        expected = files[index].name if index < len(files) else "README.md"
        if not re.search(r"\[Next:[^\]]+\]\(" + re.escape(expected) + r"\)\s*$", body):
            errors.append(f"{path.name}: final next link must target {expected}")
        if not re.search(r"^- \[[ xX]\] \[[^\]]+\]\(" + re.escape(path.name) + r"\)", overview, re.M):
            errors.append(f"{path.name}: README progress entry missing")
    entries = re.findall(r"^- \[[ xX]\] \[[^\]]+\]\((\d\d-[^)]+\.md)\)", overview, re.M)
    if entries != [path.name for path in files]:
        errors.append("README progress steps must appear once each in execution order")
    documents = sorted(root.rglob("*.md"))
    errors.extend(_check_documents(root, documents))
    return files, documents, errors


def _without_examples(body):
    return re.sub(r"```.*?```", "", body, flags=re.S)


def _check_documents(root, documents):
    errors = []
    for path in documents:
        body = path.read_text(encoding="utf-8")
        # Ignore fenced examples when resolving links.
        body = _without_examples(body)
        for target in re.findall(r"!?\[[^\]]*\]\(([^)]+)\)", body):
            target = target.strip("<>")
            if re.match(r"[a-zA-Z]+:", target) or target.startswith("#"):
                continue
            local = unquote(target.split("#", 1)[0])
            if not (path.parent / local).exists():
                errors.append(f"{path.relative_to(root)}: missing link {target}")
        for number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
            if line.rstrip() != line:
                errors.append(f"{path.name}:{number}: trailing whitespace")
    return errors


def validate(root):
    root = Path(root)
    if any(root.glob("[0-9][0-9]-*.md")):
        return _validate_legacy(root)

    errors = []
    readme = root / "README.md"
    documents = sorted(root.rglob("*.md"))
    if not readme.is_file():
        errors.append("Expected a single-document creation reference in README.md")
        return [], documents, errors + _check_documents(root, documents)

    body = _without_examples(readme.read_text(encoding="utf-8"))
    titles = re.findall(r"^# \S.*$", body, re.M)
    if len(titles) != 1:
        errors.append("README.md: expected one document title")

    sections = list(re.finditer(r"^## (.+)$", body, re.M))
    numbers = []
    labels = []
    for index, section in enumerate(sections):
        match = re.fullmatch(r"(\d+)\.\s+(.+)", section[1])
        if not match:
            errors.append(f"README.md: section must be numbered: {section[1]}")
            continue
        numbers.append(int(match[1]))
        labels.append(match[2].strip().lower())
        end = sections[index + 1].start() if index + 1 < len(sections) else len(body)
        if not body[section.end():end].strip():
            errors.append(f"README.md: empty section: {section[1]}")

    if len(sections) < 3 or numbers != list(range(1, len(sections) + 1)):
        errors.append("README.md: use consecutive numbered sections starting at 1")
    if labels[-2:] != ["completion check", "sources and documentation validation"]:
        errors.append("README.md: end with Completion check and Sources and documentation validation")

    completion = next((index for index, section in enumerate(sections)
                       if re.fullmatch(r"\d+\.\s+Completion check", section[1], re.I)), None)
    if completion is not None:
        end = sections[completion + 1].start() if completion + 1 < len(sections) else len(body)
        checklist = body[sections[completion].end():end]
        if not re.search(r"^- \[[ xX]\] \S", checklist, re.M):
            errors.append("README.md: Completion check needs at least one nonempty checkbox entry")

    errors.extend(_check_documents(root, documents))
    return [readme], documents, errors


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("Usage: validate_guide.py <guide-directory>")
    root = Path(sys.argv[1]).resolve()
    files, docs, errors = validate(root)
    mode = "legacy sequence" if any(root.glob("[0-9][0-9]-*.md")) else "single-document reference"
    print("\n".join(errors) if errors else f"PASS: {mode}; {len(docs)} Markdown files; structure, local links, numbering, checklist and whitespace")
    raise SystemExit(bool(errors))
