"use client";
import {
  ChatBubbleBottomCenterIcon,
  ChatBubbleBottomCenterTextIcon,
  ChevronLeftIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MyBrand } from "./MyHeader";
import { classNames } from "../lib/utils";
import { useState } from "react";

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
  { name: "Dashboard", route: "/dashboard", icon: <HomeIcon className="h-6 w-6" /> },
  { name: "Protected Page", route: "/protected", icon: <HomeIcon className="h-6 w-6" /> },
  {
    name: "Server Action",
    route: "/serverAction",
    icon: <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />,
  },
  { name: "API From Client", route: "/apiFromClient", icon: <HomeIcon className="h-6 w-6" /> },
  { name: "API From Server", route: "/apiFromServer", icon: <HomeIcon className="h-6 w-6" /> },
];
export default function NavMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  return (
    <div
      className={classNames(
        "flex flex-col justify-between bg-slate-950 shadow-lg h-screen pt-4 pr-1 text-white",
        open ? "w-64" : "w-16"
      )}
      style={{transition: 'ease-in-out .2s'}}
    >
      <div className="ml-3">
        <MyBrand onlyLogo={!open} />
      </div>
      <ul className="mt-8">
        {routesList.map(({ name, route, icon }, i) => (
          <Link key={i} href={route}>
            <li
              className={`flex align-middle  capitalize mb-4 border px-4 h-14  items-center overflow-hidden text-nowrap border-gray-700  rounded-md hover:bg-blue-950 ${
                pathname === route ? "bg-blue-950 border-r-2 border-r-blue-400" : ""
              }`}
            >
              <span className="mr-2">{icon}</span>
              {open && <span className="mt-1">{name}</span>}
            </li>
          </Link>
        ))}
      </ul>
      <button onClick={() => setOpen(!open)} className="w-full p-2 justify-center flex bg-slate-900 mt-auto">
        <ChevronLeftIcon className={classNames("w-7 h-7", !open ? "rotate-180" : "")} />
      </button>
    </div>
  );
}
