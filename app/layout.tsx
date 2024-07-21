import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConditionalLayout } from "@/components/layout/conditional-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shader",
  description: "Shader is your favorite stock manager",
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} size-full flex flex-col bg-zinc-800`}>
        <ConditionalLayout />
        <main className="flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
