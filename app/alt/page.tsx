import { NextPage } from "next";
import type { Metadata } from "next";
import styles from "./styles.module.css";
import { PageBody } from "./components";
import { defaultMetadata } from "@/lib/utils";

const Test: NextPage<{}> = () => {
  return (
    <main className={`${styles.main} ${styles.animated} ${styles.bounceIn}`}>
      <PageBody />
    </main>
  );
};

export default Test;
export const generateMetadata = async (): Promise<Metadata> => {
  let base = await defaultMetadata();
  base.title = "Alt";
  base.description = "Alternative home page."

  return base;
};
