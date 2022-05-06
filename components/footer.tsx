import styles from "./footer.module.css";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import config from "../config.json";

const socials = config.socials

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <a href={socials.discord}>
        <span className={styles.sr_only}>Discord</span>
        <FaDiscord className={styles.icon} />
      </a>
      <a href={socials.twitter}>
        <span className={styles.sr_only}>Twitter</span>
        <AiOutlineTwitter className={styles.icon} />
      </a>
      <a href={socials.github}>
        <span className={styles.sr_only}>GitHub</span>
        <AiFillGithub className={styles.icon} />
      </a>
      <a href={socials.email}>
        <span className={styles.sr_only}>Email</span>
        <SiMinutemailer className={styles.icon} />
      </a>
    </div>
  );
};

export default Footer;
