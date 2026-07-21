import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { execSync } from "node:child_process";

let commitHash = "dev";
try {
  commitHash = execSync("git rev-parse --short HEAD").toString().trim();
} catch {}

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/git-journey/",
  define: {
    __COMMIT_HASH__: JSON.stringify(commitHash),
    __REPO_URL__: JSON.stringify("https://github.com/victorsnz/git-journey"),
  },
});
