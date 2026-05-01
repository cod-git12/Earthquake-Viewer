# Earthquake-Viewer v1.1.1

最新の地震情報をリアルタイムで取得・視覚化する、高機能な地震モニターツールです。

[ [日本語](README_ja.md) | [English](README.md) ]

![Screenshot](image/screenshot_03.png)

## 概要

Earthquake-Viewerは、WebSocketを利用して最新の地震速報を即座に受信し、インタラクティブなマップと詳細なデータリストで表示するWebアプリケーションです。サイバーパンク・ダークを基調としたデザインに、Canvasアニメーションや動的な統計機能を備えています。

## 🚀 主な機能

- **リアルタイム同期**: WebSocket接続により、地震発生とほぼ同時に情報を更新（P2P地震情報 JSON APIを使用）。
- **高度なマップ表示**: 
  - Leaflet.jsによる震源プロット。
  - **細分区域（震央地名）**および**都道府県境界**の精密な境界線描画。
  - 地図操作時の視認性を確保した最適化。
- **データフィルタリング**: 震度、マグニチュード、深さなどに基づくリアルタイム絞り込み機能。
- **動的ビジュアル**:
  - ヘッダーでの波形Canvasアニメーション。
  - 最大震度に応じた動的なUIカラーチェンジ。
- **ユーザー体験**: 
  - 初回起動時のクイックチュートリアル機能。
  - 詳細な統計パネル（震度分布、深さ別傾向など）。
- **レスポンシブデザイン**: Chromebookやモバイル環境でも動作する柔軟なUI。

## 🛠 技術構成

- **Frontend**: HTML5 / CSS3 / JavaScript (Vanilla JS)
- **Map Engine**: [Leaflet.js](https://leafletjs.com/)
- **Data Source**: P2P地震情報 WebSocket API / Fetch API
- **Visuals**: HTML5 Canvas (Waveform Animation), TopoJSON
- **Fonts**: Share Tech Mono, Barlow Condensed, Barlow (Google Fonts)

## 📦 導入方法

このプロジェクトは静的ファイルのみで構成されているため、特別なサーバー設定なしですぐに使用できます。

1. このリポジトリをダウンロードまたはクローンします。
2. `index.html` をブラウザで開きます。
   - ※ 開発環境として VS Code の `Live Server` などの利用を推奨します。

```bash
git clone https://github.com/cod-git12/Earthquake-Viewer.git
cd Earthquake-Viewer
# ブラウザで index.html を開く
```

また、[GitHub Pages](https://cod-git12.github.io/Earthquake-Viewer) から直接閲覧することも可能です。

## 📂 ファイル構成

- `index.html`: メインアプリケーション
- `regionGeo_v2.js`: 震央地名（細分区域）のGeoJSONデータ
- `prefectures.js`: 都道府県境界のGeoJSONデータ
- `cityCoords.js`: 地域・都市マッピングデータ
- `preview.html`: 開発中のアプリケーション

## 📄 ライセンス

このプロジェクトは **Apache License 2.0** の下で公開されています。\
詳細は [LICENSE](LICENSE) ファイルまたは [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) の条文を参照してください。

## ⚠️ 注意事項

- 地図データおよび境界線データの描画には、インターネット接続が必要です。
- 本ツールに表示される情報は、気象庁等の公的な情報を元にしていますが、ネットワークの遅延やAPIの仕様により、情報の到達時間に差異が生じる場合があります。
- 本アプリケーションは、緊急地震速報の代用としてではなく、情報の視覚化・確認用としてご利用ください。