import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import Providers from "@/lib/reactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Shopify Shop",
  description: "Welcome to My Shopify Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4`}
      >
        <Providers>
          <div className="flex-grow">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
