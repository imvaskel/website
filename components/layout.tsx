import styles from "./layout.module.css"
import React, { Component, ReactElement } from "react";
import Footer from "./footer";
import Nav from "./nav";

export default function Layout({children}: React.PropsWithChildren<{}>): ReactElement {
    return (
        <div className={styles.layout}>
            <Nav />
            <main className={styles.main}>
                { children }
            </main>
            <Footer />
        </div>
    )
}