import TurndownService from "turndown";
// @ts-expect-error - no type declarations are published for this plugin
import { gfm } from "turndown-plugin-gfm";

/**
 * Convert the normalised assistant-message HTML to Markdown, preserving fenced code blocks
 * (with language), lists, tables, emphasis and links. Runs in Node so it is unit-testable.
 */
export function htmlToMarkdown(html: string): string {
  const td = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-", emDelimiter: "*" });
  td.use(gfm);
  td.addRule("harnessCodeBlocks", {
    filter: (node) => node.nodeName === "PRE",
    replacement: (_content, node) => {
      const el = node as unknown as { getAttribute(n: string): string | null; querySelector(s: string): { textContent: string | null; getAttribute(n: string): string | null } | null; textContent: string | null };
      const code = el.querySelector("code");
      let lang = el.getAttribute("data-lang") ?? "";
      if (!lang) lang = ((code?.getAttribute("class") ?? "").match(/language-([\w+#.-]+)/) ?? [])[1] ?? "";
      const text = (code?.textContent ?? el.textContent ?? "").replace(/\n$/, "");
      const longest = Math.max(2, ...(text.match(/`+/g) ?? []).map((r) => r.length));
      const fence = "`".repeat(longest + 1);
      return `\n\n${fence}${lang}\n${text}\n${fence}\n\n`;
    },
  });
  return td
    .turndown(html)
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
