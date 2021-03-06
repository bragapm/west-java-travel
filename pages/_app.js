import Head from 'next/head'
import { SWRConfig } from 'swr'
import 'tailwindcss/tailwind.css'
import '../public/global.css'

function MyApp({ Component, pageProps }) {
  return <SWRConfig
    value={{
      refreshInterval: 3000,
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}
  >
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </SWRConfig>
}

export default MyApp
