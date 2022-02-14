import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../lib/nav'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} > 
    <Nav />
  </Component>
}

export default MyApp
