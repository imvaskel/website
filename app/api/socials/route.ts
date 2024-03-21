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
    socials = [];
  }

  return Response.json(socials.filter((s) => s.visibility === 1 && s.type != "domain"));
}