const gq=q=>"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q);
const gd=(o,d)=>"https://www.google.com/maps/dir/?api=1&origin="+encodeURIComponent(o)+"&destination="+encodeURIComponent(d)+"&travelmode=driving";
const gdest=d=>"https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(d)+"&travelmode=driving";
const P={
nrtT2:{name:"成田機場 T2",addr:"千葉県成田市古込1-1 成田空港第2ターミナル",tel:"",map:"",note:"UO848 抵步／UO871 起飛",q:"Narita Airport Terminal 2"},
nissanNrt:{name:"日產租車 成田空港店",addr:"千葉県成田市取香529-80",tel:"0476-33-8623",map:"137 705 628*33",note:"酒店日航成田正對面。08:00–20:00。先去T1/T2櫃位再接送。Mapcode為對面日航酒店參考。",q:"日産レンタカー 成田空港店 取香529-80"},
shizuku:{name:"旅館しずく",addr:"山梨県南都留郡山中湖村山中172",tel:"0555-62-1563",map:"434 285 465*37",note:"15:00入住／11:00退房。免費停車約25台。",q:"山梨県南都留郡山中湖村山中172"},
yoshizawa:{name:"めし処よしざわ",addr:"山梨県南都留郡山中湖村山中727-2",tel:"090-8738-4438",map:"",note:"夜市18:00–22:30。停車約7台。",q:"めし処よしざわ 山中湖村山中727-2"},
zeit:{name:"ZEIT BAKERY CAFE",addr:"山梨県南都留郡山中湖村山中359-7",tel:"0555-72-9081",map:"",note:"07:00–17:00 木曜定休。",q:"ZEIT BAKERY CAFE 山中湖村山中359-7"},
amaama:{name:"AMAAMA BAR&CAFE",addr:"山梨県南都留郡山中湖村山中207-7",tel:"",map:"",note:"約07:30–17:00 月曜休。",q:"AMAAMA BAR&CAFE LOUNGE 山中湖"},
yadorigi:{name:"やどりぎcafe",addr:"山梨県南都留郡山中湖村山中87",tel:"070-1007-1489",map:"",note:"約10:00–17:00，火休要再確認。",q:"やどりぎcafe 山中湖村山中87"},
nagomi:{name:"山中湖 和食 和み",addr:"山梨県南都留郡山中湖村山中21",tel:"080-4538-1725",map:"",note:"完全預約制。",q:"山中湖 和食 和み 山中21"},
panorama:{name:"明神山パノラマ台",addr:"山梨県南都留郡山中湖村平野",tel:"",map:"",note:"望湖同富士山，停車方便。",q:"山中湖 明神山パノラマ台"},
oshino:{name:"忍野八海",addr:"山梨県南都留郡忍野村忍草",tel:"",map:"",note:"平路為主，假日人多。",q:"忍野八海"},
oishi:{name:"河口湖 大石公園",addr:"山梨県南都留郡富士河口湖町大石",tel:"",map:"",note:"北岸平地，富士山構圖經典。",q:"河口湖 大石公園"},
clad:{name:"HOTEL CLAD",addr:"静岡県御殿場市深沢2839-1",tel:"0550-81-0321",map:"50 805 444*41",note:"15:00／10:00。包早餐。專用免費停車320台。東名御殿場IC約2km。",q:"HOTEL CLAD 御殿場市深沢2839-1"},
outlet:{name:"御殿場 Premium Outlets",addr:"静岡県御殿場市深沢1312",tel:"",map:"50 805 444*41",note:"酒店在Hill Side。",q:"御殿場プレミアムアウトレット"},
blisstia:{name:"BLISSTIA 箱根仙石原",addr:"神奈川県足柄下郡箱根町仙石原29-1",tel:"0460-83-9313",map:"",note:"15:00／10:00。免費停車53台。",q:"BLISSTIA 箱根仙石原 29-1"},
glass:{name:"箱根玻璃之森美術館",addr:"神奈川県足柄下郡箱根町仙石原940-48",tel:"0460-86-3111",map:"57 332 495*32",note:"10:00–17:30。室內為主。",q:"箱根ガラスの森美術館"},
lalique:{name:"箱根拉利克美術館",addr:"神奈川県足柄下郡箱根町仙石原186-1",tel:"0460-82-2255",map:"",note:"近酒店。",q:"箱根ラリック美術館"},
susuki:{name:"仙石原芒草原",addr:"神奈川県足柄下郡箱根町仙石原",tel:"",map:"",note:"10月芒草季，停車遠望即可。",q:"仙石原 すすき草原"},
atami:{name:"ラビスタ熱海テラス",addr:"静岡県熱海市東海岸町8-19",tel:"0557-81-5489",map:"116 654 558*08",note:"15:00／11:00。立體車位¥1,000/晚。車寬≤2050mm、高≤2000mm。務必預約。",q:"ラビスタ熱海テラス 東海岸町8-19"},
beach:{name:"熱海サンビーチ",addr:"静岡県熱海市東海岸町",tel:"",map:"",note:"酒店對面。",q:"熱海サンビーチ"},
buddha:{name:"高德院 鎎倉大佛",addr:"神奈川県鎎倉市長谷4-2-28",tel:"0467-22-0703",map:"",note:"平地停車相對易。",q:"高德院 鎎倉大仏"},
komachi:{name:"小町通",addr:"神奈川県鎎倉市小町",tel:"",map:"",note:"食午餐用。",q:"鎎倉 小町通り"},
gracery:{name:"Hotel Gracery Shinjuku",addr:"東京都新宿区歌舞伎町1-19-1",tel:"03-6833-2489",map:"",note:"東口步行5–8分。先放行李再還車。",q:"ホテルグレイスリー新宿 歌舞伎町1-19-1"},
nissanShin:{name:"日產租車 新宿駅西口店",addr:"東京都新宿区西新宿一丁目 西口地下街1号 小田急ACE南館B1F",tel:"03-3347-4123",map:"669 520*32",note:"平日09:00–20:00。西口改札步行約2分。",q:"日産レンタカー 新宿駅西口店 小田急エース南館"},
isetan:{name:"伊勢丹新宿店",addr:"東京都新宿区新宿3-14-1",tel:"",map:"",note:"男裝袋、衫。",q:"伊勢丹新宿店"},
abc:{name:"ABC-MART Grand Stage 新宿",addr:"東京都新宿区新宿3-26-16",tel:"",map:"",note:"波鞋。",q:"ABC-MARTグランドステージ新宿"},
riku:{name:"牛たん炭焼 利久 新宿",addr:"東京都新宿区",tel:"",map:"",note:"牛舌。",q:"牛たん炭焼 利久 新宿"},
zanmai:{name:"寿司ざんまい 新宿",addr:"東京都新宿区",tel:"",map:"",note:"方便壽司。",q:"寿司ざんまい 新宿"}
};
const legs=[
{id:"L1",day:"10/14",title:"成田取車 → 山中湖しずく",from:P.nissanNrt,to:P.shizuku,min:"150–180",km:"180–195",toll:"約¥4,000–5,500",route:"東關東道 → 圈央道／東名 → 東富士五湖道路「山中湖IC」→ 國道138。",rest:"海老名SA或足柄SA。",ic:"落山中湖IC。",warn:"落地後預1–1.5小時先開路。山中湖海拔980m，落車加外套。"},
{id:"L2",day:"10/15",title:"山中湖內圈",from:P.shizuku,to:P.oishi,min:"20–25",km:"15–20",toll:"通常不用高速",route:"國道138 → 河口湖大石。可順路忍野八海。",rest:"沿湖觀景停車灣。",ic:"今日唔使上高速。",warn:"假日忍野停車場會排隊。"},
{id:"L3",day:"10/16",title:"しずく → 御殿場 CLAD",from:P.shizuku,to:P.clad,min:"40–55",km:"約30–40",toll:"約¥1,000–1,500",route:"山中湖IC → 東富士五湖道路 → 須走IC → 御殿場IC。",rest:"道の駅すばしり。",ic:"東名御殿場IC約2km或足柄SIC約3km。",warn:"入住後泊酒店專用場。"},
{id:"L4",day:"10/17",title:"CLAD → 仙石原",from:P.clad,to:P.blisstia,min:"20–35",km:"約15–20",toll:"可走國道138",route:"Outlet → 國道138 箱根／仙石原。",rest:"仙石原街上便利店。",ic:"週末箱根塞車，提早出發。",warn:"山路彎多。大涌谷硫磺味重。"},
{id:"L5",day:"10/18",title:"仙石原 → 熱海",from:P.blisstia,to:P.atami,min:"70–100",km:"約55–70",toll:"視路線",route:"仙石原 → 箱根湯本／小田原 → 熱海ビーチライン → 國道135。",rest:"小田原可以落去廁所。",ic:"熱海立體車位有車身限制。",warn:"出發前電話確認停車預約。"},
{id:"L6",day:"10/19",title:"熱海 → 鎎倉大佛",from:P.atami,to:P.buddha,min:"90–110",km:"約70–85",toll:"視路線",route:"國道135／小田原 → 鎎倉長谷。",rest:"小田原。",ic:"導航設高德院 駐車場。",warn:"大佛影完即食晏，14:30前出發去新宿。"},
{id:"L7",day:"10/19",title:"鎎倉 → 新宿酒店",from:P.buddha,to:P.gracery,min:"60–90",km:"約50–60",toll:"首都高可能¥1,500+",route:"鎎倉 → 橫濰橫須賀／首都高 → 新宿。",rest:"入市區前加滿油。",ic:"不要駛入歌舞伎町單行。",warn:"目標16:00前到酒店放行李。"},
{id:"L8",day:"10/19",title:"酒店 → 西口還車",from:P.gracery,to:P.nissanShin,min:"8–15 步行或的士",km:"約1",toll:"—",route:"放行李 → 穿過JR新宿站去西口 → 小田急ACE南館B1F。",rest:"",ic:"西口改札出。",warn:"平日20:00關門。核對油量、傷痕、ETC。"}
];
const days=[
{date:"10/14",wd:"三",title:"成田 → 山中湖",stay:P.shizuku,legs:["L1"],plan:[["07:00","香港機場 T2"],["09:15","UO848"],["14:45","成田T2 → 日產"],["16:30","開車往山中湖"],["19:00","入住しずく"],["19:30","晚餐 よしざわ"]],eats:[P.yoshizawa],spots:[]},
{date:"10/15",wd:"四",title:"河口湖・山中湖",stay:P.shizuku,legs:["L2"],plan:[["08:00","早餐三選一"],["09:00","湖畔／明神山"],["10:30","忍野八海（可刪）"],["12:00","大石公園"],["18:00","和み（要預約）"]],eats:[P.zeit,P.amaama,P.yadorigi,P.nagomi],spots:[P.panorama,P.oshino,P.oishi]},
{date:"10/16",wd:"五",title:"御殿場 Outlet",stay:P.clad,legs:["L3"],plan:[["08:00","checkout"],["09:30","Outlet"],["15:00","入住 CLAD"],["17:30","木之花之湯"]],eats:[],spots:[P.outlet]},
{date:"10/17",wd:"六",title:"箱根仙石原",stay:P.blisstia,legs:["L4"],plan:[["07:00","CLAD早餐"],["10:30","開去仙石原"],["11:30","玻璃之森／拉利克"],["15:00","入住 Blisstia"]],eats:[],spots:[P.glass,P.lalique,P.susuki]},
{date:"10/18",wd:"日",title:"熱海",stay:P.atami,legs:["L5"],plan:[["08:00","checkout"],["11:00","熱海海灘"],["15:00","入住ラビスタ"]],eats:[],spots:[P.beach]},
{date:"10/19",wd:"一",title:"鎎倉 → 新宿還車",stay:P.gracery,legs:["L6","L7","L8"],plan:[["08:00","熱海 checkout"],["11:30","鎎倉大佛"],["12:30","小町通午餐"],["14:30","開入新宿"],["16:00","放行李"],["16:30","西口還車"]],eats:[P.komachi],spots:[P.buddha]},
{date:"10/20",wd:"二",title:"新宿購物",stay:P.gracery,legs:[],plan:[["10:00","伊勢丹"],["14:30","ABC-MART"],["18:00","利久牛舌"]],eats:[P.riku,P.zanmai],spots:[P.isetan,P.abc]},
{date:"10/21",wd:"三",title:"銀座或澀谷",stay:P.gracery,legs:[],plan:[["全日","只去一個區"]],eats:[],spots:[]},
{date:"10/22",wd:"四",title:"回港 UO871 17:05",stay:null,legs:[],plan:[["11:00","checkout"],["13:00","去成田"],["17:05","UO871"]],eats:[],spots:[P.nrtT2]}
];
function toast(t){const el=document.getElementById("toast");el.textContent=t;el.style.display="block";setTimeout(()=>el.style.display="none",1400)}
function copy(t){navigator.clipboard.writeText(t).then(()=>toast("已複製")).catch(()=>toast("請長按複製"))}
function placeCard(p){if(!p)return"";const tel=p.tel?`<a class="btn tel" href="tel:${p.tel.replace(/-/g,"")}">打電話 ${p.tel}</a>`:"";const map=p.map?`<div class="kv"><b>Mapcode</b><span class="mono">${p.map} <a href="#" onclick="copy('${p.map}');return false">複製</a></span></div>`:"";return `<div class="place"><div class="name">${p.name}</div><div class="kv"><b>地址</b><span>${p.addr}</span>${p.tel?`<b>電話</b><span>${p.tel}</span>`:""}</div>${map}${p.note?`<p class="meta" style="margin:8px 0 0">${p.note}</p>`:""}<div class="row"><a class="btn nav" href="${gdest(p.q||p.addr)}">Google 導航</a><a class="btn copy" href="${gq(p.q||p.addr)}">開地圖</a><button class="btn copy" onclick='copy(${JSON.stringify(p.addr)})'>複製地址</button>${tel}</div></div>`;}
function legCard(leg){return `<div class="card"><span class="chip">${leg.day}</span><h2>${leg.title}</h2><p class="meta">${leg.min} 分鐘 · ${leg.km} km · ${leg.toll}</p><div class="leg"><div class="t">路線</div>${leg.route}</div><div class="leg"><div class="t">交流道</div>${leg.ic}</div>${leg.rest?`<div class="leg"><div class="t">休息</div>${leg.rest}</div>`:""}<div class="alert">${leg.warn}</div><div class="row"><a class="btn nav" href="${gd(leg.from.q||leg.from.addr,leg.to.q||leg.to.addr)}">由起點導航到終點</a></div><h3>起點</h3>${placeCard(leg.from)}<h3>終點</h3>${placeCard(leg.to)}</div>`;}
function dayCard(d){return `<div class="card" id="day-${d.date.replace("/","")}"><span class="chip">${d.date}（${d.wd}）</span><h2>${d.title}</h2>${d.stay?`<p class="meta">當晚：${d.stay.name}</p>`:"<p class='meta'>回港日</p>"}<h3>時間軸</h3>${d.plan.map(x=>`<div class="kv"><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")}${d.legs.length?`<h3>今日車程</h3>`+d.legs.map(id=>legCard(legs.find(l=>l.id===id))).join(""):`<div class="okbox">今日唔使開車。</div>`}${d.stay?`<h3>今晚酒店</h3>`+placeCard(d.stay):""}${d.spots.length?`<h3>景點</h3>`+d.spots.map(placeCard).join(""):""}${d.eats.length?`<h3>飲食</h3>`+d.eats.map(placeCard).join(""):""}</div>`;}
function renderToday(){document.getElementById("view-today").innerHTML=`<div class="okbox">旅行前預設顯示 10/14。用底欄「日程」睇全部。</div>`+dayCard(days[0]);}
function renderDays(){document.getElementById("view-days").innerHTML=days.map(dayCard).join("");}
function renderNav(){document.getElementById("view-nav").innerHTML=`<div class="alert">藍色揻會開 Google Maps 開車路線。車機輸入 Mapcode 或日文地址。</div>`+legs.map(legCard).join("");}
function renderStay(){document.getElementById("view-stay").innerHTML=[P.shizuku,P.clad,P.blisstia,P.atami,P.gracery,P.nissanNrt,P.nissanShin].map(p=>`<div class="card">${placeCard(p)}</div>`).join("");}
function renderKit(){document.getElementById("view-kit").innerHTML=`<div class="card"><h2>司機必備</h2><p>IDP + 香港鵰照 + 租車確認 + 護照 + ETC。日本左駖。</p><div class="row"><a class="btn warn" href="tel:110">警察 110</a><a class="btn warn" href="tel:119">救護 119</a></div></div><div class="card"><h2>熱海停車場</h2><p>立體車位。寬≤2050mm、高≤2000mm、重≤2500kg。¥1,000/晚。</p><a class="btn tel" href="tel:0557815489">0557-81-5489</a></div><div class="card"><h2>航班</h2><p>10/14 UO848 09:15 HKG T2 → NRT T2 14:45<br>10/22 UO871 17:05 NRT T2 → HKG T1 21:00</p></div>`;}
const tabBox=document.getElementById("dayTabs");
tabBox.innerHTML=`<button class="on" data-jump="today">總覽</button>`+days.map(d=>`<button data-jump="${d.date}">${d.date}</button>`).join("");
tabBox.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;tabBox.querySelectorAll("button").forEach(x=>x.classList.remove("on"));b.classList.add("on");const j=b.dataset.jump;show("days");if(j==="today"){show("today");return;}const el=document.getElementById("day-"+j.replace("/",""));if(el)el.scrollIntoView({behavior:"smooth",block:"start");});
function show(name){document.querySelectorAll("section").forEach(s=>s.classList.toggle("on",s.id==="view-"+name));document.querySelectorAll("nav.bottom button").forEach(b=>b.classList.toggle("on",b.dataset.view===name));window.scrollTo(0,0);}
document.querySelector("nav.bottom").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;show(b.dataset.view);});
renderToday();renderDays();renderNav();renderStay();renderKit();
