import { TabelPengguna } from "@/components/admin/TabelPengguna";
import { penggunaContoh } from "@/content/admin";

export default function HalamanPenggunaAdmin() {
  return (
    <>
      <h1 className="text-3xl font-bold">Pengguna</h1>
      <p className="mt-2 text-sm opacity-70">Daftar akun usaha beserta paket yang dipakai.</p>
      <div className="tombol-garis mt-6 rounded border p-6">
        <TabelPengguna data={penggunaContoh} />
      </div>
    </>
  );
}
