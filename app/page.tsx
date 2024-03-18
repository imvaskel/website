import { readdir, rm, writeFile } from "fs/promises";
import { Metadata, NextPage } from "next";
import { Indie_Flower } from "next/font/google";
import Image from "next/image";
import path from "path";
import styles from "./styles.module.css";

const indieFlower = Indie_Flower({ weight: "400", subsets: ["latin"] });

const socials = [
  { href: "https://discord.com/users/447422100798570496", name: "discord" },
  { href: "https://twitter.com/imvaskel", name: "twitter" },
  { href: "https://github.com/imvaskel", name: "github" },
  { href: "mailto:contact@vaskel.gay", name: "email" },
  { href: "https://en.pronouns.page/@vaskel", name: "pronouns" },
];

export async function generateMetadata(): Promise<Metadata> {
  const image = await ensureAvatar();

  return {
    title: "About",
    description: "About me",
    creator: "Vaskel",
    openGraph: {
      title: "Vaskel",
      description: "About me",
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

const Home: NextPage<{}> = async () => {
  const image = await ensureAvatar();

  return (
    <main className={`${styles.main}`}>
      <div className={styles.wrapper}>
        <div className={styles.text_container}>
          <div className={styles.header_wrapper}>
            <h1 className={`${styles.header} ${indieFlower.className}`}>
              Hiya, I'm{" "}
            </h1>
            <h1
              className={`${styles.header} ${styles.gay} ${indieFlower.className}`}
            >
              Vaskel.
            </h1>
          </div>
          <p className={styles.text}>
            Or you can call me Skylar, I go by either. I'm from the US and going
            to college to study computer science (there's a joke in here, I feel
            it.), and y'know, I'm a bit fruity. <b>(they/them)</b>.<br />
            If you'd like to contact me, the best place to is discord (click the
            link below!).
          </p>
          <div className={styles.socials_container}>
            {socials.map(({ name, href }) => (
              <a
                className={styles.social_link}
                href={href}
                key={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
        <Image width={128} height={128} src={image} className={styles.avatar} alt="Avatar" />
      </div>
    </main>
  );
};

const publicDir = path.join(process.cwd(), "public");

const ensureAvatar = async () => {
  const res = await fetch(
    `https://discord.com/api/v10/users/${process.env.id}`,
    {
      headers: {
        Authorization: `Bot ${process.env.token}`,
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
  if (!dir.includes(`${user.avatar}.png`)) {
    const url = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`;

    const avatarRes = await fetch(url, {
      cache: "no-store",
    });

    if (!avatarRes.ok) {
      throw new Error("Error downloading avatar stream.");
    }

    const avatarPath = path.join(process.cwd(), "public", `${user.avatar}.png`);
    const buffer = Buffer.from(await avatarRes.arrayBuffer());
    await writeFile(avatarPath, buffer);

    for (const file of dir) {
      if (file != `${user.avatar}.png` && file.endsWith(".png")) {
        await rm(path.join(publicDir, file), { force: true });
        console.debug(`removed cached avatar public/${file}`);
      }
    }
  }

  return `/${user.avatar}.png`;
};

export default Home;
