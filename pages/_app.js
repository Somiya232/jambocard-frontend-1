import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect } from "react";
import { addToken, addUser } from "../redux/slice/authSlice";
// import manifest from "../public/manifest.json"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Provider store={store}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  );
}
