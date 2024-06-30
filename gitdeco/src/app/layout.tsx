import { Metadata } from "next";
import "./globals.css";
import Header from "./_components/common/Header";
import Sidebar from "./_components/common/Sidebar";

export const metadata: Metadata = {
  title: "GitDeco",
  description: "GitHub Readme.md Editor Web Services",
  icons: {
    icon: "/gitdeco.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/gitdeco.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
