"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/image/Logo.png";
import Link from "next/link";

type Props = {};

export default function Login({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body my-10">
        <div className="w-full flex justify-center items-center mb-8">
          <div className="w-36">
            <Image src={Logo} alt="Logotipo de la empresa" />
          </div>
        </div>

        <h2 className="text-xl font-medium mb-4">¡Bienvenido de Nuevo!</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label htmlFor="email" className="text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ingrese su correo electrónico"
              className="input input-xs w-full max-w-xs"
              required
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
              placeholder="Ingrese su contraseña"
              className="input input-xs w-full max-w-xs"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="card-actions justify-end">
            <button
              type="submit"
              className="btn btn-sm bg-primario btn-primary w-full"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        <div className="mt-4 text-sm">
          ¿Aún no tiene una cuenta?{" "}
          <Link className="text-text-primario" href={"/Register"}>
            Cree una ahora
          </Link>
        </div>
      </div>
    </div>
  );
}
