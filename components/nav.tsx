"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useRef } from "react";
import { FiSun } from "react-icons/fi";
import styles from "./nav.module.css";

const Nav = ({ gayToggle = false }: { gayToggle?: boolean }) => {
  let { theme, setTheme } = useTheme();
  const gayRef = useRef<HTMLImageElement>(null);

  return (
    <nav className={styles.navbar}>
      {/*
      TODO: onClick activates after 2 mouse clicks on FF. Why?
      */}
      <button
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
        <FiSun data-theme={theme} />
      </button>
      {gayToggle && (
        <button
          type="button"
          onClick={() => {
            document.querySelectorAll("#line").forEach((el, key) => {
              if (key % 2 === 0) {
                el.classList.toggle("gay");
              } else {
                el.classList.toggle("enby");
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
      )}
    </nav>
  );
};

export default Nav;
