"use client";

import { AppContext } from "@/app/components/AppContextProvider";
import { useContext, useEffect, useState } from "react";

export default function Page() {
  const [name, setName] = useState<string>();
  const { darkMode, setDarkMode } = useContext(AppContext)!;
  console.log({ darkMode });
  useEffect(() => {
    fetch("/api/whoAmI")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <div>
      <div>
        API Route From <b>Client</b>
      </div>
      <div>Name: {name}</div>
      <button className="border border-amber-500" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
