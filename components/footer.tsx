import styles from "./footer.module.css";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import process from "process";

const socials = {
  discord: process.env.NEXT_PUBLIC_discord,
  twitter: process.env.NEXT_PUBLIC_twitter,
  github: process.env.NEXT_PUBLIC_github,
  email: process.env.NEXT_PUBLIC_email
}

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <Link href={`${socials.discord}`}>
        <span className={styles.sr_only}>Discord</span>
        <FaDiscord className={styles.icon} />
      </Link>
      <Link href={`${socials.twitter}`}>
        <span className={styles.sr_only}>Twitter</span>
        <AiOutlineTwitter className={styles.icon} />
      </Link>
      <Link href={`${socials.github}`}>
        <span className={styles.sr_only}>GitHub</span>
        <AiFillGithub className={styles.icon} />
      </Link>
      <Link href={`${socials.email}`}>
        <span className={styles.sr_only}>Email</span>
        <SiMinutemailer className={styles.icon} />
      </Link>
    </div>
  );
};

export default Footer;
