"use client";
import Header from "@/components/header/Header";
import DashboardFooter from "@/components/footer/DashboardFooter";
import NotificationsContent from "@/components/notifications/NotificationsContent";

export default function NotificationsPage() {
  return (
    <>
      <Header />
      <NotificationsContent />
      <DashboardFooter />
    </>
  );
}
