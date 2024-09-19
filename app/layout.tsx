"use client"
import "./globals.css";
import Head from "next/head";

import { Provider } from "react-redux";
import { store } from "./States/Store/store";
import Header from "./components/Header";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <Head>
        <title>Default Page Title</title>
        <meta name="description" content="Default description for all pages" />
      </Head>

      <body
      >

        <Provider store={store}>
        <Header />
        {children}
      </Provider>
      </body>
    </html>
  );
}
