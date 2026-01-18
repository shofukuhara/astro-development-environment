import { UserAgentParser } from "./utils/userAgentParser";
import { ViewportManager } from "./utils/viewportManager";

// 共通処理格納
const commonModules = {
  common: () => {
    new ViewportManager().init();
    new UserAgentParser().init();
  },
};

// 各ページごとの処理格納
const pageModules = {
  top: () => {},
};

// 各ページの処理チェック
const page = document.querySelector("[data-page]");
if (page) {
  const pageAttribute = page.getAttribute("data-page");
  commonModules.common(); // 共通処理を実行
  if (pageModules[pageAttribute]) {
    pageModules[pageAttribute](); // 各ページの処理を実行
  }
}

import gsap from "gsap";
class masonry {
  constructor() {
    this.item = document.querySelector("[data-masonry]");
  }
  init() {
    new Masonry(this.item, {
      itemSelector: "[data-masonry-item]",
      columnWidth: 200,
    });
    gsap.to(this.item, {
      autoAlpha: 1,
      duration: 1,
    });
  }
}

new masonry.init();
