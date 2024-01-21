"use client";

import { useEffect, useState } from "react";
import { Integration } from "./IntegrationsList";

export default function IntegrationsListClientComponent() {
  const [integrations, setIntegrations] = useState<Integration[]>();
  useEffect(() => {
    fetch("https://api.vistar.cloud/api/v1/integrations/integration-list")
      .then((res) => res.json())
      .then((data) => setIntegrations(data));
  }, []);
  return (
    <div>
       <ul className="text-black">
        {integrations?.map((r, i) => (
          <li className="mb-5" key={i}>
            {r?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
