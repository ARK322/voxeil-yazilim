import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "tech-icons");
const packageIconsDir = path.join(root, "node_modules", "simple-icons", "icons");

const slugAliases = {
  java: "openjdk",
  csharp: "dotnet",
};

/** Icons removed/renamed in newer simple-icons — pin CDN copies */
const cdnFallbacks = {
  amazonaws: "https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/amazonaws.svg",
  microsoftazure: "https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/microsoftazure.svg",
};

const icons = [
  "react",
  "nextdotjs",
  "typescript",
  "javascript",
  "nodedotjs",
  "python",
  "java",
  "csharp",
  "php",
  "go",
  "rust",
  "vuedotjs",
  "angular",
  "svelte",
  "tailwindcss",
  "bootstrap",
  "mui",
  "mongodb",
  "postgresql",
  "mysql",
  "redis",
  "firebase",
  "amazonaws",
  "microsoftazure",
  "docker",
  "kubernetes",
  "git",
  "github",
  "gitlab",
  "graphql",
  "express",
  "django",
  "flask",
  "laravel",
  "spring",
  "tensorflow",
  "pandas",
  "numpy",
];

fs.mkdirSync(outDir, { recursive: true });

function hasUsableFile(filePath) {
  try {
    return fs.existsSync(filePath) && fs.statSync(filePath).size > 0;
  } catch {
    return false;
  }
}

async function copyIcon(slug) {
  const sourceSlug = slugAliases[slug] ?? slug;
  const src = path.join(packageIconsDir, `${sourceSlug}.svg`);
  const dest = path.join(outDir, `${slug}.svg`);

  if (hasUsableFile(src)) {
    fs.copyFileSync(src, dest);
    return true;
  }

  const cdnUrl = cdnFallbacks[slug];
  if (cdnUrl) {
    try {
      const res = await fetch(cdnUrl);
      if (res.ok) {
        fs.writeFileSync(dest, await res.text());
        return true;
      }
    } catch {
      // fall through to existing file / warn
    }
  }

  // Keep previously committed icons if package/CDN unavailable (e.g. offline CI)
  if (hasUsableFile(dest)) {
    return true;
  }

  console.warn(`Missing icon: ${slug}`);
  return false;
}

let copied = 0;

for (const slug of icons) {
  if (await copyIcon(slug)) copied += 1;
}

console.log(`Synced ${copied}/${icons.length} tech icons to public/tech-icons/`);

if (copied < icons.length) {
  console.error(
    "Tech icon sync incomplete. Run `npm install` (needs simple-icons) or check network for CDN fallbacks."
  );
  process.exitCode = 1;
}
