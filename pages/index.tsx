import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { PropsWithChildren } from "react";
import Layout from "../components/layout";
import styles from "../styles/globals.module.css";

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
      <div className={styles.content} style={{ fontSize: "large" }}>
        <Head>
          <title>Home</title>
        </Head>
        <div className={styles.container}>
          <Avatar avatar={avatar} />
          <h1>Welcome!</h1>
          <p>
            Hi, I'm Vaskel. If you wanna learn about me for some reason, you can
            click{" "}
            <Link href="/about">
              <a
                style={{
                  color: "#E91E63",
                }}
              >
                here
              </a>
            </Link>
            .
          </p>
        </div>
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
