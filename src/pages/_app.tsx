import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { Navbar } from "components";
import { store } from "store/store";
import { SessionProvider, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const sessionData = await getSession();
      if (!sessionData) {
        router.push("/auth");
      }
    })();
  }, []);
  return (
    <Provider store={store}>
      <Head>
        <title>Instituto Alejandría </title>
        <meta
          name="description"
          content="Pagina de maestros del instituto de educación y cultura Alejandría."
        />
        <link rel="icon" href="/logoAleNoText.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
