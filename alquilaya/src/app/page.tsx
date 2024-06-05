"use client";
import Header from '@/components/Header/Header';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import Rents from '@/components/Rents/Rents';


function Home() {

  const user = useSelector((state: RootState) => state.user);

  console.log(user);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-Poppins">
      <Header user={user} />
      <Rents user={user} />
    </main>
  );
}

export default Home;
