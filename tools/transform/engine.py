"""Transformasi teks-saja untuk HTML hasil clone.
Tokenizer berbasis offset: setiap node teks dan elemen dicatat posisinya di string asli,
lalu perubahan diterapkan dari belakang agar offset tidak bergeser. Struktur, class, CSS,
dan script tidak diubah kecuali atribut yang eksplisit diminta (hidden, id, href)."""
import re, html

VOID = {'area','base','br','col','embed','hr','img','input','link','meta','source','track','wbr'}

def tokenize(src, start, end):
    """Kembalikan list elemen dan node teks dengan offset absolut."""
    i = start
    elems = []      # {tag, s, e (akhir open tag), close_s, close_e, parent, children_text}
    texts = []      # {s, e, raw, anc (list elemen id)}
    stack = []
    while i < end:
        lt = src.find('<', i, end)
        if lt == -1: lt = end
        if lt > i:
            raw = src[i:lt]
            if raw.strip():
                texts.append({'s': i, 'e': lt, 'raw': raw, 'anc': list(stack)})
        if lt >= end: break
        if src.startswith('<!--', lt):
            i = src.index('-->', lt) + 3; continue
        m = re.match(r'</\s*([a-zA-Z][a-zA-Z0-9-]*)\s*>', src[lt:end])
        if m:
            tag = m.group(1).lower()
            # tutup elemen terdekat dengan tag ini
            for k in range(len(stack)-1, -1, -1):
                if elems[stack[k]]['tag'] == tag:
                    elems[stack[k]]['close_s'] = lt
                    elems[stack[k]]['close_e'] = lt + m.end()
                    del stack[k:]
                    break
            i = lt + m.end(); continue
        # open tag: scan dengan memperhatikan tanda kutip
        j = lt + 1; q = None
        while j < end:
            c = src[j]
            if q:
                if c == q: q = None
            elif c in '"\'': q = c
            elif c == '>': break
            j += 1
        open_e = j + 1
        m = re.match(r'<\s*([a-zA-Z][a-zA-Z0-9-]*)', src[lt:open_e])
        tag = m.group(1).lower()
        selfclose = src[open_e-2:open_e] == '/>'
        el = {'tag': tag, 's': lt, 'e': open_e, 'close_s': None, 'close_e': None,
              'raw': src[lt:open_e], 'depth': len(stack)}
        elems.append(el)
        if tag in VOID or selfclose:
            pass
        elif tag in ('script', 'style'):
            close = re.compile(r'</%s\s*>' % tag, re.I).search(src, open_e)
            el['close_s'] = close.start(); el['close_e'] = close.end()
            i = close.end(); continue
        else:
            stack.append(len(elems)-1)
        i = open_e
    return elems, texts

def ancestors_of(elems, text):
    return [elems[k] for k in text['anc']]

def set_attr(src_parts, el, name, value):
    """Catat edit atribut pada elemen; dikembalikan sebagai (s, e, pengganti)."""
    raw = el['raw']
    value_esc = html.escape(value, quote=True)
    m = re.search(r'\s%s\s*=\s*("([^"]*)"|\'([^\']*)\')' % name, raw)
    if m:
        new = raw[:m.start()] + ' %s="%s"' % (name, value_esc) + raw[m.end():]
    else:
        cut = len(raw) - 2 if raw.endswith('/>') else len(raw) - 1
        new = raw[:cut] + ' %s="%s"' % (name, value_esc) + raw[cut:]
    return (el['s'], el['e'], new)

def add_hidden(el):
    raw = el['raw']
    if re.search(r'\shidden(\s|=|>|/)', raw): return None
    cut = len(raw) - 2 if raw.endswith('/>') else len(raw) - 1
    return (el['s'], el['e'], raw[:cut] + ' hidden' + raw[cut:])
