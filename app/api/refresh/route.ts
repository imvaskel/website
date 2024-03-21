import { USERPASS, OAUTH_URL, CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from "@/lib/env";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  if (!USERPASS || !OAUTH_URL || !CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URL) {
    return new Response("oops", {
      status: 500,
    });
  }

  const authheader =
    request.headers.get("authorization") ||
    request.headers.get("Authorization");
  if (!authheader) {
    return new Response("", {
      status: 401,
      headers: {
        "WWW-Authenticate": `Basic realm="hi", charset="UTF-8"`,
      },
    });
  }

  // It comes in the form Basic (user:pass) with user:pass in b64
  // .split[1] gives us the encoded user:pass
  const auth = Buffer.from(authheader.split(" ")[1], "base64").toString();
  if (auth !== USERPASS) {
    return new Response("try again", {
      status: 400,
    })
  }

  return NextResponse.redirect(OAUTH_URL)
}
