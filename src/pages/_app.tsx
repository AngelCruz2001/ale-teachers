import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux';
import { Navbar } from 'components';
import { store } from 'store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>

      <Head>
        <title>Instituto Alejandría </title>
        <meta name="description" content="Pagina de maestros del instituto de educación y cultura Alejandría." />
        <link rel="icon" href="/logoAleNoText.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      {
        store.getState().auth.isLoggedIn ? <Navbar /> : null
      }
      <Component {...pageProps} />

    </Provider>


  )

}

export default MyApp
