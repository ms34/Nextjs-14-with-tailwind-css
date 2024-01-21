import { FireIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { navHeight } from "../lib/styles";
import { classNames } from "../lib/utils";
import { Avatar } from "./Avatar";
import PageTitle from "./PageTitle";

export const ProtectedHeader = () => {
  return (
    <nav
      className={classNames(
        "bg-stone-200 shadow-md  py-4 flex items-center justify-between px-1 md:px-6",
        navHeight
      )}
    >
      <div className="sm:block lg:hidden" />
      {/* PageTitle is client component */}
      <PageTitle />
      <Avatar />
    </nav>
  );
};

export const MyBrand: React.FC<{ onlyLogo?: boolean }> = ({ onlyLogo }) => {
  return (
    <Link
      href="#"
      className={classNames(
        "flex items-center h-10 text-2xl font-semibold text-gray-900 dark:text-amber-600",
        onlyLogo ? "mx-auto" : ""
      )}
    >
      <FireIcon className="h-8 w-8" />
      {!onlyLogo && <span className="text-nowrap ml-2">Fire Apps</span>}
    </Link>
  );
};
