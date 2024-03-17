"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { PropsWithChildren, useRef } from "react";
import { FiSun } from "react-icons/fi";
import styles from "./nav.module.css";

const GayButton = ({
  lineClass,
  gayClass,
  enbyClass,
}: {
  lineClass: string;
  gayClass: string;
  enbyClass: string;
}) => {
  const gayRef = useRef<HTMLImageElement>(null);

  return (
    <button
      aria-label="Toggle gay display"
      title="Toggle gay display"
      type="button"
      onClick={() => {
        document.querySelectorAll(`.${lineClass}`).forEach((el, key) => {
          if (key % 2 === 0) {
            el.classList.toggle(gayClass);
          } else {
            el.classList.toggle(enbyClass);
          }
        });
        if (gayRef.current !== null) {
          gayRef.current.classList.toggle(styles.notGay);
        }
      }}
    >
      <Image
        ref={gayRef}
        src="gay.svg"
        alt="gay"
        width={16}
        height={16}
        className={styles.notGay}
      ></Image>
    </button>
  );
};

const Nav = ({ children }: PropsWithChildren<{}>) => {
  let { theme, setTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      {/*
      TODO: onClick activates after 2 mouse clicks on FF. Why?
      */}
      <button
        aria-label="Toggle light/dark"
        title="Toggle light/dark"
        type="button"
        onClick={() => {
          switch (theme) {
            case "dark":
              theme = "light";
              break;
            case "light":
              theme = "dark";
              break;
            default:
              theme = "dark";
          }
          setTheme(theme);
        }}
      >
        <FiSun
          aria-label="Toggle light/dark"
          title="Toggle light/dark"
          data-theme={theme}
        />
      </button>
      {children}
    </nav>
  );
};

export { Nav, GayButton };
