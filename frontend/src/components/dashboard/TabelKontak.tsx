import type { Kontak } from "@/types/kontak";

const WARNA: Record<Kontak["tingkat"], string> = {
  hot: "text-good",
  warm: "text-warn",
  cold: "text-cold",
};

export function TabelKontak({ rows }: { rows: Kontak[] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left opacity-70">
            <th className="p-2">Nama</th><th className="p-2">Keterangan</th><th className="p-2">Status</th><th className="p-2">Skor</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t">
              <td className="p-2 font-medium">{r.nama}</td>
              <td className="p-2">{r.keterangan}</td>
              <td className={`p-2 ${WARNA[r.tingkat]}`}>{r.status}</td>
              <td className="p-2">{r.skor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
