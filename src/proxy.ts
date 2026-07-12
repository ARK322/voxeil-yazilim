import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/lib/site";

export function proxy(request: NextRequest) {
  const hostname = (request.headers.get("host") || "").split(":")[0];

  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return NextResponse.next();
  }

  const proto = request.headers.get("x-forwarded-proto");
  const needsHttps = proto === "http";
  const needsWwwStrip = hostname.startsWith("www.");

  if (!needsHttps && !needsWwwStrip) {
    return NextResponse.next();
  }

  const destination = new URL(
    request.nextUrl.pathname + request.nextUrl.search,
    siteConfig.url,
  );

  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher:
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
};
