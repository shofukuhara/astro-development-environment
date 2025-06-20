import relativeLinks from "astro-relative-links";
import { defineConfig } from "astro/config";
import terser from "@rollup/plugin-terser";
import path from "path";
import fs from "fs";
import license from "rollup-plugin-license";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

// __dirnameの正しい定義
const __dirname = dirname(fileURLToPath(import.meta.url));

// ライセンスコメント追加プラグイン（インライン化しない場合）
const addLicenseComment = () => ({
  name: "add-license-comment",
  writeBundle: () => {
    // ビルド後のJSファイルパス
    const filePath = path.resolve(__dirname, "dist/assets/js/index.js");
    const comment =
      "/*! Please refer to license.txt for the details of the license. */\n";

    // ファイル存在確認を追加
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      return;
    }
    try {
      const data = fs.readFileSync(filePath, "utf8");
      const modifiedData = comment + data;
      fs.writeFileSync(filePath, modifiedData, "utf8");
      console.log(`License comment added to: ${filePath}`);
    } catch (err) {
      console.error(`Error processing file ${filePath}:`, err);
    }
  },
});

export default defineConfig({
  server: {
    host: true,
    open: true,
  },
  compressHTML: true, // html圧縮する場合はtrue（prettierの設定で圧縮上書きされてます）
  integrations: [relativeLinks()], // 相対パスを使えるように設定
  vite: {
    build: {
      cssMinify: true, // css圧縮する場合はtrue
      cssCodeSplit: true, // cssコード分割を有効の場合はtrue
      // assetsInlineLimit: 0, //インラインでのcss出力無効
      minify: "terser",
      terserOptions: {
        format: { comments: false }, // コメント削除
        compress: { drop_console: true }, // console削除
      },
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            // 拡張子を取得
            let extType =
              assetInfo.names?.[0]?.split(".").at(-1) ||
              assetInfo.fileName.split(".").at(-1);
            // ファイルタイプごとのフォルダ分け
            let folder = "others";
            if (
              /png|jpe?g|svg|gif|tiff?|bmp|ico|webp|avif|heic|heif/i.test(
                extType
              )
            ) {
              folder = "images";
              return "assets/images/[name].[extname]";
            } else if (/css|scss/i.test(extType)) {
              folder = "css";
              return "assets/css/index.css";
            }
            return `assets/${folder}/[name].[extname]`;
          },
          entryFileNames: "assets/js/index.js",
        },
        plugins: [addLicenseComment(), terser()],
      },
    },
    css: {
      postcss: "./config/postcss.config.cjs",
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "/src/assets/css/foundation/global/index.scss" as *;
          `,
        },
      },
    },
    plugins: [
      // 使用しているライブラリのライセンス出力
      license({
        thirdParty: {
          // output: "dist/assets/js/license.txt",//インライン化
          output: "dist/license.txt",//インライン化
          includePrivate: true,
        },
      }),
    ],
  },
});
