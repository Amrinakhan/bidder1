"use client";
import Header from "@/components/header/Header";
import DashboardFooter from "@/components/footer/DashboardFooter";
import MessagingContent from "@/components/messaging/MessagingContent";

export default function MessagingPage() {
  return (
    <>
      <Header />
      <MessagingContent />
      <DashboardFooter />
    </>
  );
}
