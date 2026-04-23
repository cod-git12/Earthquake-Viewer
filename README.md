# Earthquake-Viewer v1.0.1

A high-performance earthquake monitoring and visualization tool that tracks real-time seismic activity.

[ [日本語](README_ja.md) | [English](README.md) ]

![Screenshot](image/screenshot_01.png)

## Overview

Earthquake-Viewer is a web application that utilizes WebSockets to receive the latest earthquake reports instantly. It visualizes data through an interactive map and a detailed data list, featuring a high-visibility design inspired by a cyberpunk-dark aesthetic.

## 🚀 Features

- **Real-time Synchronization**: Receive and display earthquake data almost instantly via WebSocket connection.
- **Interactive Map**: Smooth map navigation and epicenter plotting powered by Leaflet.js.
- **Advanced Filtering**: Filter data based on seismic intensity, magnitude, depth, and more.
- **Statistical Analysis**: Automatically aggregates recent earthquake trends and displays them in a statistics panel.
- **Dark UI**: A modern, high-density dark theme designed for both aesthetics and readability.

## 🛠 Tech Stack

- **HTML5 / CSS3 / JavaScript (Vanilla JS)**
- **Map Engine**: [Leaflet.js](https://leafletjs.com/)
- **API/Data**: Public APIs such as P2P Earthquake Information (WebSocket/Fetch)
- **Fonts**: Share Tech Mono, Barlow Condensed (Google Fonts)

## 📦 Installation

Since this project consists of static files, it can be used immediately without any special server configuration.

1. Download or clone this repository.
2. Open `index.html` in your browser.
   - *Note: Using a tool like VS Code's `Live Server` is recommended for the best experience.*

```bash
git clone https://github.com/cod-git12/Earthquake-Viewer.git
cd Earthquake-Viewer
# Open index.html in your browser
```

## 📄 License
This project is licensed under the Apache License 2.0.

See the [LICENSE](LICENSE) file or the [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) Official Text for details.

## ⚠️ Disclaimer
- An active internet connection is required to load map tiles.
- While the information displayed is based on public data (such as from the JMA), there may be delays in information delivery due to network conditions.