import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./nav.module.css";

const pages = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Projects",
    href: "/projects"
  }
]

const isActive = (href: string, path: string): Boolean => {
  if (href === "/") {
    return path === href
  }
  return path.startsWith(href)
}

const Nav = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
        {pages.map(({name, href}) => (
          <Link href={href} key={href}>
            <a className={styles.nav_link}>
              {name}
              {isActive(href, router.pathname) && (
                <motion.div layoutId="nav-underline" className={styles.nav_underline} />
              )}
            </a>
          </Link>
        ))}
    </nav>
  );
};

export default Nav;
