### nodeバージョン

- node v22.12.0
- npm v10.9.0

| Command              | Action                                                |
| :------------------- | :---------------------------------------------------- |
| `npm install`        | 依存関係をインストール 　                                 |
| `npm run dev`        | ローカル開発サーバー localhost:4321起動                   |
| `npm run build`      | ビルドファイル出力 `./dist/`                             |
| `npm run preview`    | ビルドしたファイルで表示確認 localhost:4321起動　　　        |
| `npm run style:lint` | SCSSファイルのLintチェックを実行                          |
| `npm run format`     | ファイルをフォーマット 　                                 |
| `npm run renameToPhp`| distに出力されたindex.htmlをindex.phpに変換               |

```text
/
├─ _php #ビルド後の.htmlファイルを.phpにして格納されるディレクトリ
│
├─ dist #ビルド後の成果物が格納されるディレクトリ
│  ├─ assets
│  │  ├─ css
│  │  ├─ fonts
│  │  ├─ images
│  │  └─ js
│  └─ index.html
│
├─ node_modules　#インストールされたパッケージ
│
├─ public #静的ファイルを格納するディレクトリ。ビルド時にそのままdistにコピーされる。（OGP,fontsなど）
│  └─ assets
│     ├─ fonts
│     └─ images
│
├─ src
│  ├─ assets #astroで最適化する画像などを格納
│  ├─ components #再利用可能なAstroコンポーネント（ボタン、カードなど）
│  ├─ js #Vanilla JS
│  ├─ layouts #ページレイアウトのAstroコンポーネント（ヘッダー、フッターなど）
│  ├─ pages #ルーティングに使用されるAstroページコンポーネントト（home,about、news など）
│  └─ css #SCSSファイルを格納するディレクトリ。FLOCSSの構造に基づいている。
│     ├─ foundation
│     │  ├─ setting #設定ファイル（メディアクエリ、フォント計算など）
│     │  └─ variable #変数（色、フォント、イージングなど）
│     │
│     ├─ layout #レイアウト用スタイル（ヘッダー、フッターなど）
│     │
│     ├─ object
│     │  ├─ components #UIコンポーネント（ボタン、カードなど）
│     │  ├─ elements #小さいパーツ（タイトル、テキスト、画像など）
│     │  └─ pages #ページ単位のスタイル
│     └─ index.scss #エントリーファイル
│
├─ .gitignore #Gitの追跡対象外ファイルを指定
├─ .prettierignore #prettier対象外ファイルを指定
├─ .prettierrc #prettierの設定ファイル
├─ astro.config.mjs #Astroの設定ファイル
├─ package-lock.json #npmパッケージの依存関係
├─ package.json #ロジェクトの依存関係やスクリプト
├─ postcss.config.cjs #PostCSSの設定ファイル
├─ README.md #プロジェクトのドキュメント
└─ rename-index-to-php.mjs #index.htmlをPHPファイルに変換するスクリプト
```
