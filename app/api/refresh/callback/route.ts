import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from "@/lib/env";
import * as fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { type NextRequest } from "next/server";
import path from "path";

const API_ENDPOINT: string = "https://discord.com/api/v10";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  if (!code) {
    return new Response("", {
      status: 400,
    });
  }

  const params = new URLSearchParams({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: encodeURI(REDIRECT_URL!),
  });

  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString("base64")}`,
    },
    body: params,
  };

  const res = await fetch(`${API_ENDPOINT}/oauth2/token`, init);
  const oauth_json = await res.json();
  if (oauth_json.error || oauth_json.errors) {
    return Response.json(oauth_json, { status: 500 });
  }

  const user_res = await fetch(API_ENDPOINT + "/users/@me/connections", {
    headers: {
      Authorization: `Bearer ${oauth_json.access_token}`,
    },
  });
  const json = await user_res.json();


  await fs.writeFile(
    path.join(process.cwd(), "user.json"),
    new Uint8Array(Buffer.from(JSON.stringify(json)))
  );

  revalidatePath("/about")

  return Response.json(json);
}

export const dynamic = "force-dynamic";
