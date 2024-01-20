import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default async function Home() {
  const session  = await getServerSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session?.user?.name ? <div>{session?.user?.name}</div> : <div>Not logged in</div>}
    </main>
  );
}
