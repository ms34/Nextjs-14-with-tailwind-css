import React from "react";
// @ts-ignore
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface AvatarProps {
  src: string;
  alt: string;
  name: string;
  role: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, name, role }) => {
  return (
    <button>
        <div className="flex items-end">
          <div className="w-9 h-9 bg-gray-500 rounded-full overflow-hidden">
            <img className="object-cover w-full h-full" src={src} alt={alt} />
          </div>
          <div className="ml-4">
            <p className="font-bold text-base">{name}</p>
            <p className="text-gray-500 text-xs">{role}</p>
          </div>
          <ChevronDownIcon className="h-5 w-5 ml-2" />
        </div>
    </button>
  );
};
