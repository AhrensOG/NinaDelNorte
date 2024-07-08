"use client";
import Community from "@/components/community/Community";
import Navbar from "@/components/navbar/Navbar";
import SocialNetworkButtons from "@/components/socialButtons/SocialNetworkButtons";
import React from "react";

const CommunityPage = () => {
  return (
    <main>
      <Navbar />
      <Community />
      <SocialNetworkButtons />
    </main>
  );
};

export default CommunityPage;
