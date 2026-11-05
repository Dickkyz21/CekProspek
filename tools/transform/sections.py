"""Bagian baru, gaya dan kelas mengikuti template (warna token daisyUI, mono eyebrow, tombol pill).
Semua gaya baru memakai prefiks sh- agar tidak bertabrakan dengan CSS template."""

def eyebrow(label, num=None):
    n = f'<span class="tabular-nums">{num}</span>' if num else ''
    line = '<span class="sh-line" aria-hidden="true"></span>' if num else ''
    return f'<p class="sh-eyebrow">{n}{line}<span>{label}</span></p>'

def header(label, title, num=None):
    return (f'<div class="sh-head">{eyebrow(label, num)}'
            f'<h2 class="sh-h2">{title}</h2></div>')

APA = """
<section id="apa" class="sh-section sh-reveal">
  <div class="sh-wrap">
    {head}
    <p class="sh-lead">Banyak usaha kecil sudah punya ratusan kontak dan pelanggan, tetapi tidak tahu siapa yang harus dihubungi minggu ini. Suhuku menjawab pertanyaan itu setiap pagi.</p>
    <div class="sh-grid cols-3 sh-mt">
      <article class="sh-card sh-reveal"><h3>Untuk prospek</h3><p>Lihat siapa yang sudah bertanya, membuka halaman harga, atau meninggalkan keranjang, lengkap dengan skor kemungkinan membeli.</p></article>
      <article class="sh-card sh-reveal"><h3>Untuk pelanggan</h3><p>Ketahui siapa yang belanja rutin, siapa yang layak diberi penawaran ulang, dan siapa yang mulai berhenti sebelum benar-benar pergi.</p></article>
      <article class="sh-card sh-reveal"><h3>Untuk tim</h3><p>Satu daftar prioritas untuk semua orang di tim, tanpa perlu membuka spreadsheet berbeda-beda setiap hari.</p></article>
    </div>
  </div>
</section>
"""

CART = """
<div class="sh-wrap sh-cart-wrap" id="keranjang">
  <div class="sh-cart sh-reveal" id="checkout">
    <p id="keranjang-ringkas" class="sh-cart-text" aria-live="polite">Keranjang masih kosong.</p>
    <div class="sh-cart-aksi">
      <button id="btn-bayar" class="sh-btn solid" disabled>Lanjut ke pembayaran</button>
      <p id="pesan-bayar" class="sh-note" aria-live="polite"></p>
    </div>
  </div>
</div>
"""

HARGA = """
<section id="harga" class="sh-section sh-section-alt sh-reveal">
  <div class="sh-wrap">
    {head}
    <div class="sh-toggle" role="group" aria-label="Periode pembayaran">
      <button class="sh-seg" aria-pressed="true" data-periode="bulanan">Bulanan</button>
      <button class="sh-seg" aria-pressed="false" data-periode="tahunan">Tahunan</button>
    </div>
    <div class="sh-grid cols-3 sh-mt">
      {plans}
    </div>
    <p class="sh-note sh-mt">Harga ini contoh untuk pratinjau dan belum final.</p>
  </div>
</section>
"""

def rp(n):
    return f"{n:,}".replace(',', '.')

def plan(nama, bulan, tahun, fitur, tombol, featured=False, label=None):
    cls = 'sh-plan sh-reveal' + (' featured' if featured else '')
    tag = f'<span class="sh-badge">{label}</span>' if label else ''
    items = ''.join(f'<li>{f}</li>' for f in fitur)
    btn_cls = 'sh-btn solid' if featured else 'sh-btn'
    return (f'<article class="{cls}">{tag}<h3>{nama}</h3>'
            f'<p class="sh-price"><span data-m="{bulan}" data-y="{tahun}">Rp {rp(bulan)}</span>'
            f'<small class="sh-unit"> /bulan</small></p>'
            f'<ul>{items}</ul><a href="#" class="{btn_cls}">{tombol}</a></article>')

UNTUK = """
<section id="untuk" class="sh-section sh-reveal">
  <div class="sh-wrap">
    {head}
    <div class="sh-grid cols-4">
      <article class="sh-card sh-reveal"><span class="sh-tag">Marketplace</span><h3>Penjual online</h3><p>Shopee, TikTok Shop, Instagram. Punya ratusan sampai ribuan pembeli, tetapi tidak tahu siapa yang layak ditawari ulang.</p></article>
      <article class="sh-card sh-reveal"><span class="sh-tag">WhatsApp</span><h3>Usaha lewat WhatsApp</h3><p>Furniture, kosmetik, makanan. Sering kehilangan calon pembeli karena follow-up tidak konsisten dan tidak tercatat.</p></article>
      <article class="sh-card sh-reveal"><span class="sh-tag">Pengiklan</span><h3>Pengguna iklan</h3><p>Ingin melihat hubungan antara iklan, prospek, dan penjualan dalam satu tempat.</p></article>
      <article class="sh-card sh-reveal"><span class="sh-tag">Agensi (mitra)</span><h3>Agensi</h3><p>Mitra yang mengelola banyak klien. Dapat menawarkan dashboard ini kepada klien sebagai bagian dari paket layanan.</p></article>
    </div>
  </div>
</section>
"""

TESTI = """
<section id="testimoni" class="sh-section sh-section-alt sh-reveal">
  <div class="sh-wrap">
    {head}
    <div class="sh-grid cols-3">
      <article class="sh-card sh-reveal"><p class="sh-quote">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.”</p><h3>Nama Dummy 01</h3><p class="sh-sub">Lorem ipsum, dolor sit amet</p></article>
      <article class="sh-card sh-reveal"><p class="sh-quote">“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.”</p><h3>Nama Dummy 02</h3><p class="sh-sub">Consectetur, adipiscing elit</p></article>
      <article class="sh-card sh-reveal"><p class="sh-quote">“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.”</p><h3>Nama Dummy 03</h3><p class="sh-sub">Sed do eiusmod tempor</p></article>
    </div>
    <p class="sh-note sh-mt">Placeholder. Ganti dengan testimoni asli yang sudah mendapat izin dari pemberi testimoni.</p>
  </div>
</section>
"""

CSS = """
<style id="sh-extra">
.sh-section{padding:5rem 0;background:var(--color-base-100)}
.sh-section-alt{background:var(--color-base-200)}
@media (min-width:1024px){.sh-section{padding:8rem 0}}
.sh-wrap{max-width:80rem;margin:0 auto;padding:0 1rem}
@media (min-width:640px){.sh-wrap{padding:0 1.5rem}}
@media (min-width:1024px){.sh-wrap{padding:0 2rem}}
.sh-head{max-width:48rem;margin-bottom:3rem}
.sh-eyebrow{display:flex;align-items:center;gap:.75rem;font-family:var(--font-mono,ui-monospace,monospace);font-size:.75rem;font-weight:500;text-transform:uppercase;letter-spacing:.14em;opacity:.8;margin-bottom:1.5rem}
.sh-line{display:inline-block;height:1px;width:2rem;background:currentColor;opacity:.4}
.sh-h2{font-weight:700;font-size:clamp(2.25rem,5vw,3.75rem);letter-spacing:-.035em;line-height:1.02;text-wrap:balance}
.sh-lead{max-width:44rem;opacity:.75;line-height:1.7;font-size:1.05rem}
.sh-mt{margin-top:2.5rem}
.sh-note{font-size:.85rem;opacity:.65}
.sh-grid{display:grid;gap:1.25rem}
@media (min-width:768px){.sh-grid.cols-3{grid-template-columns:repeat(3,1fr)}.sh-grid.cols-4{grid-template-columns:repeat(2,1fr)}}
@media (min-width:1100px){.sh-grid.cols-4{grid-template-columns:repeat(4,1fr)}}
.sh-card,.sh-plan{position:relative;border:1px solid var(--color-base-300);background:var(--color-base-100);border-radius:1.5rem;padding:1.75rem;transition:transform .35s cubic-bezier(.32,.72,0,1),box-shadow .35s}
.sh-card:hover,.sh-plan:hover{transform:translateY(-4px);box-shadow:0 20px 40px -24px rgba(0,0,0,.35)}
.sh-section-alt .sh-card{background:var(--color-base-100)}
.sh-card h3,.sh-plan h3{font-weight:700;font-size:1.15rem;margin:.5rem 0}
.sh-card p{opacity:.75;line-height:1.6;font-size:.95rem}
.sh-tag{font-family:var(--font-mono,ui-monospace,monospace);font-size:.72rem;text-transform:uppercase;letter-spacing:.1em;color:var(--color-primary)}
.sh-quote{font-size:1.02rem;font-style:italic;opacity:.9}
.sh-sub{font-size:.85rem;opacity:.6}
.sh-toggle{display:inline-flex;padding:.25rem;border:1px solid var(--color-base-300);border-radius:999px;background:var(--color-base-100)}
.sh-seg{border:0;background:transparent;color:inherit;font:inherit;font-size:.9rem;font-weight:600;padding:.5rem 1.25rem;border-radius:999px;cursor:pointer;transition:background-color .25s,color .25s}
.sh-seg[aria-pressed="true"]{background:var(--color-primary);color:var(--color-primary-content)}
.sh-plan.featured{background:var(--color-primary);color:var(--color-primary-content);border-color:transparent}
.sh-plan.featured .sh-note,.sh-plan.featured .sh-unit{opacity:.8}
.sh-badge{position:absolute;top:-.75rem;right:1.5rem;background:var(--color-base-100);color:var(--color-base-content);font-size:.72rem;font-weight:700;padding:.25rem .75rem;border-radius:999px;text-transform:uppercase;letter-spacing:.08em}
.sh-price{font-size:2.5rem;font-weight:700;letter-spacing:-.03em;margin:1rem 0 .5rem;line-height:1}
.sh-price small{font-size:.9rem;font-weight:400;opacity:.7;letter-spacing:0}
.sh-plan ul{list-style:none;padding:0;margin:1.25rem 0 1.75rem;display:grid;gap:.6rem;font-size:.95rem}
.sh-plan li::before{content:"✓";margin-right:.6rem;font-weight:700;color:var(--color-success,#16a34a)}
.sh-plan.featured li::before{color:inherit}
.sh-plan{display:flex;flex-direction:column}
.sh-plan .sh-btn{margin-top:auto}
.sh-btn{display:inline-flex;align-items:center;justify-content:center;min-height:3rem;padding:0 1.5rem;border-radius:999px;font-weight:600;font-size:.95rem;border:1px solid currentColor;background:transparent;color:inherit;cursor:pointer;text-decoration:none;transition:transform .25s,background-color .25s,opacity .25s}
.sh-btn:hover{transform:translateY(-2px)}
.sh-btn.solid{background:var(--color-primary);color:var(--color-primary-content);border-color:transparent}
.sh-btn:disabled{opacity:.4;cursor:not-allowed;transform:none}
.sh-cart{display:flex;flex-wrap:wrap;gap:1rem 2rem;align-items:center;justify-content:space-between;border:1px solid var(--color-base-300);background:var(--color-base-100);border-radius:1.5rem;padding:1.5rem 1.75rem;margin:0 0 4rem}
.sh-cart-text{font-family:var(--font-mono,ui-monospace,monospace);font-size:.95rem}
.sh-cart-aksi{display:flex;flex-direction:column;align-items:flex-end;gap:.4rem}
.sh-cart.sh-pop{animation:shPop .4s cubic-bezier(.32,.72,0,1)}
@keyframes shPop{0%{transform:scale(1)}40%{transform:scale(1.015)}100%{transform:scale(1)}}
[role="tab"][data-filter][aria-selected="true"]{background:var(--color-base-100);color:var(--color-base-content)}
tr[data-tier]{transition:opacity .3s}
.sh-reveal{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s cubic-bezier(.32,.72,0,1)}
.sh-reveal.sh-in{opacity:1;transform:none}
.sh-card.sh-reveal.sh-in:hover,.sh-plan.sh-reveal.sh-in:hover{transform:translateY(-4px)}
[data-theme="light"] .theme-icon-dark{display:block!important}
[data-theme="light"] .theme-icon-light{display:none!important}
[data-theme="dark"] .theme-icon-light{display:block!important}
[data-theme="dark"] .theme-icon-dark{display:none!important}
@media (prefers-reduced-motion:reduce){
  .sh-reveal{opacity:1;transform:none;transition:none}
  .sh-cart.sh-pop{animation:none}
  .sh-card,.sh-plan,.sh-btn,.sh-seg{transition:none}
  .sh-card:hover,.sh-plan:hover,.sh-btn:hover{transform:none}
}
</style>
"""

JS = """
<script id="sh-script">
(function () {
  var rupiah = function (n) { return 'Rp ' + Number(n).toLocaleString('id-ID'); };

  // Reveal saat digulir
  var reveal = document.querySelectorAll('.sh-reveal');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('sh-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveal.forEach(function (el) { io.observe(el); });
  } else {
    reveal.forEach(function (el) { el.classList.add('sh-in'); });
  }

  // Filter daftar prospek (tab di hero)
  var tabs = [].slice.call(document.querySelectorAll('[role="tab"][data-filter]'));
  var rows = [].slice.call(document.querySelectorAll('tr[data-tier]'));
  var hasil = document.getElementById('hasil-jumlah');
  function filter(f) {
    var n = 0;
    rows.forEach(function (r) {
      var tampil = f === 'semua' || r.getAttribute('data-tier') === f;
      r.hidden = !tampil;
      if (tampil) n++;
    });
    tabs.forEach(function (t) {
      t.setAttribute('aria-selected', t.getAttribute('data-filter') === f ? 'true' : 'false');
    });
    if (hasil) hasil.textContent = n + ' hasil';
  }
  tabs.forEach(function (t) {
    t.addEventListener('click', function () { filter(t.getAttribute('data-filter')); });
  });

  // Toggle harga bulanan / tahunan
  var seg = [].slice.call(document.querySelectorAll('[data-periode]'));
  var harga = [].slice.call(document.querySelectorAll('[data-m][data-y]'));
  var satuan = [].slice.call(document.querySelectorAll('.sh-unit'));
  seg.forEach(function (b) {
    b.addEventListener('click', function () {
      var p = b.getAttribute('data-periode');
      seg.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      harga.forEach(function (el) { el.textContent = rupiah(el.getAttribute(p === 'tahunan' ? 'data-y' : 'data-m')); });
      satuan.forEach(function (u) { u.textContent = p === 'tahunan' ? ' /tahun' : ' /bulan'; });
    });
  });

  // Keranjang produk (pratinjau: hanya menyimpan harga)
  var cart = [];
  var ringkas = document.getElementById('keranjang-ringkas');
  var bayar = document.getElementById('btn-bayar');
  var pesan = document.getElementById('pesan-bayar');
  var kotak = document.getElementById('checkout');
  function renderCart() {
    var total = cart.reduce(function (a, b) { return a + b; }, 0);
    ringkas.textContent = cart.length ? cart.length + ' item, total ' + rupiah(total) : 'Keranjang masih kosong.';
    bayar.disabled = cart.length === 0;
  }
  [].slice.call(document.querySelectorAll('[data-harga]')).forEach(function (a) {
    a.addEventListener('click', function (ev) {
      ev.preventDefault();
      cart.push(Number(a.getAttribute('data-harga')));
      renderCart();
      pesan.textContent = '';
      kotak.classList.remove('sh-pop'); void kotak.offsetWidth; kotak.classList.add('sh-pop');
    });
  });
  // Accordion FAQ: animasi tinggi berbasis scrollHeight (grid 0fr->1fr tidak mengembang di sini)
  function faqAtur(btn, panel, buka, animasi) {
    var card = btn.parentElement;
    btn.setAttribute('aria-expanded', buka ? 'true' : 'false');
    panel.style.display = 'block';
    panel.style.overflow = 'hidden';
    panel.style.transition = animasi ? 'height 300ms ease-in-out' : 'none';
    if (buka) {
      panel.style.height = animasi ? panel.scrollHeight + 'px' : 'auto';
    } else {
      panel.style.height = panel.scrollHeight + 'px';
      void panel.offsetHeight;
      panel.style.height = '0px';
    }
    var ikon = btn.querySelector('svg');
    if (ikon) {
      ikon.style.transition = animasi ? 'transform 300ms ease-in-out' : 'none';
      ikon.style.transform = buka ? 'rotate(45deg)' : 'rotate(0deg)';
    }
    if (card) {
      card.classList.toggle('border-primary/30', buka);
      card.classList.toggle('bg-primary/5', buka);
      card.classList.toggle('border-base-300', !buka);
      card.classList.toggle('bg-base-100', !buka);
    }
  }
  [].slice.call(document.querySelectorAll('button[aria-controls^="faq-panel-"]')).forEach(function (btn) {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;
    var awal = btn.getAttribute('aria-expanded') === 'true';
    faqAtur(btn, panel, awal, false);
    panel.addEventListener('transitionend', function (ev) {
      if (ev.target !== panel || ev.propertyName !== 'height') return;
      if (btn.getAttribute('aria-expanded') === 'true') panel.style.height = 'auto';
    });
    btn.addEventListener('click', function (ev) {
      ev.stopImmediatePropagation();
      var buka = btn.getAttribute('aria-expanded') !== 'true';
      if (buka) {
        faqAtur(btn, panel, true, true);
      } else {
        panel.style.height = panel.scrollHeight + 'px';
        void panel.offsetHeight;
        btn.setAttribute('aria-expanded', 'false');
        faqAtur(btn, panel, false, true);
      }
    });
  });

  // Toggle tema terang / gelap (menu bawaan template tidak ikut tersalin)
  var akar = document.documentElement;
  function setTema(t) {
    akar.setAttribute('data-theme', t);
    try { localStorage.setItem('tema-ops', t); } catch (e) {}
    [].slice.call(document.querySelectorAll('button[aria-label="Tema tampilan"]')).forEach(function (b) {
      b.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
      b.removeAttribute('aria-haspopup');
      b.removeAttribute('aria-expanded');
    });
  }
  try { var simpan = localStorage.getItem('tema-ops'); if (simpan === 'dark' || simpan === 'light') setTema(simpan); else setTema('light'); } catch (e) { setTema('light'); }
  [].slice.call(document.querySelectorAll('button[aria-label="Tema tampilan"]')).forEach(function (b) {
    b.addEventListener('click', function (ev) {
      ev.stopImmediatePropagation();
      setTema(akar.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  });

  bayar.addEventListener('click', function () {
    pesan.textContent = 'Ini pratinjau. Pembayaran akan dihubungkan saat situs live.';
  });
})();
</script>
"""
