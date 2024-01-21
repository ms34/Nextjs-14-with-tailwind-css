"use client";

import { usePathname } from "next/navigation";

export default function PageTitle() {
  const pathname = usePathname();

  return <h1 className="text-lg font-bold capitalize text-nowrap">{pathname.replace('/', "").replaceAll('/', ' -> ')}</h1>;
}
