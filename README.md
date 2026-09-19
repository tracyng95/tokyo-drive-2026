# 東京自駕遊 2026.10.14–22

Tracy 一家四人（含兩位長者）東京／富士／箱根／伊豆自駕行程一覽網站。  
靜態單頁、繁體中文、適合長者閱讀與駕駛者速查，亦可加至 iPhone 主畫面。

## 預覽連結（iPhone Safari 請用這些）

1. **raw.githack（建議）**  
   https://raw.githack.com/tracyng95/tokyo-drive-2026/main/index.html

2. **jsDelivr CDN**  
   https://cdn.jsdelivr.net/gh/tracyng95/tokyo-drive-2026@main/index.html

3. **htmlpreview**  
   https://htmlpreview.github.io/?https://github.com/tracyng95/tokyo-drive-2026/blob/main/index.html

## 加至主畫面（Safari）

開啟上方任一預覽網址 → 點 **分享** → **加至主畫面**。

## 檔案說明

| 檔案 | 說明 |
|------|------|
| `index.html` | **完整自包含單頁**（CSS + JS 內嵌，含行程與 Mapcode） |
| `app.js` | 空 stub，避免舊連結 404 |
| `README.md` | 本說明 |

> 舊版 gzip 分片載入器（`c1.txt`–`c4.txt`）已淘汰；請直接開啟 `index.html`。

## 功能

- **日期晶片**（10/14–10/22）：`<a href="#d14">` 錨點導覽，無 JS 亦可跳轉；JS 僅負責高亮
- **Mapcode（マップコード）**：取還車與主要住宿顯示官方格式代碼，並可一鍵複製
- 駕駛者速查、停車提示、長者友善大字體

## Mapcode 來源（已核實）

| 地點 | Mapcode | 來源／信心 |
|------|---------|------------|
| 日產成田取車（取香529-80） | `137 705 509*00` | jcation.com 成田空港店（優先） |
| 山中湖 Shizuku（山中172） | `161 012 079*23` | Mapion（多賀扇／同址同電話） |
| Hotel Clad（深沢2839-1） | `50 806 191*67` | Mapion |
| Blisstia 仙石原（29-1） | `57 361 149*71` | Mapion |
| ラビスタ熱海（東海岸町8-19） | `116 654 558*08` | Mapion |
| 日產新宿還車（ACE南館B1F） | `669 549*10` | Mapion |
| 御殿場 Premium Outlets | `50 806 365*43` | Mapion |
| Hotel Gracery Shinjuku | （暫缺） | 顯示地址 + Google Maps；「可用導航輸入地址；Mapcode 稍後補上」 |

## 行程摘要

- **10/14** 抵達成田 → 取車 → 山中湖 Shizuku（兩晚）
- **10/15** 河口湖／山中湖賞富士
- **10/16** 御殿場 Outlet → Hotel Clad
- **10/17** 箱根 → Blisstia 箱根仙石原
- **10/18** 伊豆／熱海 → ラビスタ熱海テラス（停車需預約）
- **10/19** 鎌倉 → 新宿 Hotel Gracery → 還車
- **10/20–21** 東京購物與美食
- **10/22** 回程 UO871

Repo: https://github.com/tracyng95/tokyo-drive-2026
