interface LoginData {
    email: string;
    password: string;
}

export async function login(data: LoginData) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
              "Content-Type": "application/json",
              "fid": "53321321653131"
        },
        credentials: "include",
      }
  );
  return response.json();
}