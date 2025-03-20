import type { Metadata } from "next";
import { Dela_Gothic_One } from "next/font/google";
import "./globals.css";

const delaGothicOne = Dela_Gothic_One({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Controllers",
  description: "Landing page for controller shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={delaGothicOne.className}>{children}</body>
    </html>
  );
}
