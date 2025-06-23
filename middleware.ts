import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {jwt} from "./lib/jwt";

async function isAuthenticated(request: NextRequest) {
    const Cookies = await cookies()
    const accessToken = Cookies.get("accessToken")
    if (!accessToken) {
        const url = request.nextUrl.clone();
        url.pathname = "/auth/login";
        return NextResponse.redirect(url);
    }
    const token = new jwt(accessToken.value);
    const decryptedAccessToken = token.decrypt();
    console.log("decryptedAccessToken: ", decryptedAccessToken);
    
    console.log("token: ", token.validate());
    
}

export async function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    await isAuthenticated(request);
    // if (request.nextUrl.pathname === "/auth/login") {
    //     url.pathname = "/";
    //     return NextResponse.redirect(url);
    // }

  const response = NextResponse.next();
  return response;
}
