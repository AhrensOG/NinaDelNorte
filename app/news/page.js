"use client";
import Navbar from "@/components/navbar/Navbar";
import News from "@/components/news/News";
import SocialNetworkButtons from "@/components/socialButtons/SocialNetworkButtons";
import React from "react";
import { Toaster } from "sonner";

const NewsPage = () => {
  return (
    <main>
      <Toaster richColors={true} duration={2000} />
      <Navbar />
      <News />
      <SocialNetworkButtons />
    </main>
  );
};

export default NewsPage;
