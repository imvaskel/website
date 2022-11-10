import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

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
