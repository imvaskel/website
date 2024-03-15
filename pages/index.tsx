import styles from "@/styles/Home.module.css";
import axios from "axios";
import { NextPage } from "next";
import { Indie_Flower, Work_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { ReactEventHandler } from "react";


const indieFlower = Indie_Flower({ weight: "400", subsets: ["latin"] });
const workSans = Work_Sans({ weight: "300", subsets: ["latin"] });

const socials = [
  { href: "https://discord.com/users/447422100798570496", name: "discord" },
  { href: "https://twitter.com/imvaskel", name: "twitter" },
  { href: "https://github.com/imvaskel", name: "github" },
  { href: "mailto:contact@vaskel.gay", name: "email" },
  { href: "https://en.pronouns.page/@vaskel", name: "pronouns" },
];

const Home: NextPage<{ avatar: string }> = ({ avatar }) => {
  const router = useRouter();

  const onImageError: ReactEventHandler<HTMLImageElement> = async (target) => {
    // This is kind of rigged, but I am unsure how to properly do this.
    // It will cause a problem for the person who unfortunately gets to be the one who
    // has to reload, but it is whatever.
    const res = await fetch("/api/revalidate");
    router.reload();
  };

  return (
    <main className={`${styles.main} ${workSans.className}`}>
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
          src={`${avatar}.png?size=1024`}
          className={styles.avatar}
          alt="Avatar"
          onError={onImageError}
        />
      </div>
    </main>
  );
};

export async function getStaticProps() {
  const res = await axios.get(
    `https://discord.com/api/v10/users/${process.env.id}`,
    {
      headers: {
        Authorization: `Bot ${process.env.token}`,
        "User-Agent": "DiscordBot (https://github.com/imvaskel/website 0.1.0)",
      },
    }
  );
  const user = res.data;

  return {
    props: {
      avatar: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`,
    },
    revalidate: 1 * 60 * 60,
  };
}

export default Home;
