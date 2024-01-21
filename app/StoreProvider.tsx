"use client";
import { initializeCount } from "@/app/lib/store/features/counter/counterSlice";
import { AppStore, makeStore } from "@/app/lib/store/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({ count, children }: { count: number; children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(initializeCount(count));
    
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
