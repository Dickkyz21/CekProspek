import type { BuktiSosial } from "@/types/konten";

export function ProofStrip({ data }: { data: BuktiSosial }) {
  return (
    <section className="border-y px-6 py-6 text-center">
      <p className="text-xs opacity-60">{data.label}</p>
      <div className="mt-3 flex flex-wrap justify-center gap-4">
        {data.brand.map((b) => (
          <span
            key={b}
            className="grid h-12 min-w-[7.5rem] place-items-center rounded border border-dashed px-4 text-sm opacity-70"
          >
            {b}
          </span>
        ))}
      </div>
      <p className="mt-3 text-sm opacity-70">{data.statistik.join(" · ")}</p>
    </section>
  );
}
