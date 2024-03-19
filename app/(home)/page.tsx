"use server";

import React from "react";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { initialProfile } from "@/lib/initial-profile";

import Footer from "@/components/ui/footer/footer";
import MainContent from "@/app/(home)/components/MainContent";

const Home = async () => {
  const profile: any = await initialProfile();

  const account: any = await db.user.findFirst({
    where: {
      id: profile.id,
    },
  });

  if (account) {
    return redirect(`/dashboard`);
  }

  return (
    <div className="container">
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;
