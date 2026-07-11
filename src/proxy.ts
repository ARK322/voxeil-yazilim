import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";

  if (host.includes("localhost") || host.includes("127.0.0.1")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  let redirect = false;

  if (host.startsWith("www.")) {
    url.host = host.replace(/^www\./, "");
    redirect = true;
  }

  const proto = request.headers.get("x-forwarded-proto");
  if (proto === "http") {
    url.protocol = "https:";
    redirect = true;
  }

  if (redirect) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
