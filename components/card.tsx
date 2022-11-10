import { PropsWithChildren } from "react";
import { FaRegStar } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { motion, Variants } from "framer-motion";
import styles from "./card.module.css";

export interface Repository {
  owner: string;
  repo: string;
  link: string;
  image: string;
  language: string;
  languageColor: string;
  stars: string;
  forks: number;
  description?: string;
}

const cardVariant: Variants = {
  hidden: {
    y: "-100vw"
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      duration: 2.0,
    }
  }
}

export const Card = ({ repo, key }: PropsWithChildren<{ repo: Repository, key: string }>) => {
  return (
    <motion.li
      className={styles.card_container}
      variants={cardVariant}
      key={key}
    >
      <header className={styles.card_header}>
        <RiGitRepositoryLine />
        <a href={repo.link}>
          {" "}
          <h2>{repo.repo}</h2>{" "}
        </a>
      </header>

      {/* Probably not the best way to this, but it's the only way i could find. */}
      <p style={{ marginTop: "-5px" }}>{repo.description}</p>

      <footer className={styles.card_footer}>
        <span
          className={styles.repo_lang_color}
          style={{
            backgroundColor: repo.languageColor,
            borderColor: repo.languageColor,
          }}
        />
        <p>{repo.language}</p>
        <FaRegStar
          style={{
            width: "16px",
            height: "16px",
            float: "right",
            marginLeft: "auto",
          }}
        />
        <p style={{ marginRight: "1em" }}>{repo.stars}</p>
      </footer>
    </motion.li>
  );
};
