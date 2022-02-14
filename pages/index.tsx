import type { NextPage } from 'next'
import Link from 'next/link'
import Nav from '../lib/nav'
import Footer from '../lib/footer'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Nav />
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
      <Footer />
    </div>
  )
}

export default Home
