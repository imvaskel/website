import { indieFlower } from "@/lib/fonts";
import { defaultMetadata, ensureAvatar } from "@/lib/utils";
import type { Metadata } from "next";
import { NextPage } from "next";
import Image from "next/image";
import styles from "./styles.module.css";


const socials = [
  { href: "https://discord.com/users/447422100798570496", name: "discord" },
  { href: "https://twitter.com/imvaskel", name: "twitter" },
  { href: "https://github.com/imvaskel", name: "github" },
  { href: "mailto:contact@vaskel.gay", name: "email" },
  { href: "https://en.pronouns.page/@vaskel", name: "pronouns" },
];

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



export const generateMetadata = async (): Promise<Metadata> => {
  let base = await defaultMetadata();
  base.description = "Vaskel"

  return base;
}

export default Home;