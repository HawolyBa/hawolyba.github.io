import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins, Glegoo, Teko } from "next/font/google"
import "./globals.css";
import "animate.css/animate.compat.css"

import Header from "../components/Header";


const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })
const glegoo = Glegoo({ weight: ['400', '700'], subsets: ['latin'] })
const teko = Teko({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })

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

export const metadata: Metadata = {
  title: "Hawoly Ba",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${glegoo.className} `}
      >
        <Header />
        <main className="bg-fixed bg-[url('https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center flex-1 ml-0 lg:ml-[300px]">
          {children}
        </main>
      </body>
    </html>
  );
}
