import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import { SessionProvider } from "./components/SessionProvider";
import "./globals.css";
import NavMenu from "./components/NavMenu";
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
        {/* <MyHeader /> */}
        {/* <Header /> */}
        <SessionProvider session={session}>
          <main className="flex w-full px-12 ">
            <NavMenu />
            <div className="w-full">{children}</div>
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
