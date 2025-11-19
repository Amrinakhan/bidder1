import Header from "@/components/header/Header";
import ProfileContent from "@/components/profile/ProfileContent";
import DashboardFooter from "@/components/footer/DashboardFooter";
import React from "react";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};

const ProfilePage = () => {
  return (
    <>
      <Header />
      <ProfileContent />
      <DashboardFooter />
    </>
  );
};

export default ProfilePage;
