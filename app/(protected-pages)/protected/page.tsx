import IntegrationsList from "@/app/components/IntegrationsList";
import IntegrationsListClientComponent from "@/app/components/IntegrationsListClientComponent";
import Spin from "@/app/components/Spin";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div>
      <h1>Protected page</h1>
      <br />

      <div className="flex justify-evenly">
        {/* suspense for client components for in-app routing not first loading */}
        <div>
          <h1 className="text-blue-500 text-4xl font-bold">Client</h1>
          <Suspense fallback={<h1 className="text-lg font-bold">Client component loading.....</h1>}>
            <IntegrationsListClientComponent />
          </Suspense>
        </div>
        {/* suspense work for server components when reload or at first render*/}
        <div>
          <h1 className="text-amber-500 text-4xl font-bold">Server</h1>
          <Suspense fallback={<h2 className="text-lg font-bold">Server Component loading.....</h2>}>
            <IntegrationsList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
