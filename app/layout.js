import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"



const cakra = localFont({
  src: "./fonts/Cakra-Normal.woff",
  variable: "--font-cakra",
  weight: "100 900",
});

const makalo = localFont({
  src: "./fonts/Orbitron.ttf",
  variable: "--font-makalo",
  weight: "100 900",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jwaala'24",
  description: "Official website of arts festival of CEV JWAALA'24",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${makalo.variable} ${cakra.variable} antialiased bg-[url("blackbg.png")]`}
        >

        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
