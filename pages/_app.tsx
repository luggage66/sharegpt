import "../styles/globals.css";
import "../styles/highlight.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { Inter, Cormorant_Garamond } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "700",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={cx("bg-gray-50", inter.variable, cormorant.variable)}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}

export default MyApp;
