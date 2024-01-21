"use client";
import {
  Bars3Icon,
  ChatBubbleLeftEllipsisIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  CircleStackIcon,
  ExclamationCircleIcon,
  HomeIcon,
  PresentationChartBarIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { classNames } from "../lib/utils";
import { CustomScrollbars } from "./CustomScrollbars";
import { MyBrand } from "./ProtectedHeader";

type MenuItemProps = {
  name: string;
  route: string;
  icon?: JSX.Element;
  children?: MenuItemProps[];
};
const routesList: MenuItemProps[] = [
  { name: "Dashboard ddsss", route: "/dashboard", icon: <HomeIcon className="h-6 w-6" /> },
  { name: "Protected Page", route: "/protected", icon: <ExclamationCircleIcon className="h-6 w-6" /> },
  {
    name: "Server Action",
    route: "/serverAction",
    icon: <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />,
  },
  {
    name: "My Projects",
    icon: <UsersIcon className="h-6 w-6" />,
    route: "/projects",
    children: [
      {
        name: "Nextjs Projects",
        icon: <UserCircleIcon className="h-6 w-6" />,
        route: "/nextjs",
        children: [
          {
            name: "Nextjs 13",
            route: "/projects/nextjs/nextjs-13",
            icon: <UserCircleIcon className="h-6 w-6" />,
          },
          {
            name: "Nextjs 14",
            route: "/projects/nextjs/nextjs-14",
            icon: <UserCircleIcon className="h-6 w-6" />,
          },
        ],
      },
      { name: "Django Projects", route: "/projects/django", icon: <UserCircleIcon className="h-6 w-6" /> },
    ],
  },
  { name: "API From Client", route: "/apiFromClient", icon: <PresentationChartBarIcon className="h-6 w-6" /> },
  { name: "API From Server", route: "/apiFromServer", icon: <CircleStackIcon className="h-6 w-6" /> },
  { name: "Users", route: "/users", icon: <UsersIcon className="h-6 w-6" /> },
];
const menuWidthLarge = "w-64";
const menuWidthSmall = "w-16";
const menuItemHeight = "h-12";

export const MenuContext = createContext<{
  open: boolean;
  activeParents: string[];
  setActiveParents?: React.Dispatch<React.SetStateAction<string[]>>;
}>({
  open: false,
  activeParents: [],
});

export default function NavMenu() {
  const [open, setOpen] = useState(true);
  const [activeParents, setActiveParents] = useState<string[]>([]);

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
          "absolute lg:static z-50 flex flex-col justify-between bg-slate-900 shadow-lg h-screen pt-4  text-white",
          open ? `${menuWidthLarge} ml-0` : `w-0 -ml-1 lg:ml-0 lg:${menuWidthSmall} pr-0`
        )}
        style={{ transition: "ease-in-out .2s" }}
      >
        <div className={classNames("mx-3 flex justify-between items-center", open ? "" : "hidden lg:flex")}>
          <MyBrand onlyLogo={!open} />
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className={classNames("h-6 w-6 text-slate-400", open ? "block lg:hidden" : "hidden")} />
          </button>
        </div>
        <hr className="my-4 border-gray-700" />
        <CustomScrollbars autoHeightMax={"calc(100vh - 7rem)"}>
          <MenuContext.Provider value={{ open, activeParents, setActiveParents }}>
            <Menu items={routesList} />
          </MenuContext.Provider>
        </CustomScrollbars>
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

const ListItemContext = createContext<{
  item?: MenuItemProps;
  setExpand?: React.Dispatch<React.SetStateAction<boolean>>;
  expand?: boolean;
  pl: string;
  parents: string[];
  group?: boolean;
  active?: boolean;
}>({ pl: "", parents: [] });


const Menu: React.FC<{
  items: MenuItemProps[];
  parents?: string[];
}> = ({ items, parents = [] }) => {
  const [expand, setExpand] = useState(false);
  const pl = `pl-${parents.length * 4}`;
  const pathname = usePathname();
  const { activeParents } = useContext(MenuContext);

  return (
    <ul>
      {items.map((item, i) => (
        <ListItemContext.Provider
          value={{
            item,
            pl,
            parents,
            group: !!item.children,
            expand,
            setExpand,
            active: pathname === item.route || activeParents?.includes(item.route),
          }}
        >
          <ListItem key={i} />
        </ListItemContext.Provider>
      ))}
    </ul>
  );
};

const ListItem: React.FC = () => {
  const { setActiveParents } = useContext(MenuContext);
  const { item, parents, expand, setExpand } = useContext(ListItemContext);
  const { route, children } = item!;
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === route) {
      if (setActiveParents) {
        setActiveParents(parents);
      }
    }
  }, [pathname]);

  return (
    <>
      {children ? (
        <div>
          <div onClick={() => setExpand && setExpand(!expand)}>
            <MenuItem />
          </div>

          <div
            className={classNames(
              "bg-black overflow-hidden transition-max-h py-0",
              expand ? " max-h-screen  duration-500 ease-in-out" : "max-h-0 duration-300 ease-custom py-0"
            )}
          >
            <Menu items={children} parents={[...parents, route]} />
          </div>
        </div>
      ) : (
        <MenuItem />
      )}
    </>
  );
};

const MenuItem: React.FC = () => {
  const { open } = useContext(MenuContext);
  const { pl, expand, item, active, group } = useContext(ListItemContext);

  const { name, route, icon } = item!;

  return (
    <Link href={group ? "" : route}>
      <li
        className={classNames(
          "flex items-center justify-between  text-sm text-gray-400  capitalize   py-2  text-nowrap ",
          " border-gray-800  rounded-sm hover:bg-blue-950 hover:bg-opacity-50 ",
          active ? (group ? "text-blue-500" : "bg-blue-950 border-r-2 border-r-blue-40 text-blue-500") : "",
          open ? menuItemHeight + " my-1" : "border-y"
        )}
      >
        <div
          className={classNames(
            "flex h-full items-center align-middle overflow-hidden",
            open ? `mr-2 ${pl}` : ""
          )}
        >
          <div
            className={classNames(
              "text-center flex flex-col justify-center items-center",
              open ? "" : `${menuWidthSmall} py-2 px-1`
            )}
          >
            <span className="px-3">{icon}</span>
            {!open && (
              <span className="mt-1 text-wrap " style={{ fontSize: 9 }}>
                {name}
              </span>
            )}
          </div>
          {open && <span className="mt-1">{name}</span>}
        </div>
        {group &&
          (expand ? (
            <ChevronUpIcon className={classNames("h-4 w-4 mr-2")} />
          ) : (
            <ChevronDownIcon className={classNames("h-4 w-4 mr-2")} />
          ))}
      </li>
    </Link>
  );
};
