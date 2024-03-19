import { ensureAvatar } from "@/app/page";
import { Metadata } from "next/types";

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