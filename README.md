### nodeバージョン
- node v22.12.0
- npm v10.9.0


| Command                 | Action                                           |
| :---------------------- | :----------------------------------------------- |
| `npm install`           | 依存関係をインストール                             　|
| `npm run dev`           | ローカル開発サーバー localhost:4321起動              |
| `npm run build`         | ビルドファイル出力 `./dist/`                        |
| `npm run preview`       | ビルドしたファイルで表示確認 localhost:4321起動　　　  |
| `npm run style:lint`    | SCSSファイルのLintチェックを実行                     |
| `npm run js:lint`       | jsファイルのLintチェックを実行                       |
| `npm run format`        | ファイルをフォーマット                             　|


```text
/
├── dist/  # ビルド後の出力フォルダ
│   ├── assets/
│   │   ├── styles
│   │   ├── js
│   │   └── images
│   └── index.html
│ 
├── node_modules/  # インストールされたパッケージ
│ 
├── public/  # 静的ファイル（OGP、Favicon、非圧縮画像など）
│   └── assets/
│       └── images
│ 
├── src/  # 開発用フォルダ（Astroコンポーネントやページ、スタイル）
│   ├── assets  # 画像などを最適化して出力
│   ├── components  # Astroコンポーネント（ボタン、カードなど）
│   ├── js  # Vanilla JS
│   ├── layouts  # Astroレイアウト（ヘッダー、フッターなど）
│   ├── pages  # ページコンポーネント（About、News など）
│   └── styles/  # SCSSファイル
│       ├── foundation/
│       │   ├── setting  # 設定ファイル（メディアクエリ、フォント計算など）
│       │   └── variable  # 変数（色、フォント、イージングなど）
│       ├── layout  # レイアウト用スタイル（ヘッダー、フッターなど）
│       ├── object/
│       │   ├── components  # UIコンポーネント（ボタン、カードなど）
│       │   ├── elements  # 小さいパーツ（タイトル、テキスト、画像など）
│       │   └── pages  # ページ単位のスタイル
│       └── index.scss  # メインのスタイルシート
│ 
├── .gitignore  # Gitで無視するファイル
├── .prettierignore  # Prettierに無視させるファイル
├── .prettierrc  # Prettierの設定
├── astro.config.mjs  # Astroの設定ファイル（ビルド設定、開発サーバー設定など）
├── package-lock.json  # 依存関係のロックファイル
├── package.json  # プロジェクトの依存関係やスクリプト
├── README.md  # ドキュメント
└── tsconfig.json  # TypeScriptの設定ファイル
```