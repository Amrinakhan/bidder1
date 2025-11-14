"use client";
import Header from "@/components/header/Header";
import DashboardFooter from "@/components/footer/DashboardFooter";
import PropertyDetailsContent from "@/components/property/PropertyDetailsContent";

export default function PropertyDetailsPage() {
  return (
    <>
      <Header />
      <PropertyDetailsContent />
      <DashboardFooter />
    </>
  );
}
