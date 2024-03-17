import { NextPage } from "next";
import styles from "./styles.module.css";
import "./globals.css"
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { Indie_Flower } from "next/font/google";
import Nav from "@/components/nav";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

const socials = {
  discord: "https://discord.com/users/447422100798570496",
  twitter: "https://twitter.com/imvaskel",
  github: "https://github.com/imvaskel",
  email: "mailto:contact@vaskel.gay",
  pronouns: "https://en.pronouns.page/@vaskel",
};

const Test: NextPage<{}> = () => {
  return (
    <main className={styles.main}>
      <div className={styles.slant}>
        <div className={styles.intro}>
          <h1 className={`${styles.intro} ${indieFlower.className}`}>
            Hey, I'm
          </h1>
          <div>
            <div className={styles.line} id="line"></div>
          </div>
        </div>
        <h1 className={`${styles.name} ${indieFlower.className}`}>Vaskel.</h1>
        <div className={styles.social}>
          <div className={styles.line} id="line"></div>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href={socials.github}>
                <FaGithub />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href={socials.discord}>
                <FaDiscord />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href={socials.email}>
                <IoMailOutline />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href={socials.twitter}>
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Nav />
    </main>
  );
};

export default Test;
export { generateMetadata } from "@/app/page"
