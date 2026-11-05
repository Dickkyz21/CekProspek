export function KartuKpi({ label, nilai, catatan }: { label: string; nilai: string; catatan?: string }) {
  return (
    <div className="tombol-garis rounded border p-5">
      <p className="text-xs opacity-70">{label}</p>
      <p className="mt-2 text-2xl font-bold tabular-nums">{nilai}</p>
      {catatan && <p className="mt-1 text-xs opacity-60">{catatan}</p>}
    </div>
  );
}
