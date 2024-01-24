// Import necessary dependencies and styles
"use client";
import React, { Suspense, useEffect } from "react";

// Import Redux-related functions and actions
import { useSelector, useDispatch } from "@/app/lib/store";
import { getResources } from "@/app/lib/store/slices/mainSlice";
import { useGetIntegrationsIntegrationListQuery } from "@/app/lib/store/auto-generated/vistarEndpoints";
import { Integration } from "@/app/components/IntegrationsList";

export default function Page() {
  // Initialize useDispatch to dispatch Redux actions
  const dispatch = useDispatch();

  const { data, isFetching } = useGetIntegrationsIntegrationListQuery();
  // Select the 'cardDetails' data from the Redux store using useSelector
  const { cardDetails } = useSelector((state) => state.cards);

  // useEffect hook to dispatch 'getResources' action when the component mounts
  useEffect(() => {
    dispatch(getResources());
  }, []);

  // Handler function for clicking the 'Find something to do' button
  const handleGetWorkClick = () => {
    // Dispatch the 'getResources' action to fetch data
    dispatch(getResources());
  };

  // JSX for rendering the button
  const renderButton = (
    <>
      <h1
        style={{
          fontFamily: "Roboto, sans-serif",
          color: "#000000",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Bored?
      </h1>
      <button className="bg-primary-500 p-2 rounded text-white hover:opacity-80" onClick={handleGetWorkClick}>
        Find something to do
      </button>
    </>
  );

  // JSX for rendering the card with fetched data
  const renderCard = (
    <div>
      <div>
        <p>{cardDetails.activity}</p>

        <p>Type: {cardDetails.type}</p>

        {/* Link to external resource */}
        <a href={cardDetails.link} target="_blank" rel="noopener" color="primary">
          How to do...
        </a>
      </div>
    </div>
  );

  // JSX for the main component
  return (
    <main>
      {/* Render the button */}
      {renderButton}

      <div style={{ marginTop: "30px" }}>
        {/* Render the card */}
        {renderCard}
      </div>

      <div className="border-4 w-fit border-amber-500 p-6 rounded">
        <Suspense fallback={<b>Getting integrations list...</b>}>
          <ul className="text-black">
            {!!data && (data as Integration[])?.map((r, i) => (
              <li className="mb-5" key={i}>
                {r?.name}
              </li>
            ))}
          </ul>
        </Suspense>
      </div>
    </main>
  );
}
