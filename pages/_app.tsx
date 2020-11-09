import Head from 'next/head'
import  {GlobalStyle} from '../styles/globals'


function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default App
