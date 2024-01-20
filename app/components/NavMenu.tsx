"use client";
import {
  Bars3Icon,
  ChatBubbleLeftEllipsisIcon,
  ChevronLeftIcon,
  CircleStackIcon,
  ExclamationCircleIcon,
  HomeIcon,
  PresentationChartBarIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { classNames } from "../lib/utils";
import { MyBrand } from "./ProtectedHeader";

const routesList = [
  { name: "Dashboard", route: "/dashboard", icon: <HomeIcon className="h-6 w-6" /> },
  { name: "Protected Page", route: "/protected", icon: <ExclamationCircleIcon className="h-6 w-6" /> },
  {
    name: "Server Action",
    route: "/serverAction",
    icon: <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />,
  },
  { name: "API From Client", route: "/apiFromClient", icon: <PresentationChartBarIcon className="h-6 w-6" /> },
  { name: "API From Server", route: "/apiFromServer", icon: <CircleStackIcon className="h-6 w-6" /> },
];

export default function NavMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(window.innerWidth >= 1024);  
  return (
    <>
    {/* backdrop screen */}
      <div
        onClick={() => setOpen(false)}
        className={classNames(
          "bg-black opacity-50 absolute w-full  h-screen z-40",
          open ? "block lg:hidden" : "hidden"
        )}
      />
      {!open && (
        <button className="block lg:hidden text-black fixed left-4 top-4" onClick={() => setOpen(true)}>
          <Bars3Icon className="h-8 w-8" />
        </button>
      )}
      
      <div
        className={classNames(
          "absolute lg:static z-50 flex flex-col justify-between bg-slate-950 shadow-lg h-screen pt-4 pr-1 text-white",
          open ? "w-64" : "w-0 lg:w-16"
        )}
        style={{ transition: "ease-in-out .2s" }}
      >
        <div className={classNames("mx-3 flex justify-between items-center", open ? "" : "hidden lg:flex")}>
          <MyBrand onlyLogo={!open} />
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className={classNames("h-6 w-6 text-slate-400", open ? "block" : "hidden")} />
          </button>
        </div>
        <ul className="mt-8">
          {routesList.map(({ name, route, icon }, i) => (
            <Link key={i} href={route}>
              <li
                className={classNames(
                  "flex align-middle  capitalize mb-4 border  h-14  items-center overflow-hidden text-nowrap border-gray-700  rounded-md hover:bg-slate-900",
                  pathname === route ? "bg-blue-950 border-r-2 border-r-blue-400" : ""
                )}
              >
                <span className="ml-4 ">{icon}</span>
                {open && <span className="mt-1 mx-2">{name}</span>}
              </li>
            </Link>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="w-full py-2 justify-center flex bg-slate-900 mt-auto"
        >
          <ChevronLeftIcon className={classNames("w-7 h-7", !open ? "rotate-180" : "")} />
        </button>
      </div>
    </>
  );
}
