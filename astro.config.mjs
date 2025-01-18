import relativeLinks from 'astro-relative-links';
import { defineConfig } from 'astro/config';
import eslint from 'vite-plugin-eslint';
import license from 'rollup-plugin-license';

export default defineConfig({
  server: {
    host: true,
    open: true,
  },
  // html圧縮する場合はtrueにする
  compressHTML: false,
  cssCodeSplit: true,
  integrations: [relativeLinks()],
  build: {
    assets: 'assets/js',
  },
  vite: {
    build: {
      // minifyを有効にする場合はtrueにする
      minify: 'terser',
      terserOptions: {
        // コメント削除
        format: { comments: false },
        // consoleの削除
        compress: { drop_console: true },
      },
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            // 拡張子を取得
            let extType =
              assetInfo.names?.[0]?.split('.').at(-1) ||
              assetInfo.fileName.split('.').at(-1);
            // ファイルタイプごとのフォルダ分け
            let folder = 'others';
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              folder = 'images';
            } else if (/css|scss/i.test(extType)) {
              folder = 'styles';
            }
            return `assets/${folder}/index[extname]`;
          },
          entryFileNames: 'assets/js/index.js',
        },
      },
    },
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: ``,
        },
      },
    },
    plugins: [
      // 使用しているライブラリのライセンス出力
      license({
        thirdParty: {
          output: 'dist/assets/js/license.txt',
          includePrivate: true,
        },
      }),
      eslint()
    ],
  },
});
