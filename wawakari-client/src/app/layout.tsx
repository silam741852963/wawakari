import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DisclaimerContextTypeProvider from "./context/DisclaimerContext";

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
      <DisclaimerContextTypeProvider>
        <body className={inter.className + ""}>{children}</body>
      </DisclaimerContextTypeProvider>
    </html>
  );
}
