/* ==============================================================
   ============================================================== */
/*    FILE EDITAN WARUNG BAROKAH                                 */
/*                                                               */
/*    Ini SATU-SATUNYA file yang perlu kamu ubah manual.          */
/*                                                               */
/*    SITUS KINI PUNYA 2 HALAMAN (semua baca config.js ini):     */
/*      - Beranda : index.html                                   */
/*      - Menu    : menu.html                                    */
/*                                                               */
/*    Cara pakai:                                                */
/*      1. Buka file ini dengan Notepad / VS Code                */
/*      2. Ubah teks/harga/hari sesuai kebutuhan                 */
/*      3. Simpan, lalu refresh halaman web (F5 / Ctrl+F5)       */
/*    Jangan ubah selain isi yang dijelaskan di bawah.           */
/* ============================================================== */

/* BAGIAN 1 — TEKS-TEKS YANG TAMPAK DI HALAMAN
   Ubah hanya isi di dalam tanda kutip " ... ". */

var TEXT = {

  /* Tulisan pita paling atas (di atas menu navigasi) */
  blessing: "<span>٭</span> ATAS BERKAT ROCHMAT ALLOH YANG MAHA KUASA <span>٭</span>",

  /* Judul besar di beranda. Boleh pakai <span class=\"hl\">...</span>
     untuk membuat sebagian kata berwarna merah. */
  heroTitle: "Masakan <span class=\"hl\">Rumahan Hangat</span>, Porsi Mantap, Harga Bersahabat",

  /* Paragraf pendek di bawah judul beranda */
  heroSub: "Nikmati nasi dan lauk khas Indonesia yang dimasak setiap hari dengan bahan segar. Terima makan di tempat maupun bungkus untuk dibawa pulang.",

  /* 3 kartu kecil: Jam Buka / Lokasi / Pesan Mudah */
  infoJamTitle: "Jam Buka",
  infoJamText: "Senin–Sabtu 08.00–21.00 · Minggu 08.00–17.00",
  infoLokTitle: "Lokasi",
  infoLokText: "Jl. Merdeka No. 123, dekat Pasar Baru",
  infoPesanTitle: "Pesan Mudah",
  infoPesanText: "Tersedia di tempat, bungkus, atau via WhatsApp",

  /* Judul bagian MENU */
  menuTag: "Menu & Harga",
  menuTitle: "Silahkan Pilih Menu Makanmu Hari Ini",
  menuSub: "Semua harga sudah termasuk porsi standar yang mengenyangkan.",

  /* Judul bagian LOKASI */
  lokTag: "Lokasi",
  lokTitle: "Di Mana Kami Berjualan?",
  lokSub: "Mudah ditemukan, tersedia lahan parkir dan tempat duduk (lesehan & meja).",

  /* Judul bagian JAM BUKA */
  jadTag: "Jam Buka",
  jadTitle: "Jadwal Buka & Tutup",
  jadSub: "Kami buka setiap hari. Datang saat ramai atau pesan lebih dulu lewat WhatsApp biar tak antre.",

  /* Catatan di bagian Jam Buka */
  noticeTitle: "Catatan:",
  notice1: "🛵 Pesan antar via ojek online juga bisa (GoFood / GrabFood), atau langsung WA.",
  notice2: "📅 Permintaan nasi kotak / prasmanan bisa dijadwalkan sebelumnya.",

  /* Judul bagian MENU SPESIAL */
  spesialTag: "Menu Spesial",
  spesialTitle: "Spesial Hari Ini",
  spesialSub: "Menu spesial berganti setiap hari. Hari ini <span class=\"special-day\" id=\"specialDay\"></span> — jangan sampai kehabisan!",

  /* Teks tombol di kanan atas */
  orderBtn: "🛵 Pesan Sekarang",

  /* Teks di paling bawah halaman */
  footerText: "Masakan rumahan hangat untuk semua · Jl. Merdeka No. 123, Jakarta Pusat · © <span id=\"year\"></span>"
};


/* BAGIAN 2 — KONTAK & LOKASI */
/* waNumber  : nomor WhatsApp pakai kode negara tanpa tanda "+"
              (contoh: 6281234567890 untuk nomor 0812-3456-7890) */
/* waMessage : pesan awal yang otomatis terisi saat pembeli klik WA */
/* address   : alamat lengkap warung                          */
/* mapsQuery : kata kunci pencarian di Google Maps            */

var CONFIG = {
  waNumber: "6281234567890",
  waMessage: "Halo Warung Barokah, saya mau pesan",
  address: "Jl. Merdeka No. 123, RT 05 RW 02, Kel. Pasar Baru, Kec. Senen, Jakarta Pusat",
  mapsQuery: "Jl. Merdeka No. 123, Jakarta Pusat"
};


/* BAGIAN 3 — DAFTAR MENU
   Cara menambah menu baru:
     1. Salin satu baris { name:... } lalu tempel di bawahnya.
     2. Ubah isinya sesuai menu barumu.
     3. Simpan & refresh halaman.

   Penjelasan isi satu menu:
     name  : nama menu
     desc  : deskripsi singkat
     price : harga dalam angka RUPIAH, tanpa titik/koma (15000 = Rp 15.000)
     emoji : gambar pengganti kalau tidak ada foto (boleh dikosongkan " ")
     img   : " " = tanpa foto. Untuk MEMAKAI FOTO WARUNG SENDIRI:
             1) Letakkan file foto di folder images/ (misal images/nasi-goreng.jpg)
             2) Tulis nama file saja, tanpa folder: img: "nasi-goreng.jpg"
             (nama file sebaiknya huruf kecil tanpa spasi, contoh: ayam-geprek.jpg)
     hot   : true (hapus kata ini) = muncul lencana "Terlaris"

   Cara menambah KATEGORI baru (misal "Minuman"):
     1. Setelah kategori terakhir, tambahkan:
          minuman: {
            label: "☕ Minuman",
            items: [
              { name: "...", desc: "...", price: 5000, emoji: "☕", img: "" }
            ]
          }
     2. Akhiri kategori sebelumnya dengan tanda koma ( , ) jika belum.
     Simpan & refresh. */

var MENU = {
  berat: {
    label: "🍛 Makanan Berat",
    items: [
      { name: "Nasi Goreng Spesial", desc: "Telur, ayam suwir, bakso, makin mantap.", price: 15000, img: "photo-1512058564366-18510be2db19", emoji: "🍛", hot: true },
      { name: "Nasi Ayam Geprek", desc: "Ayam goreng sambal ulek, lalapan & nasi panas.", price: 13000, img: "photo-1604908176997-125f25cc6f3d", emoji: "🍗" },
      { name: "Nasi Uduk Komplit", desc: "Uduk wangi + mie goreng, ayam, orek & telur balado.", price: 12000, img: "photo-1546069901-ba9599a7e63c", emoji: "🍚" },
      { name: "Nasi Telur Balado", desc: "Telur ceplok balado, tempe & sambal, lalapan.", price: 12000, img: "", emoji: "🍳" }
    ]
  },
  lauk: {
    label: "🍗 Nasi + Lauk",
    items: [
      { name: "Nasi Rames Spesial", desc: "Nasi + pilihan 3 lauk: ayam, telur, tempe & orek.", price: 12000, img: "photo-1546069901-ba9599a7e63c", emoji: "🥘", hot: true },
      { name: "Soto Ayam Kampung", desc: "Kuah gurih, bihun, perkedel & taburan bawang goreng.", price: 12000, img: "photo-1547592180-85f173990554", emoji: "🍲" },
      { name: "Rendang Sapi", desc: "Sapi empuk, bumbu meresap. Porsi nasi + sambal.", price: 22000, img: "photo-1600891964092-4316c288032e", emoji: "🥩" },
      { name: "Gulai Ikan Kakap", desc: "Ikan segar kuah santan kuning khas Padang.", price: 16000, img: "", emoji: "🐟" },
      { name: "Ikan Bakar Sambal", desc: "Ikan bakar + sambal dabu-dabu & lalapan segar.", price: 16000, img: "", emoji: "🔥" },
      { name: "Pecel Lele", desc: "Lele goreng kriuk + sambal terasi + nasi hangat.", price: 14000, img: "", emoji: "🐟", hot: true },
      { name: "Ayam Bakar Madu", desc: "Ayam bakar manis pedas + nasi & sambal ijo.", price: 16000, img: "photo-1532550907401-a500c9a57435", emoji: "🍗" },
      { name: "Sayur Asem + Nasi", desc: "Sayur asem segar + sambal & tempe goreng.", price: 8000, img: "", emoji: "🍅" }
    ]
  },
  jajanan: {
    label: "🍢 Jajanan & Cemilan",
    items: [
      { name: "Pisang Goreng Keju", desc: "Pisang manis + topping keju & cokelat.", price: 7000, img: "photo-1567620905732-2d1ec7ab7445", emoji: "🍌", hot: true },
      { name: "Tempe Mendoan", desc: "Tipsis garing, sambal kecap, 5 pcs.", price: 7000, img: "", emoji: "🥟" },
      { name: "Tahu Isi Enak", desc: "Tahu crispy isi sayur, 4 pcs + sambal.", price: 5000, img: "", emoji: "🫔" },
      { name: "Bakwan Jagung", desc: "Jagung manis renyah, 3 pcs.", price: 5000, img: "photo-1601050690597-df0568f70950", emoji: "🌽" },
      { name: "Aneka Gorengan", desc: "1 pcs per rasa. Pilih: tahu, tempe, bakwan, pisang.", price: 2000, img: "", emoji: "🍢" },
      { name: "Es Teh Manis", desc: "Teh dingin segar, gelas besar.", price: 3000, img: "", emoji: "🧋" },
      { name: "Es Jeruk Peras", desc: "Jeruk asli diperas, asam manis.", price: 5000, img: "", emoji: "🍊" },
      { name: "Kopi Susu Gula Aren", desc: "Kopi susu dengan gula aren asli, creamy.", price: 7000, img: "", emoji: "☕" }
    ]
  }
};


/* BAGIAN 4 — JAM BUKA SETIAP HARI
   day   : nama hari
   open  : jam buka (format 08.00)
   close : jam tutup
   sum   : biarkan true pada hari yang mau ditandai sebagai ringkasan
           (hilangkan kata sum: true untuk hari biasa) */

var HOURS = [
  { day: "Senin",   open: "08.00", close: "21.00" },
  { day: "Selasa",  open: "08.00", close: "21.00" },
  { day: "Rabu",    open: "08.00", close: "21.00" },
  { day: "Kamis",   open: "08.00", close: "21.00" },
  { day: "Jumat",   open: "08.00", close: "21.00" },
  { day: "Sabtu",   open: "08.00", close: "21.00" },
  { day: "Minggu",  open: "08.00", close: "17.00", sum: true }
];


/* ==============================================================
   BAGIAN 5 — MENU SPESIAL HARIAN
   ==============================================================
   Ini fitur "Spesial Hari Ini": satu menu dari daftar di atas
   yang tampil otomatis sesuai hari di saat web dibuka.

   Cara mengganti menu spesial:
     1. Tulis nama menu PERSIS SAMA dengan yang ada di BAGIAN 3
        (contoh: "Nasi Goreng Spesial", "Pecel Lele").
     2. Boleh ganti menu apa pun untuk hari mana pun — tinggal
        ubah nama di dalam tanda kutip.
     3. Kalau satu hari tidak mau ada menu spesial, kosongkan
        dengan dua tanda kutip: "".

   Nama hari: Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu */

var MENU_SPESIAL = {
  Senin:   "Nasi Goreng Spesial",
  Selasa:  "Nasi Uduk Komplit",
  Rabu:    "Pecel Lele",
  Kamis:   "Rendang Sapi",
  Jumat:   "Gulai Ikan Kakap",
  Sabtu:   "Ayam Bakar Madu",
  Minggu:  "Nasi Rames Spesial"
};