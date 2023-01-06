import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import {  Toaster } from "react-hot-toast";
export default function App({ Component, pageProps, session }) {
  return (
    <>
      <Toaster />
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Provider store={store}>
        <SessionProvider session={session}>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </SessionProvider>
      </Provider>
    </>
  );
}
