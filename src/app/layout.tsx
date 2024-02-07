import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aaron K. Altman",
  description: "Big Boss Enterprises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="cupcake" lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col max-w-6xl bg-base-200 mx-auto px-4 py-6">
          {children}
        </div>
      </body>
    </html>
  );
}
