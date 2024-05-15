import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./globals.css";
import ContextProvider from "./providers/ContextProvider";
import GlobalStyleProvider from "./providers/GlobalStyleProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StrefaskillaHelper",
  description: "Application to summarize the work of admins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <GlobalStyleProvider>
            <Sidebar />
            <div className="w-full">
              <Header />
              {children}
            </div>
          </GlobalStyleProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
