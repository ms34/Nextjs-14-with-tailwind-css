import { FireIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Avatar } from "./Avatar";

export const ProtectedHeader = () => {
  return (
    <nav className="bg-stone-200 shadow-md  py-4 h-14 flex items-center justify-between px-1 md:px-6">
      <div className="sm:block lg:hidden" />
      <h1 className="text-lg font-bold">Page Title</h1>
      <Avatar />
    </nav>
  );
};

export const MyBrand: React.FC<{ onlyLogo?: boolean }> = ({ onlyLogo }) => {
  return (
    <Link href="#" className="flex items-center h-10 text-2xl font-semibold text-gray-900 dark:text-amber-600">
      <FireIcon className="h-8 w-8" />
      {!onlyLogo && <span className="text-nowrap ml-2">Fire Apps</span>}
    </Link>
  );
};
