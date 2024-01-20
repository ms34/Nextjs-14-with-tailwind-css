"use client";

import { useState } from "react";

export default function WhoAmIButton({ whoAmIAction }: { whoAmIAction: () => Promise<string> }) {
  const [name, setName] = useState<string>();
  return (
    <div>
      <button
        className="border bg-slate-600 text-white py-1 px-4 rounded-md hover:bg-slate-500"
        onClick={async () => setName(await whoAmIAction())}
      >
        Who Am I ?
      </button>
      {name && <div>You are {name}</div>}
    </div>
  );
}
