import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { jwt } from "./lib/jwt";

async function isAuthenticated(request: NextRequest) {
    const Cookies = await cookies()
    const accessToken = Cookies.get("accessToken")
    if (!accessToken) {
      let refreshToken = Cookies.get("refreshToken");
      if (!refreshToken) {
        return false;
      }
      const token = new jwt(refreshToken?.value);
      if (!token.validate()) {
        return false;
      }
    }
    return true;
}

export async function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const authenticated = await isAuthenticated(request);
    if (authenticated && request.nextUrl.pathname === "/auth/login") {
        url.pathname = "/";
        return NextResponse.redirect(url);
    }
    if (!authenticated && request.nextUrl.pathname !== "/auth/login") {
        url.pathname = "/auth/login";
        return NextResponse.redirect(url);
    }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};