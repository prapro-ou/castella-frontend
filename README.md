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

## アプリのルート概要

| URL                                         | featuresフォルダ内での配置 | 内容                           |
|---------------------------------------------|-------------------|------------------------------|
| /                                           | home/             | LAページ（実装は未定）                 |
| /register                                   | register/         | 登録画面（実装は未定）                  |
| /login                                      | login/            | ログイン画面                       |
| /destinations                               | destinations/     | DMおよびGroupの概要を確認可能           |
| /destinations/dm/{dm_id}                    | threads/          | そのIDのDMに届いてるメールの概要を確認可能      |
| /destinations/group/{group_id}              | threads/          | そのIDのGroupに届いてるメールの概要を確認可能   |
| /destinations/dm/{dm_id}/{message_id}       | messages/         | 特定のDM向けメッセージの詳細および返信を確認可能    |
| /destinations/group/{group_id}/{message_id} | messages/         | 特定のGroup向けメッセージの詳細および返信を確認可能 |

## フォルダ分け

| フォルダ名                  | 内容                                     |
|------------------------|----------------------------------------|
| app                    | 表示するページ群                               |
| features               | ページごとのパーツ群                             |
| features/**/components | コンポーネント群（**以下でのみ利用する）                  |
| features/**/data       | データ取得のロジック（通信部分）                       |
| public                 | アプリ内で利用する画像等([アイコンの意味]_[色].[拡張子]で保存する) |

## アーキテクチャ

- `app`下にある`page.js`でBFFへの通信周りを実行（ファイル分けする予定は現状なし）
- `pages.js`で利用するコンポーネントおよびリポジトリは`features`周りに分ける

## 命名規則

基本は[こちらの命名規則](https://analogic.jp/naming-convention/)に従う

追加点・変更点は以下の通り

| 変更箇所                | 使用する規則                                             |
|---------------------|----------------------------------------------------|
| コンポーネント関数（JSXを返す関数） | UpperCamelCaseで、基本名詞を付けるようにする（例外：副作用を起こすコンポーネント関数） |
| ファイル名               | UpperCamelCase                                     |
| 画像名                 | snake_case                                         |
