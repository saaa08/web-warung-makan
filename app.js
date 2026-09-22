/* ==============================================================
   app.js — kode bersama untuk Beranda (index.html) & Menu (menu.html)
   Jangan diubah. Edit isi cukup di config.js saja.
   ============================================================== */

var fallbackCSS = "linear-gradient(135deg, #ff8f96, #ffc2c8)";
var imgBase = "https://images.unsplash.com/";
var crop = "?w=600&q=70&auto=format&fit=crop";

var DAY_NAMES = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

function todayName() {
  return DAY_NAMES[new Date().getDay()];
}

function rupiah(n) {
  return "Rp " + n.toLocaleString("id-ID");
}

function waLink(item) {
  var msg = encodeURIComponent(CONFIG.waMessage + " " + (item ? "(" + item.name + ")" : ""));
  return "https://wa.me/" + CONFIG.waNumber + "?text=" + msg;
}

function imgSrc(it) {
  if (!it.img) return "";
  if (it.img.indexOf("http") === 0) return it.img;
  if (/\.(jpg|jpeg|png|webp|gif|JPG|PNG|JPEG|WEBP|GIF)$/.test(it.img)) return "images/" + it.img;
  return imgBase + it.img + crop;
}

function findMenuItem(name) {
  var keys = Object.keys(MENU);
  for (var i = 0; i < keys.length; i++) {
    var arr = MENU[keys[i]].items;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j].name === name) return arr[j];
    }
  }
  return null;
}

function initBase() {
  Object.keys(TEXT).forEach(function (key) {
    document.querySelectorAll('[data-txt="' + key + '"]').forEach(function (el) {
      el.innerHTML = TEXT[key];
    });
  });

  var mapsBtn = document.getElementById("mapsBtn");
  if (mapsBtn) mapsBtn.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.mapsQuery);
  var locAddress = document.getElementById("locAddress");
  if (locAddress) locAddress.textContent = CONFIG.address;
  var mapFrame = document.getElementById("mapFrame");
  if (mapFrame) mapFrame.src = "https://maps.google.com/maps?q=" + encodeURIComponent(CONFIG.mapsQuery) + "&t=&z=15&ie=UTF8&iwloc=&output=embed";
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll(".btn[href*='wa.me']").forEach(function (b) {
    b.href = waLink(null);
  });
  var wa = document.querySelector(".wa-float");
  if (wa) wa.href = waLink(null);

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
}