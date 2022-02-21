import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { avatarUrl } from '../lib/constants'
import styles from "../styles/globals.module.css"

const Avatar = <img
  className={styles.avatar}
  src={avatarUrl + ".png?size=1024"}
  onMouseOver={e => e.currentTarget.src = avatarUrl + ".gif?size=1024"}
  onMouseLeave={e => e.currentTarget.src = avatarUrl + ".png?size=1024"} 
  alt="Avatar"
/>

const Home: NextPage = () => {
  return (
    <div className={styles.content} style={{fontSize: "large"}}>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        
        {Avatar}
        <h1>Welcome!</h1>
        <p>
          Hi, I'm Vaskel.
          If you wanna learn about me for some reason, you can click{" "}
            <Link href="/about">
              <a style={{
                color: "#E91E63"
              }}>
                here
              </a>
            </Link>.
        </p>
      </div>
    </div>
  )
}

export default Home
