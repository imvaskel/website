import { readdir, writeFile, rm } from "fs/promises";
import { Metadata } from "next/types";
import path from "path";
import { ID, TOKEN } from "./env";

export interface UserData {
  id: string
  name: string
  type: string
  friend_sync: boolean
  metadata_visibility: number
  show_activity: boolean
  two_way_link: boolean
  verified: boolean
  visibility: number
}

export interface AvatarDecorationData {
  asset: string;
  sku_id: string;
}

const publicDir = path.join(process.cwd(), "public");

export const ensureAvatar = async (): Promise<string> => {
  const res = await fetch(
    `https://discord.com/api/v10/users/${ID}`,
    {
      headers: {
        Authorization: `Bot ${TOKEN}`,
        "User-Agent": "DiscordBot (https://github.com/imvaskel/website 0.1.0)",
      },
      next: {
        // 60 seconds * 15 minutes
        revalidate: 60 * 15,
      },
    }
  );

  const user = await res.json();
  const dir = await readdir(publicDir);

  // If the avatar is not already cached, cache it and remove old ones.
  if (!dir.includes(`${user.avatar}-avatar.png`)) {
    const url = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`;

    const avatarRes = await fetch(url, {
      cache: "no-store",
    });

    if (!avatarRes.ok) {
      throw new Error("Error downloading avatar stream.");
    }

    const avatarPath = path.join(
      process.cwd(),
      "public",
      `${user.avatar}-avatar.png`
    );
    const buffer = Buffer.from(await avatarRes.arrayBuffer());
    await writeFile(avatarPath, buffer);

    for (const file of dir) {
      if (file != `${user.avatar}-avatar.png` && file.endsWith(".png")) {
        await rm(path.join(publicDir, file), { force: true });
        console.debug(`removed cached avatar public/${file}`);
      }
    }
  }

  return `/${user.avatar}-avatar.png`;
};

export async function defaultMetadata(): Promise<Metadata> {
  const image = await ensureAvatar();

  return {
    title: "Vaskel",
    creator: "Vaskel",
    openGraph: {
      title: "Vaskel",
      description: "a very gay website",
      url: "https://vaskel.gay",
      siteName: "vaskel.gay",
      images: `https://vaskel.gay${image}`,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
    },
  };
}
