/* eslint-disable no-unused-vars */
"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler, PropsWithChildren, useRef, useState } from "react";
import { FiSun } from "react-icons/fi";
import styles from "./nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const routes: Array<{ href: string; name: string }> = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
] as const;

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

const GayButton = ({ onClick }: { onClick: () => void }) => {
  const gayRef = useRef<HTMLImageElement>(null);

  return (
    <button
      aria-label="Toggle gay display"
      title="Toggle gay display"
      type="button"
      onClick={() => {
        onClick();
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

const LinkItem = ({ href, name }: { href: string; name: string }) => {
  return (
    <Link href={href} aria-label={name}>
      {name}
    </Link>
  );
};

const Nav = ({ children }: PropsWithChildren<{}>) => {
  let { theme, setTheme } = useTheme();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (ev)=> {
    setIsOpen(!isOpen);
  }

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
          setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
        }}
      >
        <FiSun
          aria-label="Toggle light/dark"
          title="Toggle light/dark"
          data-theme={theme}
        />
      </button>
      {children}
      <div className={styles.link_container} data-open={isOpen}>
        <button onClick={handleClick}>
          {isOpen ? <RxCross1 /> : <GiHamburgerMenu />}
        </button>
        {routes.map(({ href, name }) =>
          path === href ? null : <LinkItem href={href} name={name} key={name} />
        )}
      </div>
    </nav>
  );
};

export { GayButton, Nav };
