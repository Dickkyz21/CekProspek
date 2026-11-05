import Link from "next/link";
import { notFound } from "next/navigation";
import { BRAND, DOMAIN, HALAMAN, TAHUN, cariHalaman } from "../../../content/halaman";

export const dynamicParams = false;

export function generateStaticParams() {
  return HALAMAN.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const h = cariHalaman(slug);
  return { title: h ? `${h.judul}. ${BRAND}` : BRAND };
}

export default async function HalamanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const h = cariHalaman(slug);
  if (!h) notFound();

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-bold">
            {BRAND}
            <span className="text-blue-600">.</span>
          </Link>
          <Link href="/" className="text-sm text-slate-600 hover:underline dark:text-slate-400">
            Kembali ke beranda
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          {h.kelompok} · {h.label}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{h.judul}</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{h.lead}</p>

        <div className="mt-10 space-y-10">
          {h.bagian.map((b, i) => (
            <section key={i}>
              {b.judul && <h2 className="text-xl font-semibold">{b.judul}</h2>}
              {b.paragraf?.map((p, j) => (
                <p key={j} className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">
                  {p}
                </p>
              ))}
              {b.poin && (
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
                  {b.poin.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              )}
              {b.tabel && (
                <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                  <table className="w-full min-w-[32rem] text-left text-sm">
                    <thead className="bg-slate-50 dark:bg-slate-900">
                      <tr>
                        {b.tabel.kepala.map((k, j) => (
                          <th key={j} className="px-4 py-3 font-semibold">
                            {k}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.tabel.baris.map((r, j) => (
                        <tr key={j} className="border-t border-slate-200 dark:border-slate-800">
                          {r.map((c, k) => (
                            <td key={k} className="px-4 py-3 align-top text-slate-700 dark:text-slate-300">
                              {c}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href={h.ctaHref}
            className="inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            {h.ctaLabel}
          </Link>
        </div>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-slate-800">
        © {TAHUN} {BRAND} · {DOMAIN}. Semua hak dilindungi.
      </footer>
    </div>
  );
}
