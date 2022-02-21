import React, { Component, ReactElement } from "react";
import Footer from "./footer";
import Nav from "./nav";

export default function Layout({children}: React.PropsWithChildren<{}>): ReactElement {
    return (
        <>
            <Nav />
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}