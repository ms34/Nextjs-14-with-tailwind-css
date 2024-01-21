import IntegrationsList from "@/app/components/IntegrationsList";
import Spin from "@/app/components/Spin";
import { center } from "@/app/lib/styles";
import { classNames } from "@/app/lib/utils";
import React, { Suspense } from "react";

const Users = () => {
  // return <Spin size="default" />;
  return  <section>
  <Suspense fallback={<p>Loading feed...</p>}>
    <IntegrationsList />
  </Suspense>
  <Suspense fallback={<p>Loading weather...</p>}>
    <IntegrationsList />
  </Suspense>
</section>
};

export default Users;
