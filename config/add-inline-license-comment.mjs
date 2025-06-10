import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, "../dist/index.html"); // 適宜ファイルパスを調整

const licenseComment = "/*! Please refer to license.txt for license details. */";

if (!fs.existsSync(htmlPath)) {
  console.error("HTMLファイルが見つかりません:", htmlPath);
  process.exit(1);
}

let html = fs.readFileSync(htmlPath, "utf8");

// <script type="module"> の中にコメントを追加
html = html.replace(
  /<script type="module">([\s\S]*?)<\/script>/,
  (match, jsContent) => {
    // すでにコメントが含まれていたらスキップ
    if (jsContent.includes(licenseComment)) return match;
    return `<script type="module">\n${licenseComment}\n${jsContent.trim()}\n</script>`;
  }
);

// 上書き保存
fs.writeFileSync(htmlPath, html, "utf8");
console.log("✅ ライセンスコメントを <script> 内に追加しました！");
