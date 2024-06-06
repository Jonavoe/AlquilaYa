"use client";
import Header from "@/components/Header/Header";
import Rents from "@/components/Rents/Rents";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

function Home() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <main className="flex flex-col items-center justify-between">
      <Header user={user} />
      <Rents user={user} />
    </main>
  );
}

export default Home;
