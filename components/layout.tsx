import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Footer from "./footer";
import styles from "./layout.module.css";
import Nav from "./nav";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function Layout({
  children
}: React.PropsWithChildren<{}>): ReactElement {

  const router = useRouter();
  const title = router.pathname === "/"
    ? "Home"
    : router.asPath.charAt(1).toUpperCase() + router.asPath.slice(2)

  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
      </Head>

      <Nav />
      <motion.main
        className={styles.main}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
