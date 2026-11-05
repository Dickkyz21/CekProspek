export function Header() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b px-6">
      <a href="#" className="text-lg font-bold">
        Suhuku<span className="text-accent">.</span>
      </a>
      <nav className="flex flex-wrap gap-4 text-sm">
        <a href="#apa">Apa itu Suhuku</a>
        <a href="#beda">Keunggulan</a>
        <a href="#harga">Harga</a>
      </nav>
      <div className="flex gap-2">
        <a href="#" className="rounded border px-3 py-2 text-sm">Masuk</a>
        <a href="#harga" className="rounded bg-accent px-3 py-2 text-sm text-white">Coba gratis</a>
      </div>
    </header>
  );
}
