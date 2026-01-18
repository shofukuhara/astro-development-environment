import fs from "fs";
import { JSDOM } from "jsdom";

// -------- index.html 側 --------
const htmlDoc = new JSDOM(fs.readFileSync("./dist/index.html", "utf-8")).window.document;

// 抜きたい要素
const sourceEl = htmlDoc.getElementById("202512");
if (!sourceEl) {
  console.error("idがありません！");
  process.exit(1);
}

// -------- index.php 側 --------
const phpContent = fs.readFileSync("./_php/index.php", "utf-8");

// PHP でも JSDOM を使って DOM として扱う
const phpDom = new JSDOM(phpContent);
const phpDoc = phpDom.window.document;

// 差し込み先
const contentWrap = phpDoc.getElementById("contentWrap");
if (!contentWrap) {
  console.error("#contentWrapが見つからないよ！");
  process.exit(1);
}

// contentWrap の中身を完全にクリアして、新しい要素だけ入れる
contentWrap.innerHTML = "";
contentWrap.appendChild(sourceEl.cloneNode(true));

// -------- 書き出し --------
fs.writeFileSync("./_php/index.php", phpDom.serialize());

console.log("置換完了！");
