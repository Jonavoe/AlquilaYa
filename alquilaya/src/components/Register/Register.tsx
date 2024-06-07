"use client";
import React, { useState } from "react";
import Logo from "@/assets/image/Logo.png";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

type Props = {};

export default function Register({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/users",
        data
      );
      console.log("Registration successful:", response);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario creado con exito",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          container: "swal-container-black",
          popup: "swal-popup-black",
          title: "swal-title-white",
        },
      }).then(() => {
        router.replace("/Login");
      });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body my-10">
        <div className="w-full flex justify-center items-center mb-8">
          <div className="w-36">
            <Image src={Logo} alt="Logotipo de la empresa" />
          </div>
        </div>
        <h2 className="text-xl font-medium mb-4">Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label htmlFor="email" className="text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ingrese su dirección de correo electrónico"
              className="input input-xs w-full max-w-xs"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control mb-4">
            <label htmlFor="password" className="text-sm mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Cree una contraseña segura"
              className="input input-xs w-full max-w-xs"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="card-actions justify-end">
            <button
              type="submit"
              className="btn btn-sm bg-primario btn-primary w-full"
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
