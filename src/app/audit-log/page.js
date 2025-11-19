import Header from "@/components/header/Header";
import AuditLogContent from "@/components/audit-log/AuditLogContent";
import DashboardFooter from "@/components/footer/DashboardFooter";
import React from "react";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};

const AuditLogPage = () => {
  return (
    <>
      <Header />
      <AuditLogContent />
      <DashboardFooter />
    </>
  );
};

export default AuditLogPage;
