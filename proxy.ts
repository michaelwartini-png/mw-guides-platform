import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/bucket-list-2027") return NextResponse.next();
  if (process.env.BUCKET_LIST_2027_PREVIEW_ENABLED !== "true") {
    return new NextResponse("Not found", { status: 404, headers: { "X-Robots-Tag": "noindex, nofollow, noarchive" } });
  }
  const user = process.env.BUCKET_LIST_2027_PREVIEW_USER;
  const password = process.env.BUCKET_LIST_2027_PREVIEW_PASSWORD;
  if (!user || !password) return new NextResponse("Not found", { status: 404 });

  const header = request.headers.get("authorization") ?? "";
  let supplied = "";
  if (header.startsWith("Basic ")) {
    try { supplied = atob(header.slice(6)); } catch { /* invalid credentials */ }
  }
  // Constant-time comparison of fixed-size SHA-256 hashes via Web Crypto.
  // Avoid revealing credentials in URLs, logs, or browser-side code.
  return verify(supplied, user + ":" + password).then((valid) => {
    if (!valid) return new NextResponse("Login erforderlich", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Europa Bucket List 2027", charset="UTF-8"', "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow, noarchive" },
    });
    const response = NextResponse.next();
    response.headers.set("Cache-Control", "private, no-store");
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    return response;
  });
}

async function verify(actual: string, expected: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(actual)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected)),
  ]);
  const av = new Uint8Array(a);
  const bv = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < av.length; i++) diff |= av[i] ^ bv[i];
  return diff === 0;
}

export const config = { matcher: ["/bucket-list-2027"] };
