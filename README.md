# SEISMO — Earthquake Monitor v2.5.0

A highly functional, real-time earthquake monitoring and visualization tool featuring a robust, secure backend for managing user feedback and location requests. Migrated from GitHub Pages to a dedicated domain and empowered by a hardened Supabase backend.

[ [日本語](README_ja.md) | [English](README.md) ]

![Screenshot](image/screenshot_04.png)

## Overview

SEISMO (formerly Earthquake-Viewer) is a web application that utilizes WebSockets to instantly ingest real-time earthquake alerts, visualizing them on an interactive map and a detailed data stream. Built with a sleek cyberpunk-dark aesthetic, it features high-performance HTML5 Canvas animations and dynamic statistical panels.

Starting with this version, we have introduced a crowdsourced "Unregistered Location Request" ecosystem to continuously improve map accuracy. The entire management dashboard is secured at the highest level using Supabase Authentication and fine-grained Row Level Security (RLS).

## 🚀 Key Features

- **Real-Time Synchronization**: Instantly updates upon earthquake detection via active WebSocket connections (powered by the P2P Earthquake Information JSON API).
- **Advanced Map Rendering**: 
  - Dynamic epicenter and seismic intensity plotting via Leaflet.js.
  - Highly accurate boundary lines for **Sub-prefecture regions (Epicenter Names)** and **Prefecture Borders**.
  - Optimized map interactions ensuring flawless visibility and performance under heavy rendering loads.
  - A dynamic HTML hyperlinking feature implemented within the Changelog that safely processes custom `<link>` tags while maintaining strict string escaping (sanitization).
- **On-the-Fly Data Filtering**: Real-time filtering based on seismic intensity, magnitude, and focal depth.
- **Dynamic Visuals & User Experience**:
  - Immersive HTML5 Canvas waveform animations integrated into the header.
  - Dynamic UI color-shifts matching the maximum seismic intensity of the active event.
  - An intuitive quick-start interactive tutorial for first-time visitors.
  - Granular statistics panel displaying seismic distribution and depth-based trends.
- **Crowdsourced Location Request Ecosystem (NEW)**:
  - `request.html`: A localized, bilingual (JP/EN) intake form allowing users to submit missing locations, JMA observation points, or additional metadata.
  - `status.html`: A public-facing progress tracker displaying real-time request lifecycles (`PENDING` / `RESOLVED`).
  - `admin.html`: A secure, password-restricted administrative dashboard tied directly to active Supabase sessions, granting one-click moderation capabilities (Approve, Reset to Pending, or Delete).

## 🛡 Security Architecture

To completely eliminate vulnerable front-end login bypasses (such as manually overriding CSS classes via Browser DevTools), the application directly offloads all security policies to the Supabase database engine.

- **Supabase Auth (JWT Token Authentication)**: Secure administrative sessions are strictly verified server-side. Upon successful login, the server issues a cryptographically signed JSON Web Token (`sb-access-token`) stored locally.
- **Strict Network Layer Isolation via RLS (Row Level Security)**:
  - Unauthorized client-side database manipulation via the DevTools console (e.g., raw `PATCH` or `DELETE` payloads) is intercepted and rejected immediately by the PostgreSQL layer.
  - Public guests (`anon` role) are exclusively scoped to `INSERT` privileges for submitting requests and `SELECT` privileges for viewing public status tracking.
  - Only authenticated administrators (`authenticated` role) possess sweeping read/write privileges (`ALL`) over the database schema.

## 🛠 Tech Stack

- **Frontend**: HTML5 / CSS3 / JavaScript (Vanilla JS)
- **Map Engine**: [Leaflet.js](https://leafletjs.com/)
- **Backend / Database**: [Supabase](https://supabase.com/) (PostgreSQL / Supabase Auth / Row Level Security)
- **Data Pipeline**: P2P Earthquake Information WebSocket API / Fetch API
- **Visuals**: HTML5 Canvas (Waveform Animation), TopoJSON
- **Typography**: Share Tech Mono, Barlow Condensed, Barlow (via Google Fonts)

## 📂 Project Structure

- `index.html`: Main application (The primary earthquake monitoring interface)
- `script.js`: Main application (Script parts)
- `style.css`: Main application (Style parts)
- `request.html`: Public user form for submitting unregistered location queries
- `status.html`: Public live-tracking dashboard for review statuses
- `admin.html`: Administrator-only management console with explicit auth enforcement
- `regionGeo_v2.js`: Precise GeoJSON boundary schemas for sub-prefecture regions
- `prefectures.js`: Precise GeoJSON boundaries for prefecture outlines
- `cityCoords.js`: Regional and municipal geographical mapping coordinates

## 📦 Local Development & Deployment

The production environment is actively deployed on a high-speed, hardened architecture under a dedicated domain ( `https://earthquake.5kaideta.cfd` ). If you wish to review or test the codebase locally, please follow the steps below:

1. Clone or download this repository.
2. Open `admin.html`, `request.html`, and `status.html`, and substitute the placeholders for `SB_URL` and `SB_KEY` with your specific Supabase project credentials.
3. Serve the project root directory using a local web server (using VS Code's `Live Server` extension is highly recommended).

```bash
git clone https://github.com/cod-git12/Earthquake-Viewer.git
cd Earthquake-Viewer
# Spin up your preferred local server environment and open index.html
```

## 📄 License

This project is open-source software licensed under the **Apache License 2.0**.\
For more information, please see the [LICENSE](LICENSE) file or consult the official terms at [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## ⚠️ Important Considerations

- An active internet connection is strictly required to fetch map topologies, boundary assets, and synchronize the live Supabase request database.
- While the platform ingests structural reports derived directly from official government bodies like the Japan Meteorological Agency (JMA), minor network jitter, API rate limits, or downstream propagation delays can cause temporary delivery drift. This application is intended solely as an interactive visualization aid and must not be used as an authorized substitute for official JMA early warning systems.