import { BERANDA_HTML } from "./beranda-html";

// Beranda "/" adalah halaman template hasil transformasi (lihat tools/transform).
export const dynamic = "force-static";

export function GET() {
  return new Response(BERANDA_HTML, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
