import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { defaultLocale } from "@/i18n/config";
import { TranslationsProvider } from "@/lib/i18n/context";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SELINGO - AI驱动的儿童社会情感学习平台",
  description: "SELINGO是一家专注于儿童社会情感学习(SEL)的科技公司，通过AI技术助力3-16岁儿童健康成长。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={defaultLocale}>
      <body className={inter.className}>
        <TranslationsProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <AnimatePresence mode="wait">
                {children}
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        </TranslationsProvider>
      </body>
    </html>
  );
}
