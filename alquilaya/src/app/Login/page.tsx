import Image from "next/image";
import React from "react";
import Logo from "../../assets/image/Logo.png";
import Link from "next/link";
import Login from "@/components/Login/Login";

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Login />
    </div>
  );
}
