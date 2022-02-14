import type { NextPage } from 'next'
import Link from 'next/link'
import Nav from '../lib/nav'
import Footer from '../lib/footer'
import { AVATAR_URL } from '../lib/constants'
import Head from 'next/head'

const Avatar = <img
  style = {{
    height: "256px",
    width: "256px",
    borderRadius: "50%",
    marginTop: "32px"
  }}
  src={AVATAR_URL + ".png?size=1024"}
  onMouseOver={e => e.currentTarget.src = AVATAR_URL + ".gif?size=1024"}
  onMouseLeave={e => e.currentTarget.src = AVATAR_URL + ".png?size=1024"}>
</img>

const Home: NextPage = () => {
  return (
    <div className="root_container">
      <Head>
        <title>Home</title>
      </Head>

      <Nav />
      <div className="container">
        
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
