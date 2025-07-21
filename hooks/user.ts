"use client";

import jwt from "@/lib/jwt";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";


export function useCurrentUser() {
    const [accessToken, setAccessToken] = useState<string | null>(null)
    useEffect(() => {
        const accessToken = Cookies.get("accessToken");
        if (!accessToken) {
            return;
        }
        const data = new jwt(accessToken || "").decrypt();
        console.log("Access Token:", data);
        setAccessToken(data?.user || null);
    }, []);
    return accessToken;
}