import { UserData } from "@/lib/utils"
import { readFile } from "fs/promises";
import path from "path";

export const GET = async () => {
  let socials: Array<UserData>;
  try {
    socials = JSON.parse(
      await readFile(path.join(process.cwd(), "user.json"), {
        encoding: "utf-8",
      })
    );
  }
  catch {
    console.warn("tried to get json data from user.json, but an error occurred.");
    socials = [];
  }

  return Response.json(socials.filter((s) => s.visibility === 1 && s.type != "domain"));
}

export const dynamic = "force-dynamic";