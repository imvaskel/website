import Link from "next/link";
import { useRouter } from "next/router"
import styles from "./nav.module.css"

const navbarLink = (href: string, name: string) => {
    const router = useRouter();
    const isCurrent = href === router.asPath ? 'page' : undefined;

    return (
        <li className={styles.nav_link}>
            <Link href={href}>
                <a aria-current={isCurrent}>{name}</a>
            </Link>
        </li>
    )
}

const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.nav_link_container}>
                {navbarLink("/", "Home")}
                {navbarLink("/about", "About")}
            </ul>
        </nav>
    )
}

export default Nav