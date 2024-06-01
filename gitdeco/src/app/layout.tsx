import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/common/Header";
import Sidebar from "./_components/common/Sidebar";

export const metadata: Metadata = {
  title: "GitDeco",
  description: "GitHub Readme.md Editor Web Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
