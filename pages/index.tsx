import axios from "axios";
import type { NextPage } from "next";
import { PropsWithChildren } from "react";
import Layout from "../components/layout";
import styles from "../styles/index.module.css";
import { Indie_Flower } from "@next/font/google";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"]
})

const Avatar = ({ avatar }: PropsWithChildren<{ avatar: string }>) => {
  return <img
    className={styles.avatar}
    src={avatar + ".png?size=1024"}
    alt="Avatar"
  />
}

const Home: NextPage<{ avatar: string }> = ({ avatar }) => {
  return (
    <Layout>
      <div className={styles.content}>
        <div>
          <h1 className={`${styles.title} ${indieFlower.className}`}>
            hi, i'm vaskel.
          </h1>
        </div>
        <Avatar avatar={avatar} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await axios.get(`https://discord.com/api/v10/users/${process.env.id}`, { headers: { "Authorization": `Bot ${process.env.token}` } })
  const user = res.data

  return {
    props: {
      avatar: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`
    },
    revalidate: 12 * 60 * 60 // 12h * 60minutes * 60 seconds
  }
}

export default Home;
