import relativeLinks from "astro-relative-links";
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import license from "rollup-plugin-license";
import path from "path";

// ============================
// 設定エリア
// ============================
const outputPaths = {
  js: "assets/scripts/index.js",
  css: "assets/styles/index.css",
  license: "assets/scripts/license.txt",
};

export default defineConfig({
  server: {
    host: true,
    open: true,
  },
  compressHTML: false,
  integrations: [relativeLinks()],
  vite: {
    build: {
      cssMinify: true,
      cssCodeSplit: false,
      assetsInlineLimit: 0,
      minify: "esbuild",
      rollupOptions: {
        external: [/list/],
        output: {
          // JS出力先
          entryFileNames: outputPaths.js,

          // CSSや画像などのアセット出力先
          assetFileNames: (assetInfo) => {
            const ext = path
              .extname(assetInfo.name || "")
              .replace(".", "")
              .toLowerCase();

            if (
              /png|jpe?g|svg|gif|tiff?|bmp|ico|webp|avif|heic|heif/.test(ext)
            ) {
              return "assets/images/[name].[extname]";
            } else if (/css/.test(ext)) {
              // ✅ CSS出力パスをconfigから指定
              return outputPaths.css;
            }
            return "assets/others/[name].[extname]";
          },
        },
        plugins: [
          license({
            thirdParty: {
              output: path.join("dist", outputPaths.license),
              includePrivate: true,
            },
          }),
        ],
      },
    },

    // SCSS設定
    css: {
      postcss: "./config/postcss.config.cjs",
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "/src/assets/styles/foundation/global/index.scss" as *;
          `,
        },
      },
    },
  },
});
