# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## アーキテクチャ

これは2つの主要なコンポーネントで構成されるモノレポのポートフォリオプロジェクトです：

- **`api/`**: Hono（軽量Webフレームワーク）で構築されたバックエンドAPI
  - ES modulesを使用したTypeScript
  - データベース操作にDrizzle ORM
  - バリデーションにZod
  - `@hono/node-server`によるNode.jsサーバー（開発環境）
  - Cloudflare Workersにデプロイ
  - ポート3000で実行（ローカル開発）

- **`app/`**: React + Viteで構築されたフロントエンドアプリケーション
  - TypeScriptを使用したReact 19
  - 開発サーバーとビルドツールにVite
  - スタイリングにTailwindCSS + shadcn/ui
  - コード品質にESLintとBiome
  - テストにVitest
  - Cloudflare Pagesにデプロイ
  - ポート5173で実行（ローカル開発）

## デプロイ

- **API**: Cloudflare Workersにデプロイ
- **App**: Cloudflare Pagesにデプロイ

## 開発コマンド

### API（`api/`ディレクトリから実行）
- `npm run dev` - ホットリロード付きで開発サーバーを起動（tsx watchを使用）
- `npm run build` - 本番用にビルド（TypeScriptコンパイル）
- `npm start` - 本番ビルドを実行
- `npm run deploy` - Cloudflare Workersにデプロイ（wrangler使用）

### App（`app/`ディレクトリから実行）
- `npm run dev` - Vite開発サーバーを起動
- `npm run build` - 本番用にビルド（TypeScriptチェック + Viteビルド）
- `npm run lint` - ESLintを実行
- `npm run preview` - 本番ビルドをローカルでプレビュー
- `npm run deploy` - Cloudflare Pagesにデプロイ（wrangler使用）

### Docker（ルートディレクトリから実行）
- `docker-compose up` - 両方のサービスをコンテナで実行
  - アプリは http://localhost:5173 で利用可能
  - APIは http://localhost:3000 で利用可能

## 主要技術

### バックエンド (api/)
- **Hono**: Node.js用の高速で軽量なWebフレームワーク
- **Drizzle ORM**: 型安全なデータベースツールキット（設定済みだが未実装）
- **Zod**: スキーマバリデーションライブラリ
- **tsx**: TypeScriptの実行とウォッチモード
- **Cloudflare Workers**: デプロイ環境

### フロントエンド (app/)
- **React 19**: UIライブラリ
- **Vite**: ビルドツールと開発サーバー
- **TailwindCSS v4 + shadcn/ui**: ユーティリティファーストのCSSフレームワーク + UIコンポーネント
- **TypeScript**: 型安全性
- **Vitest**: ユニットテストフレームワーク
- **Cloudflare Pages**: デプロイ環境

## プロジェクト構造

```
portfolio/
├── api/                  # バックエンドAPI
│   ├── src/
│   │   └── index.ts     # Honoサーバーのエントリーポイント
│   ├── package.json
│   ├── tsconfig.json
│   ├── wrangler.toml    # Cloudflare Workers設定
│   └── Dockerfile
├── app/                  # フロントエンドReactアプリ
│   ├── src/
│   │   ├── main.tsx     # Reactのエントリーポイント
│   │   ├── App.tsx      # メインのAppコンポーネント
│   │   └── index.css    # グローバルスタイル
│   ├── package.json
│   ├── vite.config.ts
│   ├── biome.json
│   ├── eslint.config.js
│   └── Dockerfile
└── docker-compose.yml    # 両方のサービスを調整
```
