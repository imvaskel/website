import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import { Fira_Mono } from "@next/font/google";

const firaMono = Fira_Mono({
  weight: "500",
  subsets: ["latin"],
  fallback: ["Consolas"]
})

function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={firaMono.className}>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={router.asPath} key={router.asPath} />
      </AnimatePresence>
    </div>
  );
}

export default App;
