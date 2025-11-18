import Header from "@/components/header/Header";
import SubscriptionContent from "@/components/subscription/SubscriptionContent";
import React from "react";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};

const SubscriptionPage = () => {
  return (
    <>
      <Header />
      <SubscriptionContent />
    </>
  );
};

export default SubscriptionPage;
