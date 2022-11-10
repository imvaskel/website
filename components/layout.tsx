import { motion } from "framer-motion";
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

  return (
    <div className={styles.layout}>
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
