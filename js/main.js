/* =========================================================
PAGE SYSTEM
========================================================= */
const pages=document.querySelectorAll(".page");
const nav=document.getElementById("mainNav");
const footer=document.getElementById("mainFooter");
function showPage(id) {
    const pageMap = {
        "home1": "index.html",
        "home2": "home2.html",
        "about": "about.html",
        "services": "services.html",
        "features": "features.html",
        "industries": "industries.html",
        "pricing": "pricing.html",
        "contact": "contact.html",
        "login": "login.html",
        "dashboard": "dashboard.html",
        "register": "register.html"
    };
    if (pageMap[id]) {
        window.location.href = pageMap[id];
    } else {
        window.location.href = "index.html";
    }
}
/* =========================================================
MOBILE NAV
========================================================= */
function toggleMobileMenu(){
const menu=document.getElementById("mobileMenu");
const button=document.getElementById("hamburgerBtn");
if(!menu) return;
const open=menu.classList.toggle("open");
if(button){
button.setAttribute("aria-expanded",open?"true":"false");
button.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu");
const icon=button.querySelector("i");
if(icon){
icon.className=open?"fa-solid fa-xmark":"fa-solid fa-bars";
}
}
}
function closeMobile(){
const menu=document.getElementById("mobileMenu");
const button=document.getElementById("hamburgerBtn");
if(menu) menu.classList.remove("open");
if(button){
button.setAttribute("aria-expanded","false");
button.setAttribute("aria-label","Open navigation menu");
const icon=button.querySelector("i");
if(icon) icon.className="fa-solid fa-bars";
}
}
/* =========================================================
THEME
========================================================= */
function toggleTheme(){
document.body.classList.toggle("dark");
const dark=
document.body.classList.contains("dark");
localStorage.setItem(
"fleetx-theme",
dark?"dark":"light"
);
updateThemeIcons();
}
function updateThemeIcons(){
const dark=
document.body.classList.contains("dark");
document.querySelectorAll(".theme-control i")
.forEach(icon=>{
icon.className=
dark
?"fa-solid fa-sun"
:"fa-solid fa-moon";
});
}
if(localStorage.getItem("fleetx-theme")==="dark"){
document.body.classList.add("dark");
}
updateThemeIcons();
/* =========================================================
RTL
========================================================= */
function toggleRTL(){
const html=document.documentElement;
const current=html.getAttribute("dir");
const newDirection=
current==="rtl"
?"ltr"
:"rtl";
html.setAttribute(
"dir",
newDirection
);
localStorage.setItem(
"fleetx-direction",
newDirection
);
}
const savedDirection=
localStorage.getItem("fleetx-direction");
if(savedDirection){
document.documentElement.setAttribute(
"dir",
savedDirection
);
}
/* =========================================================
CONTACT FORM
========================================================= */
function submitContact(event){
event.preventDefault();
alert(
"Thank you! Your FleetX enquiry has been submitted successfully."
);
event.target.reset();
}
/* =========================================================
LOGIN
========================================================= */
function loginSubmit(event){
event.preventDefault();
alert(
"Demo login successful. Opening Fleet Manager Dashboard."
);
showPage("dashboard");
}

function registerSubmit(event){
event.preventDefault();
alert(
"Demo registration successful. Please log in."
);
showPage("login");
}
function socialLogin(provider){
alert(
provider+
" authentication demo selected."
);
}
function forgotPassword(){
alert(
"Demo password recovery selected."
);
}
/* =========================================================
DASHBOARD
========================================================= */
function dashboardView(viewId, btn){
if(window.innerWidth <= 900) {
let sidebar = document.querySelector(".dashboard-sidebar");
if(sidebar && sidebar.classList.contains("open")) {
sidebar.classList.remove("open");
}
}
document.querySelectorAll(".dashboard-view")
.forEach(view=>{
view.classList.remove("active");
});
const target=document.getElementById(viewId);
if(target){
target.classList.add("active");
}
document.querySelectorAll(".dash-menu button")
.forEach(btn=>{
btn.classList.remove("active");
});
if(button){
button.classList.add("active");
}
}
function toggleDashMenu(){
document.querySelector(".dashboard-sidebar")
.classList.toggle("open");
}
function handleDashboardButton(){
const button=document.getElementById("dashMenuBtn");
const dashboard=document.getElementById("dashboard");
if(
button &&
dashboard && dashboard.classList.contains("active") &&
window.innerWidth<=900
){
button.style.display="grid";
}else if(button){
button.style.display="none";
}
}
window.addEventListener(
"resize",
handleDashboardButton
);
/* =========================================================
LIVE TRACKING NUMBER ANIMATION
========================================================= */
let liveNumber=386;
setInterval(()=>{
const element=
document.getElementById("liveVehicles");
if(!element) return;
liveNumber+=
Math.random()>.5?1:-1;
if(liveNumber<380)
liveNumber=380;
if(liveNumber>394)
liveNumber=394;
element.textContent=liveNumber;
},2500);
/* =========================================================
TOP BUTTON
========================================================= */
window.addEventListener(
"scroll",
()=>{
const top=document.getElementById("topBtn");
if(window.scrollY>450){
top.classList.add("show");
}else{
top.classList.remove("show");
}
}
);
/* =========================================================
ESCAPE
========================================================= */
document.addEventListener(
"keydown",
event=>{
if(event.key==="Escape"){
closeMobile();
document
.getElementById("dashMobile")
.classList.remove("open");
}
}
);
/* =========================================================
SOCIAL DEMO LINKS
========================================================= */
document.querySelectorAll(".social")
.forEach(link=>{
link.addEventListener(
"click",
event=>{
event.preventDefault();
}
);
}
);
/* =========================================================
IMAGE RELIABILITY / HD IMAGE FALLBACK
========================================================= */
function fleetImageFallback(altText){
const label=(altText||"FleetX Fleet Intelligence").replace(/[<>&"']/g,"").slice(0,34);
const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#071a2d"/><stop offset="1" stop-color="#0b4f79"/></linearGradient>
<linearGradient id="road" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#1677ff"/><stop offset="1" stop-color="#10d7ff"/></linearGradient>
</defs>
<rect width="1200" height="700" fill="url(#bg)"/>
<g opacity=".16" stroke="#8ddfff"><path d="M0 120h1200M0 240h1200M0 360h1200M0 480h1200M0 600h1200"/><path d="M120 0v700M300 0v700M480 0v700M660 0v700M840 0v700M1020 0v700"/></g>
<path d="M80 540 C230 420 315 485 450 350 S675 215 815 315 S1000 270 1130 135" fill="none" stroke="url(#road)" stroke-width="13" stroke-linecap="round" stroke-dasharray="22 18"/>
<g fill="#fff" stroke="#22d3ee" stroke-width="5"><circle cx="260" cy="448" r="13"/><circle cx="555" cy="300" r="13"/><circle cx="815" cy="315" r="13"/><circle cx="1020" cy="225" r="13"/></g>
<g fill="#fff"><path d="M500 475h110l24 35v40H476v-40l24-35Z"/><circle cx="505" cy="552" r="18"/><circle cx="606" cy="552" r="18"/></g>
<text x="70" y="95" fill="#8ddfff" font-family="Arial,sans-serif" font-size="28" font-weight="700">FLEETX LIVE OPERATIONS</text>
<text x="70" y="135" fill="#cdeeff" font-family="Arial,sans-serif" font-size="20">${label}</text>
</svg>`;
return "data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(svg);
}
function initFleetImages(){
document.querySelectorAll("img").forEach((img,index)=>{
if(img.dataset.fleetImageReady==="1") return;
img.dataset.fleetImageReady="1";
if(!img.hasAttribute("decoding")) img.setAttribute("decoding","async");
if(!img.hasAttribute("loading")) img.setAttribute("loading",index<3?"eager":"lazy");
img.addEventListener("error",()=>{
if(img.dataset.fleetFallbackApplied==="1") return;
img.dataset.fleetFallbackApplied="1";
img.src=fleetImageFallback(img.alt);
});
});
}
/* =========================================================
INITIALIZATION
========================================================= */
document.addEventListener(
"DOMContentLoaded",
()=>{
handleDashboardButton();
updateThemeIcons();
initFleetImages();
}
);
if(document.readyState!=="loading") initFleetImages();