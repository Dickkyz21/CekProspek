// API berada di domain yang sama (route handler Next.js di /api), jadi cukup path relatif.
export async function ambilJson<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`/api${path}`, {
    ...init,
    credentials: "include", // sesi httpOnly cookie
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
  });
  if (!res.ok) throw new Error(`Permintaan gagal: ${res.status}`);
  return res.json() as Promise<T>;
}
