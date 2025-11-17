"use client";
import Header from "@/components/header/Header";
import DashboardFooter from "@/components/footer/DashboardFooter";
import BidManagementContent from "@/components/bid-management/BidManagementContent";

export default function BidManagementPage() {
  return (
    <>
      <Header />
      <BidManagementContent />
      <DashboardFooter />
    </>
  );
}
