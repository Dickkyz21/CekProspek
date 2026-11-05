import sys, os, re, html, json
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from engine import tokenize, set_attr, add_hidden
from mapping import T

SRC = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, '..', '..', 'docs', 'referensi-desain', 'ngulikdata-com-full-page.html')
OUT = sys.argv[2] if len(sys.argv) > 2 else os.path.join(HERE, '..', '..', 'frontend', 'src', 'app', 'beranda-html.ts')
src = open(SRC, encoding='utf-8').read()
bs = src.index('<body>') + len('<body>')
be = src.index('<script data-uic-runtime>')
elems, texts = tokenize(src, bs, be)

def nearest(t, tag, cls=None):
    for k in reversed(t['anc']):
        e = elems[k]
        if e['tag'] == tag and (cls is None or cls in e['raw']):
            return e
    raise SystemExit(f"tidak ketemu {tag} {cls} untuk node {t['raw'].strip()[:40]!r}")

text_edit = {}   # indeks node -> teks baru (string penuh)
attr_ops = {}    # elemen s -> list operasi (fungsi raw->raw)
elem_by_s = {e['s']: e for e in elems}

def add_attr(e, fn):
    attr_ops.setdefault(e['s'], []).append((e, fn))

# 1. Teks
for i, val in T.items():
    t = texts[i]
    raw = t['raw']; core = raw.strip()
    lead = raw[:len(raw) - len(raw.lstrip())]; trail = raw[len(raw.rstrip()):]
    if isinstance(val, tuple):
        _, old, new = val
        assert old in html.unescape(core), (i, old, core)
        newcore = html.unescape(core).replace(old, new)
    else:
        newcore = val
    text_edit[i] = lead + html.escape(newcore, quote=False) + trail

# 2. Kosongkan seluruh bagian testimoni (tidak ada sumber testimoni, hindari nama orang dari template)
for i in range(188, 516):
    t = texts[i]
    text_edit[i] = ''
    
# 3. Sembunyikan elemen yang tidak punya padanan di Suhuku
hide_rules = [
    (2, 'button', None),
    (5, 'a', None), (6, 'a', None), (8, 'div', 'relative'),
    *[(i, 'div', 'shrink-0') for i in range(61, 67)],
    *[(i, 'div', 'shrink-0') for i in range(70, 76)],
    (167, 'div', 'max-w-2xl'),
    (563, 'a', None), (564, 'a', None), (565, 'p', None),
    (579, 'li', None), (580, 'li', None), (581, 'li', None),
    *[(i, 'li', None) for i in range(586, 590)],
    (594, 'li', None), (596, 'li', None),
    (189, 'section', None),
]
for i, tag, cls in hide_rules:
    e = nearest(texts[i], tag, cls)
    add_attr(e, lambda raw: (add_hidden({'raw': raw, 's': 0, 'e': 0}) or (0, 0, raw))[2])

# 4. Tautan (href) untuk teks yang diganti
HREF = {1: '#', 3: '#apa', 4: '#beda', 7: '#harga', 9: '#harga',
        18: '#harga', 19: '#produk', 138: '#checkout', 147: '#checkout', 156: '#checkout',
        165: '#', 520: '#', 540: '#harga', 541: '#produk',
        568: '#produk', 570: '#produk', 572: '#produk',
        575: '#', 576: '#', 577: '#', 578: '#',
        583: '#cara-kerja', 584: '#cara-kerja', 585: '#cara-kerja',
        591: '#harga', 592: '#beda', 593: '#apa', 597: '#', 598: '#'}
for i, href in HREF.items():
    try:
        e = nearest(texts[i], 'a')
    except SystemExit:
        continue
    add_attr(e, lambda raw, h=href: set_href(raw, h))

def set_href(raw, h):
    if re.search(r'\shref\s*=', raw):
        return re.sub(r'(\shref\s*=\s*)("[^"]*"|\'[^\']*\')', lambda m: m.group(1) + '"' + h + '"', raw, count=1)
    cut = len(raw) - 1
    return raw[:cut] + f' href="{h}"' + raw[cut:]

def set_id(raw, v):
    if re.search(r'\sid\s*=', raw):
        return re.sub(r'(\sid\s*=\s*)("[^"]*"|\'[^\']*\')', lambda m: m.group(1) + '"' + v + '"', raw, count=1)
    cut = len(raw) - 1
    return raw[:cut] + f' id="{v}"' + raw[cut:]

# 5b. Gambar template (logo tools, screenshot produk) tidak relevan untuk Suhuku: sembunyikan.
#     Jika gambar ada di dalam kotak rasio (aspect-[...]), kotak itu yang disembunyikan agar tidak ada ruang kosong.
for e in elems:
    if e['tag'] != 'img':
        continue
    box = None
    for c in elems:
        if c['tag'] == 'div' and 'aspect-[' in c['raw'] and c['close_s'] and c['s'] < e['s'] < c['close_s']:
            if box is None or c['s'] > box['s']:
                box = c
    if box is None:
        # wrapper div terdekat, asalkan di dalamnya tidak ada teks yang masih tampil
        cand = None
        for c in elems:
            if c['tag'] == 'div' and c['close_s'] and c['s'] < e['s'] < c['close_s']:
                if cand is None or c['s'] > cand['s']:
                    cand = c
        if cand is not None:
            visible = any(cand['s'] < t['s'] < cand['close_s'] and text_edit.get(k, t['raw']).strip()
                          for k, t in enumerate(texts))
            if not visible:
                box = cand
    target = box if box is not None else e
    add_attr(target, lambda raw: (add_hidden({'raw': raw, 's': 0, 'e': 0}) or (0, 0, raw))[2])

# 5. Id jangkar pada bagian yang dipetakan
for i, anchor in {128: 'produk', 171: 'beda', 90: 'cara-kerja'}.items():
    e = nearest(texts[i], 'section')
    add_attr(e, lambda raw, a=anchor: set_id(raw, a))

# 5d. Bagian baru (apa itu, harga langganan, keranjang, untuk siapa, testimoni dummy),
#     filter tab, toggle harga, keranjang, dan gaya + script sh-*.
import sections as S
def set_raw_attr(raw, name, value):
    if re.search(r'\s%s\s*=' % name, raw):
        return re.sub(r'(\s%s\s*=\s*)("[^"]*")' % name, lambda m: m.group(1) + '"' + value + '"', raw, count=1)
    cut = len(raw) - 1
    return raw[:cut] + f' {name}="{value}"' + raw[cut:]

inserts = []  # (pos, teks)

# Filter tab hero
tabA = nearest(texts[23], 'button'); tabB = nearest(texts[24], 'button')
add_attr(tabA, lambda raw: set_raw_attr(raw, 'data-filter', 'semua'))
add_attr(tabB, lambda raw: set_raw_attr(raw, 'data-filter', 'hot'))
tabC = src[tabB['s']:tabB['close_e']].replace(texts[24]['raw'].strip(), 'Perlu dihubungi ulang', 1)
assert 'Perlu dihubungi ulang' in tabC
tabC = tabC.replace('<button', '<button data-filter="cold"', 1).replace('aria-selected="true"', 'aria-selected="false"')
inserts.append((tabB['close_e'], tabC))
hasil_span = nearest(texts[56], 'span')
add_attr(hasil_span, lambda raw: set_raw_attr(raw, 'id', 'hasil-jumlah'))

# Baris tabel: data-tier + baris keempat (Agus Setiawan)
tr_a = nearest(texts[49], 'tr'); tr_b = nearest(texts[51], 'tr'); tr_c = nearest(texts[53], 'tr')
add_attr(tr_a, lambda raw: set_raw_attr(raw, 'data-tier', 'hot'))
add_attr(tr_b, lambda raw: set_raw_attr(raw, 'data-tier', 'warm'))
add_attr(tr_c, lambda raw: set_raw_attr(raw, 'data-tier', 'cold'))
tr_d = src[tr_c['s']:tr_c['close_e']].replace('Bandung', 'Agus Setiawan', 1).replace('2.115.600.000', '81', 1)
tr_d = tr_d.replace('<tr ', '<tr data-tier="hot" ', 1)
inserts.append((tr_c['close_e'], tr_d))

# Produk: tombol tambah ke keranjang membawa harga
for idx, harga in ((138, 350000), (147, 1200000), (156, 900000)):
    a = nearest(texts[idx], 'a')
    add_attr(a, lambda raw, h=harga: set_raw_attr(raw, 'data-harga', str(h)))

# Bagian baru
def header_html(label, title, num=None):
    return S.header(label, title, num)
apa_sec = nearest(texts[76], 'section')
inserts.append((apa_sec['s'], S.APA.format(head=header_html('Apa itu Suhuku', 'Alat kerja harian untuk menjual lebih banyak ke orang yang sama.', '00'))))
prod_sec = nearest(texts[128], 'section')
plans = (S.plan('Starter', 99000, 950000, ['Hingga 500 kontak', 'Skor prospek dasar', 'Ringkasan mingguan'], 'Mulai gratis')
         + S.plan('Growth', 249000, 2390000, ['Hingga 5.000 kontak', 'Skor pelanggan dan risiko berhenti belanja', 'Notifikasi WhatsApp', 'Impor dari Shopee'], 'Mulai uji coba 14 hari', featured=True, label='Paling populer')
         + S.plan('Pro', 590000, 5660000, ['Kontak tidak terbatas', 'Akses API', 'Hingga 5 anggota tim', 'Dukungan prioritas'], 'Hubungi kami'))
inserts.append((prod_sec['close_e'], S.CART + S.HARGA.format(head=header_html('Harga langganan', 'Pilih paket sesuai ukuran usaha Anda.'), plans=plans)))
testi_sec = nearest(texts[189], 'section')
inserts.append((testi_sec['s'], S.UNTUK.format(head=header_html('Untuk siapa', 'Pemilik usaha yang sudah punya pelanggan, tetapi belum memanfaatkannya.')) + S.TESTI.format(head=header_html('Testimoni (dummy)', 'Lorem ipsum dolor sit amet, consectetur adipiscing.'))))

# Gaya dan script di akhir body
end_body = src.rindex('</body>')
inserts.append((end_body, S.CSS + S.JS))

# Terapkan: kumpulkan edit (start, end, pengganti), urutkan dari belakang
edits = []
for pos, ins in inserts:
    edits.append((pos, pos, ins))
for i, new in text_edit.items():
    t = texts[i]
    edits.append((t['s'], t['e'], new))
for s, ops in attr_ops.items():
    e = elem_by_s[s]
    raw = e['raw']
    for _, fn in ops:
        raw = fn(raw)
    edits.append((e['s'], e['e'], raw))

# pastikan tidak tumpang tindih
edits.sort()
for a, b in zip(edits, edits[1:]):
    assert a[1] <= b[0], ('overlap', a[:2], b[:2])

out_parts = []; pos = 0
body = src[bs:be]
pieces = []
cur = bs
for s, e_, new in edits:
    pieces.append(src[cur:s]); pieces.append(new); cur = e_
pieces.append(src[cur:be])
new_body = ''.join(pieces)
full = src[:bs] + new_body + src[be:]

# 5c. Animasi masuk pada salinan template belum tersimpan (rows tetap opacity-0 tanpa JS asli).
#     Hapus kelas opacity-0 dan translate-y-1 dari atribut class agar konten statis tampil.
def _fix_class(m):
    toks = m.group(1).split()
    if 'opacity-0' not in toks:
        return m.group(0)
    toks = [t for t in toks if t not in ('opacity-0', 'translate-y-1')]
    return 'class="' + ' '.join(toks) + '"'
full = re.sub(r'class="([^"]*)"', _fix_class, full)

# 6. Kepala dokumen
full = re.sub(r'href="https://ngulikdata\.com[^"]*"', 'href="#"', full)
full = full.replace('Ngulik Data homepage', 'OPS Analisis homepage')
full = re.sub(r'<title>.*?</title>', '<title>OPS Analisis (Cek Prospek). Ketahui siapa yang siap beli</title>', full, count=1, flags=re.S)
full = full.replace('<meta name="uic-origin" content="https://ngulikdata.com">\n', '')
full = re.sub(r'<!-- Cloned with Clonova[^\n]*-->\n', '', full, count=1)
full = full.replace('<html lang="id" data-theme="ngulikdata-dark"', '<html lang="id" data-theme="light"', 1)
full = full.replace('Suhuku', 'Ops').replace('suhuku', 'ops')

import os
os.makedirs(os.path.dirname(OUT), exist_ok=True)
open(OUT, 'w', encoding='utf-8').write('// Dihasilkan oleh tools/transform/build.py. Jangan diedit manual.\n' + 'export const BERANDA_HTML = ' + json.dumps(full, ensure_ascii=False) + ';\n')
print('ditulis', OUT, len(full), 'byte; edit:', len(edits))
