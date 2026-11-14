import { NextRequest, NextResponse } from "next/server";

/** Public, unlisted preview: search-engine exclusion is not access control. */
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/bucket-list-2027") return NextResponse.next();
  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return response;
}
export const config = { matcher: ["/bucket-list-2027"] };
