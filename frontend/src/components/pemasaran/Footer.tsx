import type { Footer as TipeFooter } from "@/types/konten";

export function Footer({ data }: { data: TipeFooter }) {
  return (
    <footer className="border-t px-6 py-8 text-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="opacity-70">
          <p>{data.hak}</p>
          <p className="mt-1">{data.catatan}</p>
        </div>
        <div className="grid gap-1 md:text-right">
          <dl className="grid gap-1">
            <div className="flex gap-2 md:justify-end">
              <dt className="opacity-60">Email</dt>
              <dd>
                <a href={`mailto:${data.kontak.email}`} className="link-halus">{data.kontak.email}</a>
              </dd>
            </div>
            <div className="flex gap-2 md:justify-end">
              <dt className="opacity-60">WhatsApp</dt>
              <dd>{data.kontak.whatsapp}</dd>
            </div>
          </dl>
          <p className="text-xs opacity-50">Kontak di atas placeholder.</p>
        </div>
      </div>
    </footer>
  );
}
