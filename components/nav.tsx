import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import styles from "./nav.module.css";

const NavbarLink = ({
  href,
  name,
}: PropsWithChildren<{ href: string; name: string }>) => {
  const router = useRouter();
  const isCurrent = href === router.asPath ? "page" : undefined;

  return (
    <li className={styles.nav_link}>
      <Link href={href}>
        <a aria-current={isCurrent}>{name}</a>
      </Link>
    </li>
  );
};

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.nav_link_container}>
        <NavbarLink href="/" name="Home" />
        <NavbarLink href="/about" name="About" />
        <NavbarLink href="/projects" name="Projects" />
      </ul>
    </nav>
  );
};

export default Nav;
