import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} canonical={router.asPath} key={router.asPath} />
    </AnimatePresence>
  );
}

export default App;
