import type { NextPage } from 'next'
import Link from 'next/link'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { AVATAR_URL } from '../lib/constants'
import Head from 'next/head'
import styles from "../styles/globals.module.css"

const Avatar = <img
  className={styles.avatar}
  src={AVATAR_URL + ".png?size=1024"}
  onMouseOver={e => e.currentTarget.src = AVATAR_URL + ".gif?size=1024"}
  onMouseLeave={e => e.currentTarget.src = AVATAR_URL + ".png?size=1024"} 
/>

const Home: NextPage = () => {
  return (
    <div className={styles.content}>
      <Head>
        <title>Home</title>
      </Head>

      <Nav />
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
      <Footer />
    </div>
  )
}

export default Home
