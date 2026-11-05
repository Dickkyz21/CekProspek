import { buatKlien } from "@/db/klien";

// Dibaca setiap request, bukan saat build. Tanpa ini Next.js akan mencoba menghubungi database saat build.
export const dynamic = "force-dynamic";

// Health check. Mengembalikan 503 jika basis data tidak terjangkau.
export async function GET() {
  const klien = buatKlien();
  try {
    await klien.execute("SELECT 1");
    return Response.json({ status: "ok", database: "ok" });
  } catch {
    return Response.json({ status: "error", database: "error" }, { status: 503 });
  } finally {
    klien.close();
  }
}
