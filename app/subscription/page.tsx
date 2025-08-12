import { PricingTable } from "@clerk/nextjs";
import React from "react";

const Subscription = () => {
  return (
    <>
      <div className="container flex items-center justify-center mx-auto mt-5">
        <h1>Subscription Plans</h1>
      </div>
      <div className="container flex items-center justify-center mx-auto mt-10 px-5">
        <PricingTable />
      </div>
    </>
  );
};

export default Subscription;
