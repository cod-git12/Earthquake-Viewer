'use strict';

// --- i18n Definitions ---
const i18n = {
    en: {
        ldSub: "Real-time Earthquake Monitor", ldWait: "Connecting", ldPrep: "Preparing Map",
        tutGuide: "Introduction — GUIDE", tutTitle: "How to use SEISMO<span>.</span>", tutDesc: "Real-time earthquake monitoring system using P2P Quake WebSocket",
        f1n: "Real-time Map", f1d: "Immediate reflection of epicenters with markers. Click to visualize intensity distribution.",
        f2n: "WebSocket", f2d: "Real-time reception of JMA data. Auto-reconnect included.",
        f3n: "P/S Wave Anim", f3d: "Displays spreading P (red) and S (orange) waves from epicenter. Auto-tracking.",
        f4n: "Alerts", f4d: "Auto-detects M4.0+ or Intensity 4+ with popups. Screen flashes on EEW.",
        f5n: "Detail Panel", f5d: "Displays epicenter, M, intensity, depth, and time in the left panel.",
        f6n: "Filters", f6d: "Filter list and map by Mag and Max Intensity using sliders and chips.",
        f7n: "Report Feature", f7d: "Logs unregistered locations to console. You can <a href='/request'>report</a> them.",
        intLeg: "Intensity Color Code", startBtn: "Start Monitoring →",
        intL1: "Int 1", intL2: "Int 2", intL3: "Int 3", intL4: "Int 4", intL5m: "Int 5-", intL5p: "Int 5+", intL6m: "Int 6-", intL6p: "Int 6+", intL7: "Int 7",
        clTitle: "Update Log", clBtn: "Confirm & Close",
        wsWait: "Connecting", wsLive: "Connected", wsOff: "Disconnected",
        navReq: "Request", navList: "Status", navHelp: "Help", navLog: "History", navLogDetalis: "(detalis)",
        sTitle: "Today's Stats", sBack: "← Back",
        stCount: "Occurrences", stMaxM: "Max Mag", stMaxI: "Max Int", stTotal: "Received",
        stToday: "Today", stObs: "Obs", stTimes: "times",
        fTitle: "Filters", fMinM: "Min M", fMaxI: "Max Int", fAll: "All",
        actTitle: "Today's Activity", listTitle: "Earthquake List",
        noWait: "Waiting for data...", noMatch: "No matches found", noRecv: "Receiving data...",
        ad1: "Ads are not displaying.", ad2: "Could you support our development?", ad3: "[ How to unblock ads ]",
        adM1: "How to unblock ads", adM2: "Click your blocker icon and select 'Turn off for this site'. Reload the page to see ads.", adRel: "Reload", adCls: "Close",
        vUnk: "Unknown", vSec: "sec ago", vMin: "min ago",
        tsNone: "None", tsWarn: "Warning", tsLbl: "Tsunami",
        dpEpi: "Epicenter", dpMag: "Magnitude", dpInt: "Max Intensity", dpDep: "Depth", dpTime: "Time",
        alOc: "Earthquake Occurred", alSt: "Strong Earthquake", alMa: "MAJOR EARTHQUAKE",
        intStr: "Int"
    },
    ja: {
        ldSub: "リアルタイム地震モニター", ldWait: "接続中", ldPrep: "マップを準備中",
        tutGuide: "はじめに — GUIDE", tutTitle: "SEISMO<span>.</span> の使い方", tutDesc: "P2P地震情報WebSocketを使ったリアルタイム地震モニタリングシステム",
        f1n: "リアルタイムマップ", f1d: "震源地を×マーカーで即時反映。クリックで震度分布を細分区域ごとに可視化。",
        f2n: "WebSocket受信", f2d: "P2P地震情報からリアルタイムで気象庁データを受信。自動再接続機能付き。",
        f3n: "P波・S波アニメーション", f3d: "地震発生時に震源からP波（赤）・S波（橙）が広がるアニメーションを表示。自動追尾。",
        f4n: "地震アラート", f4d: "M4.0以上または震度4以上を自動検知してポップアップ通知。EEW受信時は画面点滅。",
        f5n: "詳細サイドパネル", f5d: "リスト選択で左パネルに震源地・M・震度・深さ・時刻を詳細表示。",
        f6n: "フィルター機能", f6d: "マグニチュード・最大震度でリストとマップを絞り込み。スライダーとチップで直感操作。",
        f7n: "未登録観測値報告機能", f7d: "コンソールに未確認の観測値があった場合表示。結果を <a href='/request'>報告</a> できます。",
        intLeg: "震度カラーコード（マーカー・バッジ・分布共通）", startBtn: "モニタリングを開始する →",
        intL1: "震度1", intL2: "震度2", intL3: "震度3", intL4: "震度4", intL5m: "震度5弱", intL5p: "震度5強", intL6m: "震度6弱", intL6p: "震度6強", intL7: "震度7",
        clTitle: "アップデートログ", clBtn: "確認して閉じる",
        wsWait: "接続中", wsLive: "接続済み", wsOff: "切断中",
        navReq: "リクエスト", navList: "リスト", navHelp: "ヘルプ", navLog: "更新履歴", navLogDetalis: "(詳細)",
        sTitle: "本日の統計", sBack: "← 戻る",
        stCount: "発生件数", stMaxM: "最大 M", stMaxI: "最大震度", stTotal: "総受信",
        stToday: "今日", stObs: "観測", stTimes: "件",
        fTitle: "フィルター", fMinM: "最小 M", fMaxI: "最大震度", fAll: "全て",
        actTitle: "本日の地震 — アクティビティ", listTitle: "地震リスト",
        noWait: "データ待機中...", noMatch: "条件に一致なし", noRecv: "データを受信中...",
        ad1: "広告が表示されません。", ad2: "開発を支援していただけませんか？", ad3: "[ 広告ブロックの解除方法 ]",
        adM1: "広告ブロックの解除方法", adM2: "お使いのブロッカーのアイコンをクリックし、「このサイトでオフにする」を選択してください。解除後、ページを再読み込みすると広告が表示されます。", adRel: "再読み込み", adCls: "閉じる",
        vUnk: "不明", vSec: "秒前", vMin: "分前",
        tsNone: "心配なし", tsWarn: "注意", tsLbl: "津波",
        dpEpi: "震源地", dpMag: "マグニチュード", dpInt: "最大震度", dpDep: "震源の深さ", dpTime: "発生時刻",
        alOc: "地震発生", alSt: "強い地震が発生", alMa: "大地震発生！",
        intStr: "震度"
    }
};

// --- Epicenter Translation Dictionary ---
const EPICENTER_EN = {
    // 北海道・東北
    "石狩地方": "Ishikari Region", "渡島地方": "Oshima Region", "檜山地方": "Hiyama Region",
    "後志地方": "Shiribeshi Region", "空知地方": "Sorachi Region", "上川地方": "Kamikawa Region",
    "留萌地方": "Rumoi Region", "宗谷地方": "Soya Region", "網走地方": "Abashiri Region",
    "北見地方": "Kitami Region", "紋別地方": "Mombetsu Region", "胆振地方": "Iburi Region",
    "日高地方": "Hidaka Region", "十勝地方": "Tokachi Region", "釧路地方": "Kushiro Region",
    "根室地方": "Nemuro Region", "北海道西方沖": "Off West Coast of Hokkaido",
    "北海道北西沖": "Off Northwest Coast of Hokkaido", "浦河沖": "Off Urakawa",
    "十勝沖": "Off Tokachi", "釧路沖": "Off Kushiro", "根室半島南東沖": "Off Southeast of Nemuro Peninsula",
    "択捉島南東沖": "Off Southeast of Etorofu Island", "青森県東方沖": "Off East Coast of Aomori",
    "青森県下北地方": "Shimokita Region, Aomori", "青森県津軽地方": "Tsugaru Region, Aomori", "青森県津軽南部": "Southern Tsugaru, Aomori Prefecture",
    "岩手県沖": "Off Coast of Iwate", "岩手県沿岸北部": "Northern Coast of Iwate", "三陸沖": "Off Coast of Sanriku",
    "岩手県沿岸南部": "Southern Coast of Iwate", "岩手県内陸北部": "Northern Inland Iwate",
    "岩手県内陸南部": "Southern Inland Iwate", "宮城県沖": "Off Coast of Miyagi",
    "宮城県北部": "Northern Miyagi", "宮城県中部": "Central Miyagi", "宮城県南部": "Southern Miyagi",
    "秋田県沖": "Off Coast of Akita", "秋田県沿岸北部": "Northern Coast of Akita",
    "秋田県沿岸南部": "Southern Coast of Akita", "秋田県内陸北部": "Northern Inland Akita",
    "秋田県内陸南部": "Southern Inland Akita", "山形県沖": "Off Coast of Yamagata",
    "山形県庄内地方": "Shonai Region, Yamagata", "山形県最上地方": "Mogami Region, Yamagata",
    "山形県村山地方": "Murayama Region, Yamagata", "山形県置賜地方": "Okitama Region, Yamagata",
    "福島県沖": "Off Coast of Fukushima", "福島県浜通り": "Hamadori Region, Fukushima",
    "福島県中通り": "Nakadori Region, Fukushima", "福島県会津": "Aizu Region, Fukushima",

    // 関東・中部
    "茨城県沖": "Off Coast of Ibaraki", "茨城県北部": "Northern Ibaraki", "茨城県南部": "Southern Ibaraki",
    "栃木県北部": "Northern Tochigi", "栃木県南部": "Southern Tochigi", "群馬県北部": "Northern Gunma",
    "群馬県南部": "Southern Gunma", "埼玉県北部": "Northern Saitama", "埼玉県南部": "Southern Saitama",
    "埼玉県秩父地方": "Chichibu Region, Saitama", "千葉県東方沖": "Off East Coast of Chiba",
    "千葉県北東部": "Northeast Chiba", "千葉県北西部": "Northwest Chiba", "千葉県南部": "Southern Chiba",
    "房総半島南方沖": "Off South Coast of Boso Peninsula", "東京都２３区": "Tokyo 23 Wards",
    "東京都多摩東部": "Eastern Tama, Tokyo", "東京都多摩西部": "Western Tama, Tokyo",
    "伊豆大島近海": "Near Izu Oshima", "伊豆半島東方沖": "Off East Coast of Izu Peninsula",
    "新島・神津島近海": "Near Niijima / Kozushima", "三宅島近海": "Near Miyakejima",
    "八丈島近海": "Near Hachijojima", "小笠原諸島西方沖": "Off West Coast of Ogasawara Islands",
    "父島近海": "Off Coast of Chichijima", "硫黄島近海": "Off Coast of Iwo Jima",
    "神奈川県東部": "Eastern Kanagawa", "神奈川県西部": "Western Kanagawa", "相模湾": "Sagami Bay",
    "新潟県上中越沖": "Off Joetsu/Chuetsu, Niigata", "新潟県下越沖": "Off Kaetsu, Niigata",
    "新潟県中越地方": "Chuetsu Region, Niigata", "新潟県上越地方": "Joetsu Region, Niigata",
    "新潟県下越地方": "Kaetsu Region, Niigata", "新潟県佐渡地方": "Sado Region, Niigata",
    "佐渡付近": "Near Sado Island", "富山県湾東部": "Eastern Toyama Bay", "富山県西部": "Western Toyama",
    "石川県能登地方": "Noto Region, Ishikawa", "石川県加賀地方": "Kaga Region, Ishikawa",
    "能登半島沖": "Off Noto Peninsula", "福井県嶺北": "Reihoku Region, Fukui", "福井県嶺南": "Reinan Region, Fukui",
    "山梨県東部・富士五湖": "Eastern Yamanashi / Fuji Five Lakes", "山梨県中・西部": "Central/Western Yamanashi",
    "長野県北部": "Northern Nagano", "長野県中部": "Central Nagano", "長野県南部": "Southern Nagano",
    "岐阜県飛騨地方": "Hida Region, Gifu", "岐阜県美濃地方": "Mino Region, Gifu",
    "静岡県伊豆地方": "Izu Region, Shizuoka", "静岡県東部": "Eastern Shizuoka",
    "静岡県中部": "Central Shizuoka", "静岡県西部": "Western Shizuoka", "駿河湾": "Suruga Bay",
    "愛知県東部": "Eastern Aichi", "愛知県西部": "Western Aichi", "三河湾": "Mikawa Bay",

    // 近畿・中国・四国・九州・沖縄
    "三重県北部": "Northern Mie", "三重県南部": "Southern Mie", "滋賀県北部": "Northern Shiga",
    "滋賀県南部": "Southern Shiga", "京都府北部": "Northern Kyoto", "京都府南部": "Southern Kyoto",
    "大阪府北部": "Northern Osaka", "大阪府南部": "Southern Osaka", "兵庫県北部": "Northern Hyogo",
    "兵庫県南東部": "Southeast Hyogo", "兵庫県南西部": "Southwest Hyogo", "淡路島付近": "Near Awaji Island",
    "奈良県": "Nara Prefecture", "和歌山県北部": "Northern Wakayama", "和歌山県南部": "Southern Wakayama",
    "紀伊水道": "Kii Channel", "鳥取県東部": "Eastern Tottori", "鳥取県中部": "Central Tottori",
    "鳥取県西部": "Western Tottori", "島根県東部": "Eastern Shimane", "島根県西部": "Western Shimane",
    "隠岐島近海": "Near Oki Islands", "岡山県北部": "Northern Okayama", "岡山県南部": "Southern Okayama",
    "広島県北部": "Northern Hiroshima", "広島県南部": "Southern Hiroshima", "山口県北部": "Northern Yamaguchi",
    "山口県東部": "Eastern Yamaguchi", "山口県西部": "Western Yamaguchi", "徳島県北部": "Northern Tokushima",
    "徳島県南部": "Southern Tokushima", "香川県東部": "Eastern Kagawa", "香川県西部": "Western Kagawa",
    "愛媛県東予": "Toyo Region, Ehime", "愛媛県中予": "Chuyo Region, Ehime", "愛媛県南予": "Nanyo Region, Ehime",
    "伊予灘": "Iyo Sea", "高知県東部": "Eastern Kochi", "高知県中部": "Central Kochi",
    "高知県西部": "Western Kochi", "福岡県北九州地方": "Kitakyushu Region, Fukuoka",
    "福岡県福岡地方": "Fukuoka Region, Fukuoka", "福岡県筑後地方": "Chikugo Region, Fukuoka",
    "筑後川中流": "Midstream Chikugo River", "佐賀県北部": "Northern Saga", "佐賀県南部": "Southern Saga",
    "長崎県北部": "Northern Nagasaki", "長崎県南西諸島": "Nansei Islands, Nagasaki",
    "熊本県阿蘇地方": "Aso Region, Kumamoto", "熊本県熊本地方": "Kumamoto Region, Kumamoto",
    "熊本県天草・芦北地方": "Amakusa / Ashikita Region, Kumamoto", "大分県北部": "Northern Oita",
    "大分県中部": "Central Oita", "大分県南部": "Southern Oita", "宮崎県北部平野部": "Northern Plains, Miyazaki",
    "宮崎県南部平野部": "Southern Plains, Miyazaki", "宮崎県北部山沿い": "Northern Mountains, Miyazaki",
    "宮崎県南部山沿い": "Southern Mountains, Miyazaki", "日向灘": "Hyuga-nada Sea",
    "鹿児島県薩摩地方": "Satsuma Region, Kagoshima", "鹿児島県大隅地方": "Osumi Region, Kagoshima",
    "種子島近海": "Near Tanegashima", "奄美大島近海": "Near Amami Oshima",
    "沖縄本島近海": "Near Okinawa Main Island", "宮古島近海": "Near Miyakojima", "石垣島近海": "Near Ishigakijima",
    "西表島近海": "Near Iriomotejima", "西表島付近": "Near Iriomote Island", "与那国島近海": "Near Yonagunijima",

    // その他主要遠洋・湾
    "遠州灘": "Enshu-nada Sea", "熊野灘": "Kumano-nada Sea", "播磨灘": "Harima-nada Sea",
    "周防灘": "Suo-nada Sea", "響灘": "Hibiki-nada Sea", "薩摩半島西方沖": "Off West Coast of Satsuma Peninsula"
};

const UPDATE_LOGS = [
    {
        id: 'v2.1.2.1', version: 'v2.1.2.1', date: '2026-05-17',
        title: { ja: 'アップデートログページの追加', en: 'Addition of an Update Log Page' },
        desc: {
            ja: 'このアップデートログに載せないような細かいアップデートを記録する、<link https://earthquake.5kaideta.cfd/updatelog>アップデートログページ</link>を追加しました。ぜひ閲覧してください。',
            en: 'We have added an <link https://earthquake.5kaideta.cfd/updatelog>update log page</link> to document minor updates that aren\'t included in this update log. Please feel free to take a look.'
        }
    },
    {
        id: 'v2.1.2', version: 'v2.1.2', date: '2026-05-17',
        title: { ja: '震度分布が表示されない問題の修正', en: 'Fixed an issue where the seismic intensity distribution was not displayed' },
        desc: {
            ja: '重大な問題であった、地震リスト内の地震をクリックしてもマップに震度分布が表示されない問題を修正しました。\n追加で以下の改善・修正も行いました。\n・本日の地震リストにスタイルが反映されない問題を修正\n・サイトにfaviconなどのメタデータを追加',
            en: 'We have fixed a critical issue where clicking on an earthquake in the earthquake list did not display the seismic intensity distribution on the map. \nWe have also made the following additional improvements and fixes: \n- Fixed an issue where styles were not applied to the “Today\'s Activity” list \n- Added metadata such as a favicon to the site'
        }
    },
    {
        id: 'v2.1.1', version: 'v2.1.1', date: '2026-05-12',
        title: { ja: 'ヘッダーバグ修正アップデート', en: 'Fixed header bugs update' },
        desc: {
            ja: '以下の改善をしました。\n・前から存在していた、マップ内をクリックするとヘッダーが消えるバグを修正しました。\n・マップ内に時刻を追加しました。\n・マップ内にマップの拡大縮小ボタンを設置しました。',
            en: 'We have made the following improvements:\n- We fixed a bug that caused the header to disappear when clicking on the map, which had existed previously.\n- We added a clock to the map.\n- We added zoom in/out buttons to the map.'
        }
    },
    {
        id: 'v2.1.0', version: 'v2.1.0', date: '2026-05-12',
        title: { ja: '言語設定アップデート', en: 'Language settings update' },
        desc: {
            ja: '全てのページに言語設定を追加しました。\n・ホーム、リクエスト、ステータスページへの言語設定機能（英語・日本語）を追加\n・すべての箇所に対応、一部英語だった部分を統一',
            en: 'We have added language settings to all pages. \n- Added language settings (English and Japanese) to the Home, Requests, and Status pages \n- Implemented across all sections; standardized areas that were previously partially in English'
        }
    },
    {
        id: 'v2.0.1', version: 'v2.0.1', date: '2026-05-10',
        title: { ja: '震度分布改善アップデート', en: 'Intensity Dist. Update' },
        desc: {
            ja: '以下の改善をしました。\n\n・未登録の地点を送信する、リクエストページの追加\n　　・コンソールに未登録地点のリストが表示されます。その配列を丸ごと送信してください。\n　　・ページは<link https://earthquake.5kaideta.cfd/request>こちら</link>から\n・ステータスページの追加\n　　・ページは<link https://earthquake.5kaideta.cfd/status>こちら</link>から\n・その他、複数の未登録地点を追加しました。',
            en: 'Improvements:\n\n- Added Request Page for unregistered locations.\n  - Unknown locations appear in the console. Submit the array directly.\n  - Page is <link https://earthquake.5kaideta.cfd/request>here</link>\n- Added Status Page to view requested locations.\n  - Page is <link https://earthquake.5kaideta.cfd/status>here</link>\n- Added multiple unregistered locations.'
        }
    },
    {
        id: 'v2.0.0 - Website migration', version: 'v2.0.0 - Website migration', date: '2026-05-10',
        title: { ja: 'サイト移設', en: 'Website Migration' },
        desc: {
            ja: '5kaideta.cfdの購入にともない、SEISMOを<link https://earthquake.5kaideta.cfd>earthquake.5kaideta.cfd</link>へと移設しました。',
            en: 'Moved SEISMO to <link https://earthquake.5kaideta.cfd>earthquake.5kaideta.cfd</link> following the domain purchase.'
        }
    },
    {
        id: 'v1.2.0', version: 'v1.2.0', date: '2026-05-01',
        title: { ja: 'マップ・震度分布修正アップデート', en: 'Map & Intensity Fixes' },
        desc: {
            ja: '以下の改善・修正をしました。\n\n・震度分布表示時にマーカーが重なって表示される問題を修正\n・震度分布が完全でなかったバグを修正\n・都道府県、区域の境界線を追加\n・地図内でロシアの表示にバグが発生した問題を完全に修正',
            en: 'Fixes & Improvements:\n\n- Fixed marker overlap on intensity distribution.\n- Fixed incomplete intensity distribution bug.\n- Added borders for prefectures and regions.\n- We have fully resolved the issue causing a display error for Russia on the map.'
        }
    },
    {
        id: 'v1.1.1', version: 'v1.1.1', date: '2026-04-24',
        title: { ja: 'マップ・表示品質アップデート', en: 'Map & Quality Update' },
        desc: { ja: 'Invalid Dateバグ修正、マップ背景を黒に変更、周辺国表示、細分区域レベルの震度分布表示、広告エリア追加。', en: 'Fixed "Invalid Date" bug, changed map background to black, displaying neighboring countries, sub-region intensity dist, and added ad area.' }
    },
    {
        id: 'v1.1.0', version: 'v1.1.0', date: '2026-04-24',
        title: { ja: 'マップ・UX大幅アップデート', en: 'Major UX & Map Update' },
        desc: { ja: '震源自動追尾＆P/S波アニメーション、×印マーカー、左パネル詳細表示機能、都道府県ごとの震度分布表示機能などを追加。', en: 'Added Auto-tracking & P/S wave animations, X markers, detailed left panel info, and intensity distribution maps.' }
    },
    {
        id: 'v1.0.1', version: 'v1.0.1', date: '2026-04-23',
        title: { ja: '地図の修正', en: 'Map Hotfix' },
        desc: { ja: '地図が正しく表示されない問題を修正しました', en: 'Fixed an issue where the map was not displaying correctly.' }
    },
    {
        id: 'v1.0.0', version: 'v1.0.0', date: '2026-04-23',
        title: { ja: 'SEISMO 初回リリース', en: 'Initial Release' },
        desc: { ja: 'リアルタイム地震モニター「SEISMO」をリリースしました！', en: 'Released SEISMO, the real-time earthquake monitor!' }
    }
];

let map;

let currentLang = localStorage.getItem('seismo_lang') || (navigator.language.startsWith('ja') ? 'ja' : 'en');
const t = (key) => i18n[currentLang][key] || key;

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('seismo_lang', lang);
    document.documentElement.lang = lang;
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-ja').classList.toggle('active', lang === 'ja');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
    });

    const adMsg = document.getElementById('ad-msg');
    if (adMsg) adMsg.innerHTML = `${t('ad1')}<br>${t('ad2')}`;

    // Re-render UI components
    updateStats();
    renderList();
    renderMiniList();
    if (S.selectedId) {
        const q = S.quakes.find(e => e._id === S.selectedId);
        if (q) renderDetail(q);
    } else {
        document.getElementById('left-panel-title').textContent = t('sTitle');
    }
    if (!document.getElementById('changelog-overlay').classList.contains('hidden')) {
        renderChangelog(UPDATE_LOGS, false);
    }
}

function getTranslatedEpicenter(jpName) {
    if (currentLang === 'en') {
        return EPICENTER_EN[jpName] || jpName;
    }
    return jpName;
}

const WS_URL = 'wss://api.p2pquake.net/v2/ws';
const HIST_URL = 'https://api.p2pquake.net/v2/history?codes=551&limit=30';
const MAX_QUAKES = 100;
const ALERT_MAG = 4.0;
const TODAY = new Date().toDateString();
let areaGeoJson = null;
let currentAreaLayer = null;

const REGION_CENTERS = {
    '北海道道北': [44.8, 142.4], '北海道道東': [43.8, 144.5], '北海道道央': [43.1, 141.4], '北海道道南': [41.9, 140.7],
    '北海道石狩': [43.2, 141.4], '北海道後志': [43.0, 140.7], '北海道空知': [43.5, 141.9], '北海道上川': [43.8, 142.6],
    '北海道留萌': [44.0, 141.8], '北海道宗谷': [45.3, 141.9], '北海道網走': [44.0, 144.3], '北海道十勝': [43.0, 143.2],
    '北海道釧路': [43.0, 144.4], '北海道根室': [43.3, 145.6], '北海道胆振': [42.7, 141.3], '北海道日高': [42.4, 142.4],
    '北海道渡島': [41.8, 140.7], '北海道檜山': [42.1, 140.0],
    '青森県津軽': [40.7, 140.3], '青森県下北': [41.4, 141.1], '青森県三八上北': [40.4, 141.3],
    '岩手県内陸北部': [39.8, 141.1], '岩手県内陸南部': [39.3, 141.1], '岩手県沿岸北部': [39.9, 141.8], '岩手県沿岸南部': [39.0, 141.7],
    '宮城県北部': [38.7, 141.0], '宮城県南部': [38.1, 140.9], '宮城県中部': [38.4, 141.0],
    '秋田県北部': [40.2, 140.4], '秋田県南部': [39.2, 140.6], '秋田県沿岸': [39.7, 140.1],
    '山形県北部': [38.8, 140.1], '山形県中部': [38.4, 140.2], '山形県南部': [37.9, 140.1], '山形県庄内': [38.9, 139.8],
    '福島県浜通り': [37.1, 141.0], '福島県中通り': [37.4, 140.4], '福島県会津': [37.4, 139.8],
    '茨城県北部': [36.7, 140.7], '茨城県南部': [36.1, 140.1],
    '栃木県北部': [37.0, 139.9], '栃木県南部': [36.3, 139.7],
    '群馬県北部': [36.8, 138.9], '群馬県南部': [36.3, 139.1],
    '埼玉県北部': [36.1, 139.5], '埼玉県南部': [35.8, 139.6],
    '千葉県北西部': [35.7, 140.0], '千葉県北東部': [35.8, 140.6], '千葉県南部': [35.1, 140.1],
    '東京都23区': [35.7, 139.7], '東京都多摩東部': [35.6, 139.4], '東京都多摩西部': [35.6, 139.1], '東京都伊豆諸島': [34.0, 139.4],
    '神奈川県東部': [35.5, 139.6], '神奈川県西部': [35.4, 139.1],
    '新潟県上越': [37.1, 138.2], '新潟県中越': [37.4, 138.8], '新潟県下越': [37.9, 139.1], '新潟県佐渡': [38.0, 138.4],
    '富山県東部': [36.7, 137.5], '富山県西部': [36.7, 136.9],
    '石川県能登': [37.1, 136.9], '石川県加賀': [36.4, 136.5],
    '福井県嶺北': [36.1, 136.2], '福井県嶺南': [35.6, 135.9],
    '山梨県東部・富士五湖': [35.5, 138.8], '山梨県中・西部': [35.6, 138.4],
    '長野県北部': [36.9, 138.2], '長野県中部': [36.2, 138.0], '長野県南部': [35.8, 137.8], '長野県東部・北部': [36.4, 138.4],
    '岐阜県北部': [36.2, 137.1], '岐阜県南部': [35.5, 136.8],
    '静岡県伊豆': [34.9, 138.9], '静岡県東部': [35.1, 138.7], '静岡県中部': [34.9, 138.4], '静岡県西部': [34.9, 137.8],
    '愛知県西部': [35.2, 136.8], '愛知県東部': [35.0, 137.2],
    '三重県北部': [35.0, 136.5], '三重県中部': [34.4, 136.3], '三重県南部': [33.8, 136.1],
    '滋賀県北部': [35.5, 136.1], '滋賀県南部': [34.9, 135.9],
    '京都府北部': [35.5, 135.4], '京都府南部': [34.9, 135.8],
    '大阪府北部': [34.9, 135.6], '大阪府南部': [34.4, 135.4],
    '兵庫県北部': [35.4, 134.8], '兵庫県南部': [34.7, 135.2], '兵庫県淡路島': [34.4, 134.9],
    '奈良県北部': [34.7, 135.8], '奈良県南部': [34.2, 135.9],
    '和歌山県北部': [34.3, 135.4], '和歌山県南部': [33.8, 135.5],
    '鳥取県東部': [35.5, 134.2], '鳥取県中部': [35.5, 133.7], '鳥取県西部': [35.4, 133.3],
    '島根県東部': [35.4, 133.1], '島根県西部': [34.9, 132.0], '島根県隠岐': [36.1, 133.1],
    '岡山県北部': [35.1, 133.9], '岡山県南部': [34.7, 134.0],
    '広島県北部': [34.8, 133.0], '広島県南部': [34.3, 132.5],
    '山口県北部': [34.4, 131.5], '山口県南部': [34.0, 131.5], '山口県東部': [34.1, 131.9], '山口県西部': [33.9, 130.9],
    '徳島県北部': [34.2, 134.4], '徳島県南部': [33.7, 134.2],
    '香川県東部': [34.4, 134.3], '香川県西部': [34.2, 133.5],
    '愛媛県東部': [34.1, 132.9], '愛媛県中予': [33.8, 132.8], '愛媛県西部': [33.5, 132.4],
    '高知県東部': [33.7, 134.2], '高知県中部': [33.5, 133.5], '高知県西部': [33.2, 132.8],
    '福岡県北西部': [33.7, 130.4], '福岡県南部': [33.4, 130.7], '福岡県北九州': [33.9, 130.9],
    '佐賀県北部': [33.5, 130.0], '佐賀県南部': [33.1, 130.3],
    '長崎県北部': [33.4, 129.7], '長崎県南部': [32.7, 129.9], '長崎県壱岐・対馬': [34.3, 129.3], '長崎県五島': [32.7, 128.8],
    '熊本県阿蘇': [32.9, 131.1], '熊本県球磨': [32.2, 130.8], '熊本県上益城': [32.7, 130.8], '熊本県天草・芦北': [32.3, 130.2], '熊本県熊本': [32.8, 130.7],
    '大分県北部': [33.6, 131.4], '大分県南部': [32.9, 131.5], '大分県西部': [33.2, 131.0],
    '宮崎県北部': [32.5, 131.7], '宮崎県南部': [31.7, 131.1], '宮崎県西部': [32.1, 131.1],
    '鹿児島県薩摩': [31.6, 130.3], '鹿児島県大隅': [31.4, 130.9], '鹿児島県種子島・屋久島': [30.4, 130.6], '鹿児島県奄美群島': [28.4, 129.5], '鹿児島県トカラ列島': [29.8, 129.6],
    '沖縄県本島地方': [26.3, 127.8], '沖縄県宮古島地方': [24.8, 125.3], '沖縄県八重山地方': [24.4, 124.2], '沖縄県大東島地方': [25.8, 131.2],
};

const PREF_CENTERS = {
    '北海道': [43.064, 141.347], '青森県': [40.824, 140.741], '岩手県': [39.704, 141.153],
    '宮城県': [38.269, 140.872], '秋田県': [39.718, 140.102], '山形県': [38.241, 140.364],
    '福島県': [37.750, 140.468], '茨城県': [36.341, 140.447], '栃木県': [36.566, 139.883],
    '群馬県': [36.391, 139.060], '埼玉県': [35.857, 139.649], '千葉県': [35.605, 140.123],
    '東京都': [35.690, 139.692], '神奈川県': [35.448, 139.643], '新潟県': [37.902, 139.023],
    '富山県': [36.695, 137.211], '石川県': [36.594, 136.626], '福井県': [36.065, 136.221],
    '山梨県': [35.664, 138.568], '長野県': [36.651, 138.181], '岐阜県': [35.391, 136.722],
    '静岡県': [34.977, 138.383], '愛知県': [35.180, 136.907], '三重県': [34.730, 136.509],
    '滋賀県': [35.004, 135.869], '京都府': [35.021, 135.755], '大阪府': [34.686, 135.520],
    '兵庫県': [34.691, 135.183], '奈良県': [34.685, 135.833], '和歌山県': [34.226, 135.168],
    '鳥取県': [35.504, 134.238], '島根県': [35.472, 133.051], '岡山県': [34.662, 133.935],
    '広島県': [34.396, 132.459], '山口県': [34.186, 131.471], '徳島県': [34.066, 134.560],
    '香川県': [34.340, 134.043], '愛媛県': [33.842, 132.766], '高知県': [33.560, 133.531],
    '福岡県': [33.607, 130.418], '佐賀県': [33.249, 130.299], '長崎県': [32.745, 129.874],
    '熊本県': [32.790, 130.742], '大分県': [33.238, 131.613], '宮崎県': [31.911, 131.424],
    '鹿児島県': [31.560, 130.558], '沖縄県': [26.212, 127.681],
};

const S = {
    quakes: [], filterMag: 1.0, filterInt: -1, selectedId: null,
    stats: { count: 0, maxMag: 0, maxMagPlace: '', maxScale: -1, maxIntLbl: '—', total: 0 },
    map: null, markers: new Map(), hdrSpikes: [], alertTimer: null, wsRetryDelay: 2000,
    prefLayer: null, intensityMarkers: [], cityMarkerList: [],
    pWave: null, sWave: null, waveTimer: null,
};

const INT = {
    10: { lbl: { en: '1', ja: '1' }, cls: 'i1', color: '#9ec5fe' }, 20: { lbl: { en: '2', ja: '2' }, cls: 'i2', color: '#60a5fa' },
    30: { lbl: { en: '3', ja: '3' }, cls: 'i3', color: '#4ade80' }, 40: { lbl: { en: '4', ja: '4' }, cls: 'i4', color: '#facc15' },
    45: { lbl: { en: '5-', ja: '5弱' }, cls: 'i5m', color: '#fb923c' }, 50: { lbl: { en: '5+', ja: '5強' }, cls: 'i5p', color: '#f97316' },
    55: { lbl: { en: '6-', ja: '6弱' }, cls: 'i6m', color: '#ef4444' }, 60: { lbl: { en: '6+', ja: '6強' }, cls: 'i6p', color: '#dc2626' },
    70: { lbl: { en: '7', ja: '7' }, cls: 'i7', color: '#cc44ff' },
};
const intInfo = s => {
    const i = INT[s];
    if (!i) return { lbl: currentLang === 'en' ? 'Unknown' : '不明', cls: 'iunk', color: '#2e3d52' };
    return { ...i, lbl: i.lbl[currentLang] };
};
const magCls = m => m < 3 ? 'm-lo' : m < 4 ? 'm-md' : m < 5 ? 'm-hi' : m < 6 ? 'm-mj' : 'm-cr';
const magColor = m => m < 3 ? '#4ade80' : m < 4 ? '#facc15' : m < 5 ? '#fb923c' : m < 6 ? '#ef4444' : '#cc44ff';
const magSize = m => m < 2 ? 9 : m < 3 ? 12 : m < 4 ? 16 : m < 5 ? 22 : m < 6 ? 28 : m < 7 ? 36 : 46;
const esc = s => { const d = document.createElement('div'); d.appendChild(document.createTextNode(String(s))); return d.innerHTML; };

function parseEqDate(s) {
    if (!s || typeof s !== 'string') return new Date(NaN);
    return new Date(s.replace(/\//g, '-').replace(' ', 'T'));
}

function fmtTime(s) {
    const d = parseEqDate(s), now = new Date(), diff = now - d;
    if (isNaN(d)) return t('vUnk');
    if (diff < 60000) return `${Math.floor(diff / 1000)} ${t('vSec')}`;
    if (diff < 3600000) return `${Math.floor(diff / 60000)} ${t('vMin')}`;
    return d.toLocaleTimeString(currentLang === 'ja' ? 'ja-JP' : 'en-US', { hour: '2-digit', minute: '2-digit' });
}
function fmtDateTime(s) {
    const d = parseEqDate(s);
    if (isNaN(d)) return t('vUnk');
    return d.toLocaleString(currentLang === 'ja' ? 'ja-JP' : 'en-US', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

let ldAnimId;
function startLoadingAnim() {
    const cv = document.getElementById('ld-canvas'), ctx = cv.getContext('2d');
    const W = cv.width, H = cv.height, MID = H / 2;
    let time = 0;
    function draw() {
        ctx.clearRect(0, 0, W, H);
        ctx.strokeStyle = 'rgba(255,45,62,0.06)'; ctx.lineWidth = 1;
        for (let y = 8; y < H; y += 8) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
        ctx.strokeStyle = 'rgba(255,45,62,0.15)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, MID); ctx.lineTo(W, MID); ctx.stroke();
        ctx.strokeStyle = '#ff2d3e'; ctx.lineWidth = 1.5; ctx.shadowBlur = 10; ctx.shadowColor = '#ff2d3e';
        ctx.beginPath();
        for (let x = 0; x < W; x++) { const v = Math.sin((x + time) * 0.045) * 4 + Math.sin((x + time) * 0.13) * 2.5 + (Math.random() - .5) * 1.5; x === 0 ? ctx.moveTo(x, MID - v) : ctx.lineTo(x, MID - v); }
        ctx.stroke(); ctx.shadowBlur = 0;
        const cx = (time * 2) % W, cv2 = Math.sin((cx + time) * 0.045) * 4 + Math.sin((cx + time) * 0.13) * 2.5;
        ctx.fillStyle = '#ff2d3e'; ctx.shadowBlur = 14; ctx.shadowColor = '#ff2d3e';
        ctx.beginPath(); ctx.arc(cx, MID - cv2, 3.5, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
        time += 1.8;
        ldAnimId = requestAnimationFrame(draw);
    }
    draw();
}

let hdrAnimId;
function startHdrAnim() {
    const cv = document.getElementById('hdr-canvas'); if (!cv) return;
    const ctx = cv.getContext('2d');
    const resize = () => { if (cv.offsetWidth > 0 && cv.offsetHeight > 0) { cv.width = cv.offsetWidth; cv.height = cv.offsetHeight; } };
    cv.width = cv.offsetWidth || 300; cv.height = cv.offsetHeight || 38;
    new ResizeObserver(resize).observe(cv);
    const data = []; let time = 0;
    function draw() {
        const W = cv.width, H = cv.height, MID = H / 2;
        if (!W || !H) { hdrAnimId = requestAnimationFrame(draw); return; }
        ctx.clearRect(0, 0, W, H);
        ctx.strokeStyle = 'rgba(0,216,255,0.04)'; ctx.lineWidth = 1;
        for (let y = 0; y < H; y += 7) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
        ctx.strokeStyle = 'rgba(0,216,255,0.1)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, MID); ctx.lineTo(W, MID); ctx.stroke();
        let spike = 0;
        S.hdrSpikes = S.hdrSpikes.filter(s => s.life > 0);
        S.hdrSpikes.forEach(s => { spike += s.amp * Math.exp(-s.dec * (s.total - s.life)) * Math.sin(s.life * s.freq); s.life--; });
        const base = Math.sin(time * 0.07) * 1.8 + Math.sin(time * 0.18) * 1 + (Math.random() - .5) * 1.5;
        data.push(base + spike); if (data.length > W) data.shift();
        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, 'rgba(0,216,255,0)'); grad.addColorStop(0.5, 'rgba(0,216,255,0.75)'); grad.addColorStop(1, 'rgba(0,216,255,0)');
        ctx.strokeStyle = grad; ctx.lineWidth = 1.5; ctx.shadowBlur = 5; ctx.shadowColor = '#00d8ff';
        ctx.beginPath();
        const scale = (H / 2 - 5);
        for (let x = 0; x < data.length; x++) { const y = MID - Math.max(-1, Math.min(1, data[x] / 7)) * scale; x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
        ctx.stroke(); ctx.shadowBlur = 0; time++;
        hdrAnimId = requestAnimationFrame(draw);
    }
    draw();
}

function addHdrSpike(mag) {
    S.hdrSpikes.push({ amp: Math.min((mag || 2) / 7 * 5, 5), life: 70, total: 70, dec: 0.04, freq: 0.25 + Math.random() * 0.2 });
}

function makeXIcon(col, sz, isNew) {
    const s = Math.max(sz, 14), p = Math.max(3, s * 0.18);
    const anim = isNew ? 'style="animation:xAppear 0.35s cubic-bezier(0.22,1,0.36,1) both"' : '';
    const glow = isNew ? sz + 4 : sz * 0.4;
    const svg = `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg" overflow="visible" ${anim}>
    <line x1="${p}" y1="${p}" x2="${s - p}" y2="${s - p}" stroke="${col}" stroke-width="2.5" stroke-linecap="round" filter="url(#g)"/>
    <line x1="${s - p}" y1="${p}" x2="${p}" y2="${s - p}" stroke="${col}" stroke-width="2.5" stroke-linecap="round" filter="url(#g)"/>
    <defs><filter id="g"><feDropShadow dx="0" dy="0" stdDeviation="${glow * 0.4}" flood-color="${col}"/></filter></defs>
  </svg>`;
    return L.divIcon({ className: '', html: svg, iconSize: [s, s], iconAnchor: [s / 2, s / 2] });
}

async function initMap() {
    if (map) return;

    map = L.map('map', {
        zoomControl: false,
        fullscreenControl: true,
        attributionControl: false,
        maxBounds: [[20, 120], [50, 155]],
        minZoom: 4,
        preferCanvas: true
    }).setView([38, 138], 5);
    S.map = map;

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    const mapEl = document.getElementById('map');
    mapEl.setAttribute('tabindex', '-1');

    map.on('focus', () => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });

    mapEl.addEventListener('click', (e) => {
        window.scrollTo(0, 0);
    }, { passive: true });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd', maxZoom: 19
    }).addTo(map);

    L.rectangle([[20, 120], [50, 155]], {
        color: 'transparent', fillColor: '#0b0f14', fillOpacity: 0.55, interactive: false
    }).addTo(map);

    try {
        if (window.regionGeo) {
            S.regionLayer = L.geoJSON(regionGeo, {
                style: { color: 'rgba(255,255,255,0.1)', weight: 0.8, fillOpacity: 0 },
                interactive: false
            }).addTo(map);
        }
        if (window.prefGeo) {
            L.geoJSON(window.prefGeo, {
                style: { color: 'rgba(255,255,255,0.6)', weight: 1.6, fillOpacity: 0 },
                interactive: false
            }).addTo(map);
        }
    } catch (e) { console.error('Map overlay error:', e); }
}

function refreshMarkers() {
    S.markers.forEach((marker, id) => {
        const latest = S.quakes[0]?._id;
        const show = S.selectedId ? id === S.selectedId : id === latest;
        if (show) { if (!S.map.hasLayer(marker)) marker.addTo(S.map); }
        else { if (S.map.hasLayer(marker)) S.map.removeLayer(marker); }
    });
}

function putMarker(eq, isNew = false) {
    if (!S.map) return;
    const h = eq.earthquake.hypocenter;
    if (!h.latitude || !h.longitude || h.latitude === -200) return;
    if (S.markers.has(eq._id)) S.map.removeLayer(S.markers.get(eq._id));
    const mag = h.magnitude || 0;
    const sc = eq.earthquake.maxScale;
    const col = sc > 0 ? intInfo(sc).color : magColor(mag);
    const marker = L.marker([h.latitude, h.longitude], { icon: makeXIcon(col, magSize(mag), isNew), zIndexOffset: 1000 }).addTo(S.map);
    S.markers.set(eq._id, marker);
    refreshMarkers();
}

function playWaves(lat, lng, mag) {
    stopWaves(); if (!S.map) return;
    const base = Math.max(80000, (mag || 3) * 90000), maxR = base * 3.2;
    S.pWave = L.circle([lat, lng], { radius: 3000, color: '#ff3348', weight: 1.5, fill: false, opacity: 0.9, interactive: false }).addTo(S.map);
    S.sWave = L.circle([lat, lng], { radius: 3000, color: '#ff8a00', weight: 2, fillColor: '#ff8a00', fillOpacity: 0.03, opacity: 0.75, interactive: false }).addTo(S.map);
    let pR = 3000, sR = 3000;
    const pSpd = base * 0.026, sSpd = base * 0.016;
    function tick() {
        pR = Math.min(pR + pSpd, maxR); sR = Math.min(sR + sSpd, maxR);
        const pOp = Math.max(0, 0.9 * (1 - pR / maxR)), sOp = Math.max(0, 0.75 * (1 - sR / maxR));
        if (S.pWave) { S.pWave.setRadius(pR); S.pWave.setStyle({ opacity: pOp }); }
        if (S.sWave) { S.sWave.setRadius(sR); S.sWave.setStyle({ opacity: sOp, fillOpacity: sOp * 0.05 }); }
        if (pR < maxR) S.waveTimer = requestAnimationFrame(tick);
        else stopWaves();
    }
    S.waveTimer = requestAnimationFrame(tick);
}

function stopWaves() {
    if (S.waveTimer) { cancelAnimationFrame(S.waveTimer); S.waveTimer = null; }
    if (S.pWave && S.map) { S.map.removeLayer(S.pWave); S.pWave = null; }
    if (S.sWave && S.map) { S.map.removeLayer(S.sWave); S.sWave = null; }
}

const unmatchedAreas = new Set();
function findRegionByCity(areaName) {
    if (!window.AREA_MAP) return null;
    for (const [region, cities] of Object.entries(window.AREA_MAP)) {
        if (cities.some(city => areaName.includes(city))) return region;
    }
    unmatchedAreas.add(areaName);
    return null;
}

function showIntensityDist(eq) {
    if (!S.regionLayer || !eq?.points) return;
    const areaScaleMap = {};
    eq.points.forEach(p => {
        const regionName = findRegionByCity(p.addr);
        if (!regionName) { console.log("Unmatched area:", p.addr); return; }
        if (!areaScaleMap[regionName] || p.scale > areaScaleMap[regionName]) areaScaleMap[regionName] = p.scale;
    });
    if (unmatchedAreas.size > 0) console.log([...unmatchedAreas]);
    unmatchedAreas.clear();

    S.regionLayer.eachLayer(layer => {
        const name = layer.feature.properties.name;
        const scale = areaScaleMap[name];
        layer.setStyle({ fillColor: scale ? intInfo(scale).color : '#3b3b3f', fillOpacity: scale ? 0.75 : 0.08, color: 'rgba(255,255,255,0.28)', weight: 1 });
    });
}

function clearIntensityLayer() {
    if (S.regionLayer) {
        S.regionLayer.eachLayer(layer => {
            layer.setStyle({ fillColor: '#3b3b3f', fillOpacity: 0.0, color: 'rgba(255,255,255,0.1)', weight: 0.8 });
        });
    }
}

function renderDetail(eq) {
    const grid = document.getElementById('stat-grid');
    const panel = document.getElementById('detail-panel');
    const title = document.getElementById('left-panel-title');
    const back = document.getElementById('detail-back');
    if (!eq) {
        grid.classList.remove('hidden'); panel.classList.add('hidden');
        title.textContent = t('sTitle'); back.classList.add('hidden'); return;
    }
    grid.classList.add('hidden'); panel.classList.remove('hidden');
    title.textContent = currentLang === 'en' ? 'Selected Earthquake' : '選択中の地震';
    back.classList.remove('hidden');
    const h = eq.earthquake.hypocenter, m = h.magnitude || 0, sc = eq.earthquake.maxScale;
    const ii = intInfo(sc), tsun = eq.earthquake.domesticTsunami;
    panel.innerHTML = `
        <div class="dp-row"><span class="dp-key">${t('dpEpi')}</span><span class="dp-val sm">${esc(getTranslatedEpicenter(h.name) || t('vUnk'))}</span></div>
        <div class="dp-row"><span class="dp-key">${t('dpMag')}</span><span class="dp-val ${magCls(m)}">${m > 0 ? 'M' + m.toFixed(1) : 'M?'}</span></div>
        <div class="dp-row"><span class="dp-key">${t('dpInt')}</span><span class="dp-val ${ii.cls}">${sc > 0 ? t('intStr') + ii.lbl : '—'}</span></div>
        <div class="dp-row"><span class="dp-key">${t('dpDep')}</span><span class="dp-val sm">${h.depth > 0 ? h.depth + ' km' : '—'}</span></div>
        <div class="dp-row"><span class="dp-key">${t('dpTime')}</span><span class="dp-val sm">${fmtDateTime(eq.earthquake.time)}</span></div>
        ${tsun && tsun !== 'None' ? `<div class="dp-row"><span class="dp-key">${t('tsLbl')}</span><span class="dp-val tsun">${tsun === 'NoneExpected' ? t('tsNone') : t('tsWarn')}</span></div>` : ''}
    `;
}

function processQ(raw, isNew = false) {
    if (raw.code !== 551) return null;
    const id = raw.id || (raw.earthquake.time + '_' + raw.earthquake.hypocenter.name);
    if (S.quakes.find(q => q._id === id)) return null;
    const eq = { ...raw, _id: id, _new: isNew };
    S.quakes.unshift(eq);
    if (S.quakes.length > MAX_QUAKES) S.quakes.pop();
    S.stats.total++;
    const eqDate = parseEqDate(eq.earthquake.time).toDateString();
    if (eqDate === TODAY) {
        S.stats.count++;
        const m = eq.earthquake.hypocenter.magnitude || 0;
        if (m > S.stats.maxMag) { S.stats.maxMag = m; S.stats.maxMagPlace = eq.earthquake.hypocenter.name || ''; }
        const sc = eq.earthquake.maxScale;
        if (sc > S.stats.maxScale) { S.stats.maxScale = sc; S.stats.maxIntLbl = intInfo(sc).lbl; }
    }
    putMarker(eq, isNew);
    if (isNew) {
        addHdrSpike(eq.earthquake.hypocenter.magnitude);
        const h = eq.earthquake.hypocenter, m = h.magnitude || 0, sc = eq.earthquake.maxScale;
        if (h.latitude && h.longitude && h.latitude !== -200 && S.map) {
            S.map.flyTo([h.latitude, h.longitude], 6, { duration: 1.4 });
            playWaves(h.latitude, h.longitude, m);
        }
        if (m >= ALERT_MAG || sc >= 40) showAlert(eq);
    }
    return eq;
}

function renderList() {
    const el = document.getElementById('eq-list');
    const filt = S.quakes.filter(q => {
        if ((q.earthquake.hypocenter.magnitude || 0) < S.filterMag) return false;
        if (S.filterInt > 0 && q.earthquake.maxScale < S.filterInt) return false;
        return true;
    });
    if (!filt.length) {
        el.innerHTML = `<div class="no-data"><div class="no-data-icon">🔍</div><div class="no-data-txt">${t('noMatch')}</div></div>`;
        return;
    }
    el.innerHTML = '';
    filt.forEach(q => {
        const h = q.earthquake.hypocenter, m = h.magnitude || 0, sc = q.earthquake.maxScale;
        const ii = intInfo(sc), tsun = q.earthquake.domesticTsunami;
        const card = document.createElement('div');
        card.className = `eq-card${q._new ? ' new-flash' : ' new-in'}${q._id === S.selectedId ? ' sel' : ''}`;
        card.dataset.id = q._id;
        if (q._new) setTimeout(() => { q._new = false; }, 2000);
        card.innerHTML = `
            <div class="eq-top">
                <div class="eq-mbadge ${magCls(m)}">${m > 0 ? 'M' + m.toFixed(1) : 'M?'}</div>
                    <div class="eq-info">
                        <div class="eq-place">${esc(getTranslatedEpicenter(h.name) || t('vUnk'))}</div>
                <div class="eq-time">${fmtDateTime(q.earthquake.time)}</div>
                </div>
            </div>
            <div class="eq-tags">
                ${sc > 0 ? `<span class="eq-tag ${ii.cls}">${t('intStr')}${ii.lbl}</span>` : ''}
                ${h.depth > 0 ? `<span class="eq-tag">${currentLang === 'en' ? 'Depth' : '深さ'} ${h.depth}km</span>` : ''}
                ${tsun && tsun !== 'None' ? `<span class="eq-tag tsun">${t('tsLbl')}: ${tsun === 'NoneExpected' ? t('tsNone') : t('tsWarn')}</span>` : ''}
            </div>`;
        card.addEventListener('click', () => selectQ(q._id));
        el.appendChild(card);
    });
}

function renderMiniList() {
    const list = document.getElementById('mini-list');
    if (!list) return;
    list.innerHTML = '';

    if (!S.quakes || S.quakes.length === 0) {
        list.innerHTML = `<div class="no-data"><div class="no-data-txt">${t('noWait')}</div></div>`;
        return;
    }

    S.quakes.filter(q => parseEqDate(q.earthquake.time).toDateString() === TODAY).forEach(q => {
        const h = q.earthquake.hypocenter;
        const m = h.magnitude || 0;
        const sc = q.earthquake.maxScale;
        const ii = intInfo(sc);
        const timeStr = fmtTime(q.earthquake.time);
        const place = getTranslatedEpicenter(h.name) || t('vUnk');

        const item = document.createElement('div');
        item.className = 'mini-item';
        item.dataset.id = q._id;
        item.innerHTML = `
            <div class="mini-mag ${magCls(m)}">${m > 0 ? 'M' + m.toFixed(1) : 'M?'}</div>
            <div class="mini-info">
                <div class="mini-place">${esc(place)}</div>
                <div class="mini-time">${esc(timeStr)}${sc > 0 ? ` · <span class="${ii.cls}">${t('intStr')}${ii.lbl}</span>` : ''}</div>
            </div>`;
        item.addEventListener('click', () => selectQ(q._id));
        list.appendChild(item);
    });
}

function updateStats() {
    document.getElementById('s-count').textContent = S.stats.count || '0';
    document.getElementById('s-total').textContent = S.stats.total || '0';
    if (S.stats.maxMag > 0) {
        document.getElementById('s-maxmag').textContent = 'M' + S.stats.maxMag.toFixed(1);
        document.getElementById('s-maxmag-place').textContent = (getTranslatedEpicenter(S.stats.maxMagPlace) || '').slice(0, 100);
    }
    if (S.stats.maxScale > 0) document.getElementById('s-maxint').textContent = t('intStr') + S.stats.maxIntLbl;
}

function selectQ(id) {
    S.selectedId = id;
    const q = S.quakes.find(e => e._id === id);
    if (q && S.map) {
        const h = q.earthquake.hypocenter;
        if (h.latitude && h.longitude && h.latitude !== -200) {
            S.map.flyTo([h.latitude, h.longitude], 6, { duration: 0.9 });
            playWaves(h.latitude, h.longitude, h.magnitude);
        }
        renderDetail(q);
        showIntensityDist(q);
    }
    refreshMarkers();
    renderList();
}

function showAlert(q) {
    const h = q.earthquake.hypocenter, m = h.magnitude || 0, sc = q.earthquake.maxScale, ii = intInfo(sc);
    document.getElementById('alrt-icon').textContent = m >= 6.5 ? '🚨' : m >= 5 ? '⚠️' : '📳';
    document.getElementById('alrt-title').textContent = m >= 6 ? t('alMa') : m >= 5 ? t('alSt') : t('alOc');
    document.getElementById('alrt-place').textContent = h.name || t('vUnk');
    document.getElementById('alrt-detail').textContent = `M${m.toFixed(1)} / ${currentLang === 'en' ? 'Depth' : '深さ'} ${h.depth || '?'}km${sc > 0 ? ' / ' + t('dpInt') + ' ' + ii.lbl : ''}`;
    const bar = document.getElementById('alrt-bar');
    bar.style.animation = 'none'; bar.offsetHeight; bar.style.animation = '';
    document.getElementById('eq-alert').classList.add('show');
    clearTimeout(S.alertTimer);
    S.alertTimer = setTimeout(() => document.getElementById('eq-alert').classList.remove('show'), 6000);
}

let ws;
function connectWS() {
    setWS('wait');
    ws = new WebSocket(WS_URL);
    ws.onopen = () => { setWS('live'); S.wsRetryDelay = 2000; };
    ws.onerror = () => setWS('off');
    ws.onclose = () => {
        setWS('off');
        setTimeout(() => { S.wsRetryDelay = Math.min(S.wsRetryDelay * 1.6, 30000); connectWS(); }, S.wsRetryDelay);
    };
    ws.onmessage = ev => {
        try {
            const d = JSON.parse(ev.data);
            if (d.code === 551) { const q = processQ(d, true); if (q) { renderList(); renderMiniList(); updateStats(); } }
            else if (d.code === 554) {
                const ov = document.createElement('div'); ov.className = 'eew-flash';
                document.body.appendChild(ov); setTimeout(() => ov.remove(), 3200);
                addHdrSpike(7);
            }
        } catch (e) { }
    };
}

function setWS(status) {
    const dot = document.getElementById('ws-dot'), lbl = document.getElementById('ws-label');
    dot.className = 'ws-dot ' + status;
    lbl.textContent = status === 'live' ? t('wsLive') : status === 'wait' ? t('wsWait') : t('wsOff');
}

async function fetchHistory() {
    try {
        const r = await fetch(HIST_URL); if (!r.ok) return;
        const data = await r.json();
        if (Array.isArray(data)) [...data].reverse().forEach(d => processQ(d, false));
    } catch (e) { console.warn('History fetch failed', e); }
}

function initFilters() {
    const sl = document.getElementById('fmag'), mv = document.getElementById('fmv');
    sl.addEventListener('input', () => { S.filterMag = parseFloat(sl.value); mv.textContent = 'M' + S.filterMag.toFixed(1) + '+'; renderList(); });
    document.getElementById('fint').addEventListener('click', e => {
        const c = e.target.closest('.chip'); if (!c) return;
        document.querySelectorAll('#fint .chip').forEach(x => x.classList.remove('on'));
        c.classList.add('on'); S.filterInt = parseInt(c.dataset.int);
        document.getElementById('fiv').textContent = c.dataset.int === '-1' ? t('fAll') : c.textContent;
        renderList();
    });
}

const clOverlay = document.getElementById('changelog-overlay');
const clList = document.getElementById('changelog-list');
const clClose = document.getElementById('changelog-close');
const clConfirm = document.getElementById('changelog-confirm');
const clBtn = document.getElementById('changelog-btn');
const clDetalisBtn = document.getElementById('changelog-detalis-btn')

function renderChangelog(logs, unreadMode = false) {
    clList.innerHTML = '';
    logs.forEach(log => {
        const item = document.createElement('div'); item.className = 'cl-item';

        const titleText = log.title[currentLang] || log.title.ja;
        const rawDesc = log.desc[currentLang] || log.desc.ja;

        let safeDesc = esc(rawDesc);

        safeDesc = safeDesc.replace(/&lt;link\s+([^&>]+)&gt;(.*?)&lt;\/link&gt;/g, (match, url, content) => {
            return `<a href="${url.trim()}" style="color: #00f2ff; text-decoration: underline;" target="_blank" rel="noopener noreferrer">${content}</a>`;
        });

        item.innerHTML = `
            <div class="cl-item-hdr"><span class="cl-ver">${esc(log.version)}</span><span class="cl-date">${esc(log.date)}</span></div>
            <div class="cl-title">${esc(titleText)}</div>
            <div class="cl-desc">${safeDesc}</div>
        `;
        clList.appendChild(item);
    });
    if (unreadMode) { clConfirm.classList.remove('hidden'); clClose.classList.add('hidden'); }
    else { clConfirm.classList.add('hidden'); clClose.classList.remove('hidden'); }
}

function checkUnreadCL() {
    const read = JSON.parse(localStorage.getItem('seismo_read_logs') || '[]');
    const unread = UPDATE_LOGS.filter(l => !read.includes(l.id));
    let badge = clBtn.querySelector('.unread-badge');
    if (unread.length > 0) {
        if (!badge) { badge = document.createElement('span'); badge.className = 'unread-badge'; clBtn.appendChild(badge); }
        renderChangelog(unread, true); clOverlay.classList.remove('hidden');
    } else if (badge) badge.remove();
}

function markCLRead() {
    localStorage.setItem('seismo_read_logs', JSON.stringify(UPDATE_LOGS.map(l => l.id)));
    clBtn.querySelector('.unread-badge')?.remove();
}

clBtn.addEventListener('click', () => { renderChangelog(UPDATE_LOGS, false); clOverlay.classList.remove('hidden'); markCLRead(); });
clDetalisBtn.addEventListener('click', () => { window.location.href = "/updatelog"; })
clClose.addEventListener('click', () => clOverlay.classList.add('hidden'));
clConfirm.addEventListener('click', () => { markCLRead(); clOverlay.classList.add('hidden'); });
clOverlay.addEventListener('click', e => { if (e.target === clOverlay && clConfirm.classList.contains('hidden')) clOverlay.classList.add('hidden'); });

const tutOverlay = document.getElementById('tutorial-overlay');
document.getElementById('tutorial-start').addEventListener('click', () => {
    localStorage.setItem('seismo_tutorial_shown', '1');
    tutOverlay.classList.add('hidden'); checkUnreadCL();
});
document.getElementById('help-btn').addEventListener('click', () => tutOverlay.classList.remove('hidden'));
document.getElementById('request-btn').addEventListener('click', () => window.location.href = "/request");
document.getElementById('list-btn').addEventListener('click', () => window.location.href = "/status");
tutOverlay.addEventListener('click', e => { if (e.target === tutOverlay) tutOverlay.classList.add('hidden'); });

document.getElementById('detail-back').addEventListener('click', () => {
    S.selectedId = null; renderDetail(null); clearIntensityLayer(); stopWaves(); refreshMarkers(); renderList();
    if (S.map) S.map.flyTo([38, 138], 5, { duration: 0.8 });
});

document.getElementById('eq-alert').addEventListener('click', () => document.getElementById('eq-alert').classList.remove('show'));

function openAdGuide() { document.getElementById('ad-guide-modal').style.display = 'flex'; }
function closeAdGuide() { document.getElementById('ad-guide-modal').style.display = 'none'; }

function updateClock() {
    const now = new Date();
    const Y = now.getFullYear();
    const M = String(now.getMonth() + 1).padStart(2, '0');
    const D = String(now.getDate()).padStart(2, '0');
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    const el = document.getElementById('current-time-val');
    if (el) {
        el.innerText = `${Y}/${M}/${D} ${h}:${m}:${s}`;
    }
}

setInterval(updateClock, 1000);
updateClock();

window.addEventListener('load', () => {
    const checkAd = setInterval(() => {
        const adArea = document.querySelector('.ad-content-area');
        const iframe = adArea ? adArea.querySelector('iframe') : null;
        const placeholder = document.querySelector('.ad-placeholder');
        if (iframe && iframe.offsetHeight > 10 && placeholder) {
            placeholder.style.display = 'none';
            clearInterval(checkAd);
        }
    }, 1000);
    setTimeout(() => clearInterval(checkAd), 10000);
});

async function init() {
    setLang(currentLang);
    startLoadingAnim();
    const bar = document.getElementById('ld-bar');
    document.getElementById('ld-status').innerHTML = t('ldWait') + '<span class="blink">.</span><span class="blink2">.</span><span class="blink3">.</span>';
    await Promise.all([new Promise(r => setTimeout(r, 1200)), fetchHistory().catch(() => { })]);
    document.getElementById('ld-status').innerHTML = t('ldPrep') + '<span class="blink">.</span><span class="blink2">.</span><span class="blink3">.</span>';
    bar.style.transition = 'width 600ms ease-out'; bar.style.width = '100%';
    document.getElementById('loading').classList.add('fade-out');
    setTimeout(() => document.getElementById('loading').classList.add('hidden'), 700);
    document.getElementById('app').classList.remove('hidden');
    requestAnimationFrame(async () => {
        await initMap();
        initFilters();
        S.quakes.forEach(q => putMarker(q, false));
        renderList(); renderMiniList(); updateStats(); startHdrAnim(); connectWS();
        cancelAnimationFrame(ldAnimId);
        if (!localStorage.getItem('seismo_tutorial_shown')) { tutOverlay.classList.remove('hidden'); }
        else checkUnreadCL();
    });
}

window.onload = init;