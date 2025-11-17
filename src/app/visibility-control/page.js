"use client";
import Header from "@/components/header/Header";
import DashboardFooter from "@/components/footer/DashboardFooter";
import VisibilityControlContent from "@/components/visibility-control/VisibilityControlContent";

export default function VisibilityControlPage() {
  return (
    <>
      <Header />
      <VisibilityControlContent />
      <DashboardFooter />
    </>
  );
}
