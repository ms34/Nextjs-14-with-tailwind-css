"use client";

import { ReactNode, createContext, useState } from "react";

export const AppContext = createContext<{
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
} | undefined>(undefined);

export default function AppContextProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  return <AppContext.Provider value={{darkMode, setDarkMode}}>{children}</AppContext.Provider>;
}
