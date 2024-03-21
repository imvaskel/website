import { NextPage } from "next";
import type { Metadata } from "next";
import styles from "./styles.module.css";
import { PageBody } from "./components";
import { defaultMetadata } from "@/lib/utils";

const Home: NextPage<{}> = () => {
  return (
    <main className={`${styles.main} ${styles.animated} ${styles.bounceIn}`}>
      <PageBody />
    </main>
  );
};

export default Home;
export const generateMetadata = async (): Promise<Metadata> => {
  let base = await defaultMetadata();
  base.title = "Vaskel";
  base.description = "A gay creature."

  return base;
};
