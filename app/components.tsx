"use client";

import { Nav, GayButton } from "@/components/nav";
import { useState } from "react";
import { FaGithub, FaDiscord, FaTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import styles from "./styles.module.css";
import { indieFlower } from "@/lib/fonts";
import { socials } from "@/lib/socials";

export const PageBody = () => {
  const [isGay, setIsGay] = useState<boolean>(false);

  return (
    <>
      <div className={styles.slant}>
        <div className={styles.intro}>
          <h1 className={`${styles.intro} ${indieFlower.className}`}>
            Hey, I'm
          </h1>
          <div>
            <div className={`${styles.line} ${isGay ? styles.enby : ""}`}></div>
          </div>
        </div>
        <h1 className={`${styles.name} ${indieFlower.className}`}>Vaskel.</h1>
        <div className={styles.social}>
          <div className={`${styles.line} ${isGay ? styles.enby : ""}`}></div>
          <ul>
            <li>
              <a
                aria-label="GitHub"
                title="GitHub"
                target="_blank"
                rel="noreferrer"
                href={socials.github}
              >
                <FaGithub aria-label="GitHub" title="GitHub" />
              </a>
            </li>
            <li>
              <a
                aria-label="Discord"
                title="Discord"
                target="_blank"
                rel="noreferrer"
                href={socials.discord}
              >
                <FaDiscord aria-label="Discord" title="Discord" />
              </a>
            </li>
            <li>
              <a
                aria-label="Email"
                title="Email"
                target="_blank"
                rel="noreferrer"
                href={socials.email}
              >
                <IoMailOutline aria-label="Email" title="Email" />
              </a>
            </li>
            <li>
              <a
                aria-label="Twitter"
                title="Twitter"
                target="_blank"
                rel="noreferrer"
                href={socials.twitter}
              >
                <FaTwitter aria-label="Twitter" title="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Nav>
        <GayButton
          onClick={() => {
            setIsGay(!isGay);
          }}
        />
      </Nav>
    </>
  );
};
