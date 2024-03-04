# 説明書

このリポジトリはお試しプログラムのリポジトリです。
ディレクトリ構成は以下の通りです。

| ディレクトリ名 | 説明 |
| --- | --- |
| javascript/ | JavaScriptのお試しプログラム集 |

## JavaScript

### request_host_mark

ブラウザに表示されているURLのホスト名、ポート番号、パスを判断し、指定のURLであればHTML上にマークを表示するスクリプトです。
サンプルでは、以下のマークが表示されます。

| URL | 表示されるマーク | マークの色 |
| --- | --- | --- |
| http://localhost:1080/aaa/ | Mark A | マジェンダ |
| http://localhost:1080/bbb/ | Mark B | シアン |
| http://localhost:1080/ccc/ | Mark C | グリーン |
| http://localhost:1080/[上記以外] | Mark other | グレー |
| その他のURL | なし | なし |
