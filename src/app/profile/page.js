import Header from "@/components/header/Header";
import ProfileContent from "@/components/profile/ProfileContent";
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
    </>
  );
};

export default ProfilePage;
