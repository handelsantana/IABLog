import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Layout from "@/components/Layout";

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const bodyFont = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | IABlog",
    default: "IABlog | Notícias sobre Inteligência Artificial",
  },
  description:
    "Portal de notícias sobre IA, com análises, produtos, pesquisa e tendências do ecossistema.",
  metadataBase: new URL("https://iablog.example.com"),
  openGraph: {
    title: "IABlog",
    description:
      "Notícias, análises e tendências sobre inteligência artificial, pesquisa e produtos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
