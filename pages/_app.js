import 'tailwindcss/tailwind.css'
import '../styles/Global.css'

import Head from 'next/head'
import Router from 'next/router';

Router.events.on('routeChangeStart', () => console.log('Route changing ...')); Router.events.on('routeChangeComplete', () => console.log('Route change complte')); Router.events.on('routeChangeError', () => console.log('Route change error'));  


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fayaz's Portfolio</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
