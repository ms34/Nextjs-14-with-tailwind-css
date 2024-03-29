import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import { SessionProvider } from "./components/SessionProvider";
import "./globals.css";
import AppContextProvider from "./components/AppContextProvider";
import { StoreProvider } from "./lib/store/StoreProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
         <StoreProvider>
           <AppContextProvider>{children}</AppContextProvider>
         </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
