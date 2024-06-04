import Register from "@/components/Register/Register";
import React from "react";

type Props = {};

export default function RegisterPage({}: Props) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Register />
    </div>
  );
}
