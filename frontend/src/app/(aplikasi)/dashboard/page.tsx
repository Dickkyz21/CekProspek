import { TabelKontak } from "@/components/dashboard/TabelKontak";
import { contohKontak } from "@/content/dashboard";

export default function HalamanDashboard() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-xl font-semibold">Ringkasan minggu ini</h1>
      <p className="text-sm opacity-70">Data contoh</p>
      <TabelKontak rows={contohKontak} />
    </main>
  );
}
