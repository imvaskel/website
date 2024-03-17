"use client";

import { FiSun } from "react-icons/fi";
import styles from "./nav.module.css";
import { useTheme } from "next-themes";

const Nav = () => {
  let { theme, setTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      {/*
      TODO: onClick activates after 2 mouse clicks on FF. Why?
      */}
      <button
        className={styles.theme_toggle}
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
        <FiSun className={styles.icon} />
      </button>
    </nav>
  );
};

export default Nav;
