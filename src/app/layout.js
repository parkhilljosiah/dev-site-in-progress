import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Josiah Parkhill Dev Site",
  description: "A Work-In-Progress Dev Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          src="https://kit.fontawesome.com/575f09d0fb.js"
          crossorigin="anonymous"
        ></script>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
