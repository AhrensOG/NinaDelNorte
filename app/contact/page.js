"use client";
import Contact from "@/components/contact/Contact";
import Navbar from "@/components/navbar/Navbar";
import SocialNetworkButtons from "@/components/socialButtons/SocialNetworkButtons";
import React from "react";

const ContactPage = () => {
  return (
    <main>
      <Navbar />
      <Contact />
      <SocialNetworkButtons />
    </main>
  );
};

export default ContactPage;
