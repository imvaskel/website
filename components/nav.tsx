"use client";

import { FiSun } from "react-icons/fi";
import styles from "./nav.module.css";
import { useTheme } from "next-themes";
import { useRef } from "react";

const Nav = () => {
  let { theme, setTheme } = useTheme();
  const gayRef = useRef<HTMLImageElement>(null);

  return (
    <nav className={styles.navbar}>
      {/*
      TODO: onClick activates after 2 mouse clicks on FF. Why?
      */}
      <button
        onClick={(ev) => {
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
          console.log(theme)
          setTheme(theme);
        }}
      >
        <FiSun data-theme={theme} />
      </button>
      <button onClick={(ev) => {
        let lines = document.querySelectorAll("#line");
        if (lines.length === 2) {
          let first = lines[0];
          let second = lines[1];
          first.classList.toggle("gay");
          second.classList.toggle("enby");
        }
        if (gayRef.current !== null) {
          gayRef.current.classList.toggle(styles.notGay);
        }
      }}>
        <img ref={gayRef} src="gay.svg" alt="gay" className={styles.notGay}></img>
      </button>
    </nav>
  );
};

export default Nav;
