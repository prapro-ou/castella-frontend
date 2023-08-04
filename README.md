# Castella

Mailをチャット形式に変換するWebアプリケーション

## 機能

| Path                                  | Methods | 内容         |
|---------------------------------------|---------|------------|
| /                                     | GET     | Landingページ |
| login                                 | GET     | ログインページ    |
| talks                                 | GET     | メール相手を選択   |
| talks                                 | POST    | メール相手を追加   |
| talks/{talks_id}/threads              | GET     | メール選択画面    |
| talks/{talks_id}/threads              | POST    | 新規メールを作成   |
| talks/{talks_id}/threads/{threads_id} | GET     | メール詳細画面    |
| talks/{talks_id}/threads/{threads_id} | POST    | 返信メールを作成   |

将来的に以下のように変更予定
talks -> destinations
threads -> messages

また以下の機能を検討中
- メール編集機能
- 検索機能
- メール取り消し機能（遅延送信）

## 環境構築

```shell
git clone https://github.com/prapro-ou/castella-frontend.git
cd castella-frontend
npm ci
npm run dev
```

## フォルダ分け

| フォルダ名                  | 内容                    |
|------------------------|-----------------------|
| app                    | 表示するページ群              |
| features               | ページごとのパーツ群            |
| features/**/components | コンポーネント群（**以下でのみ利用する） |
| public                 | アプリ内で利用する画像等          |

## アーキテクチャ

- `app`下にある`pages.js`でBFFへの通信周りを実行（ファイル分けする予定は現状なし）
- コンポーネント群は`features`周りに分ける
- 何かしらフロントエンドで機能を持たせる必要が出てくれば`features/usecase`を用意する予定

## 命名規則

基本は[こちらの命名規則](https://analogic.jp/naming-convention/)に従う

追加点・変更点は以下の通り

| 変更箇所                | 使用する規則                                             |
|---------------------|----------------------------------------------------|
| コンポーネント関数（JSXを返す関数） | UpperCamelCaseで、基本名詞を付けるようにする（例外：副作用を起こすコンポーネント関数） |
| ファイル名               | UpperCamelCase                                     |
