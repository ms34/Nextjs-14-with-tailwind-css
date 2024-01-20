"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session.user?.name}
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not Signed in <br />
      <button onClick={() => signIn()}>Sign in</button>{" "}
    </>
  );
}

const routesList = [
  { name: "Home", route: "/" },
  { name: "Login", route: "/login" },
  { name: "Register", route: "/register" },
  { name: "Protected Page", route: "/protected" },
  { name: "Server Action", route: "/serverAction" },
  { name: "API From Client", route: "/apiFromClient" },
  { name: "API From Server", route: "/apiFromServer" },
];
const NavMenu = () => {
  return (
    <div className="w-60 p-4">
      <AuthButton />
      <hr className="my-4" />
      <ul>
        {routesList.map(({name, route}, i) => (
          <Link key={i} href={route}>
            <li className="capitalize mb-4 border px-4 py-2 border-amber-300">{name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
