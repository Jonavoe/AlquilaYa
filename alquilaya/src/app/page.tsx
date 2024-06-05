"use client";
import { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import Rents from '@/components/Rents/Rents';

interface User {
  email: string;
}

function Home() {
  const [user, setUser] = useState<User | null>(null);
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  useEffect(() => {
    const fetchData = async () => {
      if (email) {
        try {
          const response = await axios.get<User>(`http://localhost:3001/api/users/email?email=${email}`);
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    fetchData();
  }, [email]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-Poppins">
      <Header user={user} />
      <Rents user={user} />
    </main>
  );
}

export default Home;
