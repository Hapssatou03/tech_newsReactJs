import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import bookmarks from "../reducers/bookmarks";
import user from "../reducers/user";

const store = configureStore({
  reducer: { bookmarks, user },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Toaster />
    </Provider>
  );
}

export default App;
