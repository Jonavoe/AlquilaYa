import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/providers";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] }); // Or ["latin-ext"]

export const metadata: Metadata = {
  title: "AlquilaYa",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
