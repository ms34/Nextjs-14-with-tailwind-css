"use client";

import { AppContext } from "@/app/components/AppContextProvider";
import { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from '@/app/lib/store';
import { getResources } from '@/app/lib/store/slices/mainSlice';

export default function Page() {
  // Initialize useDispatch to dispatch Redux actions
  const dispatch = useDispatch();
  // Select the 'cardDetails' data from the Redux store using useSelector
  const { cardDetails } = useSelector((state) => state.cards);
  
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
