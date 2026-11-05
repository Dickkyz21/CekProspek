import type { FAQ as TipeFAQ } from "@/types/konten";

// Memakai <details> agar bisa dibuka tanpa JavaScript. Animasi buka ada di globals.css.
export function FAQ({ id, data }: { id: string; data: TipeFAQ }) {
  return (
    <section id={id} className="px-6 py-16">
      <p className="text-sm font-medium text-accent">{data.label}</p>
      <h2 className="mt-2 text-3xl font-bold">{data.judul}</h2>
      <div className="faq mt-8 max-w-3xl divide-y border-y">
        {data.daftar.map((item) => (
          <details key={item.tanya} className="group py-4">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium">
              {item.tanya}
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                width="16"
                height="16"
                className="chev shrink-0 fill-current opacity-70"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
              </svg>
            </summary>
            <p className="faq-isi mt-3 text-sm">{item.jawab}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
