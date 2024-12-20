import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientSetup } from "@/components/ClientSetup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TheWall",
  description: "TheWall is a place you can write to.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSetup />
        {children}
      </body>
    </html>
  );
}
