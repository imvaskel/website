import styles from "@/styles/Home.module.css";
import { Metadata, NextPage } from "next";
import { Indie_Flower } from "next/font/google";


const indieFlower = Indie_Flower({ weight: "400", subsets: ["latin"] });

const socials = [
  { href: "https://discord.com/users/447422100798570496", name: "discord" },
  { href: "https://twitter.com/imvaskel", name: "twitter" },
  { href: "https://github.com/imvaskel", name: "github" },
  { href: "mailto:contact@vaskel.gay", name: "email" },
  { href: "https://en.pronouns.page/@vaskel", name: "pronouns" },
];

export async function generateMetadata(): Promise<Metadata> {
  const avatar = await getAvatar();

  return {
    title: "About",
    description: "About me",
    creator: "Vaskel",
    openGraph: {
      title: "Vaskel",
      description: "About me",
      url: "https://vaskel.gay",
      siteName: "vaskel.gay",
      images: avatar,
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary"
    }
  }
}

const Home: NextPage<{}> = async () => {
  const avatar = await getAvatar();

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
        <img
          src={avatar}
          className={styles.avatar}
          alt="Avatar"
        />
      </div>
    </main>
  );
};

const getAvatar = async () => {
  const res = await fetch(
    `https://discord.com/api/v10/users/${process.env.id}`,
    {
      headers: {
        Authorization: `Bot ${process.env.token}`,
        "User-Agent": "DiscordBot (https://github.com/imvaskel/website 0.1.0)",
      },
      next: {
        // 60 seconds * 15 minutes
        // TODO: Dynamic revalidation based off of whether the <img> errors.
        // Likely have to add an api route to fix this.
        revalidate: 60 * 15
      }
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch avatar data.");
  }

  const user = await res.json();
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`;

}

export default Home;
