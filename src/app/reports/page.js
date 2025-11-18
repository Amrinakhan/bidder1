import Header from "@/components/header/Header";
import ReportsContent from "@/components/reports/ReportsContent";
import React from "react";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};

const ReportsPage = () => {
  return (
    <>
      <Header />
      <ReportsContent />
    </>
  );
};

export default ReportsPage;
