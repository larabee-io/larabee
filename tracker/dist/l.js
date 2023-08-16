(function(r){typeof define=="function"&&define.amd?define(r):r()})(function(){"use strict";(r=>{const{screen:{width:T,height:W},navigator:{language:w},location:a,localStorage:_,document:s,history:B}=r;typeof r.wanalytics>"u"&&(r.wanalytics={user:{set:e=>{$(e)}}});const{hostname:l,pathname:b,search:v}=a,{currentScript:o}=s;if(!o)return;const y=o.getAttribute("data-api")?o.getAttribute("data-api")+"/api":"https://app.wanalytics.io/api",x=o.getAttribute("allow-localhost")=="true",c=o.getAttribute("website-id");if(!c)return;const d=(e,t)=>(Object.keys(t).forEach(i=>{t[i]!==void 0&&(e[i]=t[i])}),e);let h=a.href,p=`${b}${v}`,g=s.referrer||null,A;const E=()=>{const e=navigator.userAgent;let t={name:"Unknown",version:"Unknown"};return e.indexOf("Firefox")>-1?t={name:"Firefox",version:e.split("Firefox/")[1].split(" ")[0]}:e.indexOf("Opera")>-1||e.indexOf("OPR")>-1?t={name:"Opera",version:e.split("OPR/")[1]}:e.indexOf("Trident")>-1?t="Internet Explorer":e.indexOf("Edge")>-1?t={name:"Edge",version:e.split("Edge/")[1].split(" ")[0]}:e.indexOf("Chrome")>-1?t={name:"Chrome",version:e.split("Chrome/")[1].split(" ")[0]}:e.indexOf("Safari")>-1&&(t={name:"Safari",version:e.split("Version/")[1].split(" ")[0]}),t},k=()=>{let e=r.navigator.userAgent,t=r.navigator.platform,i=["Macintosh","MacIntel","MacPPC","Mac68K"],O=["Win32","Win64","Windows","WinCE"],u=["iPhone","iPad","iPod"],n=null;return i.indexOf(t)!==-1?n="MacOS":u.indexOf(t)!==-1?n="iOS":O.indexOf(t)!==-1?n="Windows":/Android/.test(e)?n="Android":!n&&/Linux/.test(t)?n="GNU/Linux":!n&&/X11/.test(t)?n="Unix":n="Unknown",n},P=()=>{const e=navigator.userAgent;return/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e)?"tablet":/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e)?"mobile":"desktop"},S=()=>({hostname:l,website_id:c}),L=()=>({hostname:l,website_id:c}),U=()=>({hostname:l,screen:`${screen.width}x${screen.height}`,referrer:g,url:{path:p,title:s.title},language:w,website_id:c,os:k(),browser:E(),device:P(),user_agent:navigator.userAgent}),f=(e,t)=>{if(!(l=="localhost"&&!x))return fetch(`${y}/${t}`,{method:"POST",body:JSON.stringify(e),redirect:"follow",headers:d({"Content-Type":"application/json"},{["x-cache"]:A})})},m=()=>f(d(U(),{}),"collect"),M=(e,t)=>{f(d(S(),{name:e,data:t}),"event")},$=(e,t)=>{f(d(L(),{user:e,data:t}),"user")};m(),console.log("wAnalytics started: [Build impacting products from user feedback - https://wanalytics.io]"),s.body.addEventListener("click",()=>{requestAnimationFrame(()=>{h!==a.href&&(h=a.href,g=null,p=`${a.pathname}${a.search}`,m())})},!0),s.querySelectorAll("[data-wanalytics-event]").forEach(e=>{e.addEventListener("click",t=>{let i={};Object.keys(e.dataset).forEach(n=>{if(n!="wanalyticsEvent"){const C=n.replace("wanalyticsEvent","");i[C]=e.dataset[n]}});const u=e.dataset.wanalyticsEvent;M(u,Object.keys(i).length>=1?i:null)})})})(window)});
