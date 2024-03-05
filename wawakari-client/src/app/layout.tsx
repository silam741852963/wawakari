import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wawakari",
  description: "Stylish dependency parser for Japanese",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " w-screen h-screen flex justify-center items-center overflow-hidden"
        }
      >
        {children}
      </body>
    </html>
  );
}
