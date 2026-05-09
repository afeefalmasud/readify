import dns from 'node:dns/promises'
dns.setServers(['8.8.8.8','4.4.8.8'])

import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";
import ScrollToTop from "@/components/shared/scroll/scroll";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Readify",
  description: "Online Book Borrow",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme= "light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <ScrollToTop/>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
