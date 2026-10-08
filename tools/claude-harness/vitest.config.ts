import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/**/*.test.ts"],
    // Live suites require explicit opt-in; baseline validation starts no browser/backend.
    exclude: [
      ...(process.env.HARNESS_BROWSER_TESTS === "1" ? [] : ["test/browser/**"]),
      ...(process.env.HARNESS_SMOKE === "1" ? [] : ["test/smoke/**"]),
    ],
    testTimeout: 60_000,
    hookTimeout: 60_000,
    pool: "forks",
  },
});
