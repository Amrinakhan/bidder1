"use client";
import Header from "@/components/header/Header";
import DashboardFooter from "@/components/footer/DashboardFooter";
import BidderProfile from "@/components/bidder-profile/BidderProfile";

export default function BidderProfilePage() {
  return (
    <>
      <Header />
      <BidderProfile />
      <DashboardFooter />
    </>
  );
}
