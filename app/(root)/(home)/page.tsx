"use server";

import React from "react";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";

import Footer from "@/components/ui/footer/footer";
import MainContent from "@/app/(root)/(home)/components/MainContent";

const Home = async () => {
  const profile = await initialProfile();

  const account = await db.user.findFirst({
    where: {
      id: profile.id,
    },
  });

  return (
    <div className="container">
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;
