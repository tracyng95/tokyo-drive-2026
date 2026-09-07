const gq=q=>"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q);
const gd=(o,d)=>"https://www.google.com/maps/dir/?api=1&origin="+encodeURIComponent(o)+"&destination="+encodeURIComponent(d)+"&travelmode=driving";
const gdest=d=>"https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(d)+"&travelmode=driving";
function toast(t){const el=document.getElementById("toast");el.textContent=t;el.style.display="block";setTimeout(()=>el.style.display="none",1400)}
function copy(t){navigator.clipboard.writeText(t).then(()=>toast("已複製")).catch(()=>toast("請長按複製"))}
function show(name){document.querySelectorAll("section").forEach(s=>s.classList.toggle("on",s.id==="view-"+name));document.querySelectorAll("nav.bottom button").forEach(b=>b.classList.toggle("on",b.dataset.view===name));window.scrollTo(0,0);}
document.querySelector("nav.bottom").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;show(b.dataset.view);});
document.getElementById("view-today").innerHTML="<div class='okbox'>請用下面連結開完整版。此頁已可喺 Safari 開啟。</div><div class='card'><h2>用 Safari 開呢個網址</h2><p>https://cdn.jsdelivr.net/gh/tracyng95/tokyo-drive-2026@main/index.html</p><p>開啟後：分享 → 加至主畫面</p></div>";
