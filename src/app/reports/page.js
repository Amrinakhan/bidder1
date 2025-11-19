import Header from "@/components/header/Header";
import ReportsContent from "@/components/reports/ReportsContent";
import DashboardFooter from "@/components/footer/DashboardFooter";
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
      <DashboardFooter />
    </>
  );
};

export default ReportsPage;
