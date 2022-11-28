import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import { Fira_Mono } from "@next/font/google"

const firaMono = Fira_Mono({
  weight: "500",
  subsets: ["latin"]
})

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${firaMono.style.fontFamily}, "Courier New", Courier, monospace;
        }
      `}</style>

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={router.asPath} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}

export default App;
