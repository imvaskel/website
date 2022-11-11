import axios from "axios";
import type { NextPage } from "next";
import { PropsWithChildren } from "react";
import Layout from "../components/layout";
import styles from "../styles/index.module.css";

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
          <h1 className={styles.title}>
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
    }
  }
}

export default Home;
