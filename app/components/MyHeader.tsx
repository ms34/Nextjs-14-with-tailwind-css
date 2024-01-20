import Image from "next/image";
import Link from "next/link";
import { Avatar } from "./Avatar";
import { FireIcon } from "@heroicons/react/24/outline";

export const MyHeader = () => {
  return (
    <nav className="bg-stone-200 shadow-md  p-4 h-14 flex items-center justify-between px-6">
      <h1 className="text-lg font-bold">Page Title</h1>
      <Avatar />
    </nav>
  );
};

export const MyBrand:React.FC<{onlyLogo?: boolean}> = ({onlyLogo}) => {
  return (
    <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-amber-600">
      <FireIcon className="h-8 w-8 mr-2" />
      {!onlyLogo && <span>Fire Apps</span>}
    </Link>
  );
};
