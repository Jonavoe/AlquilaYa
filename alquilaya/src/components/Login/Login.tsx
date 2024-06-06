"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/image/Logo.png";
import Link from "next/link";
import Swal from "sweetalert2";
import { useGetUserByEmailQuery, } from '@/redux/services/userApi';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/features/UsersSlice";
import { RootState } from "@reduxjs/toolkit/query";
import { useRouter } from 'next/navigation';

type Props = {};

export default function Login({ }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { data: userEmailData } = useGetUserByEmailQuery(email || '');
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (userEmailData) {
      dispatch(setUser(userEmailData));
    }
  }, [userEmailData, dispatch]);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (user.user.email === email && user.user.password === password) {
        Swal.fire({
          position: "center",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            container: "swal-container-black",
            popup: "swal-popup-black",
            title: "swal-title-white",
          },
        }).then(() => {
          router.replace("/")
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Usuario incorrecto",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            container: "swal-container-black",
            popup: "swal-popup-black",
            title: "swal-title-white",
          },
        })
      }
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

        <h2 className="text-xl font-medium mb-4">¡Bienvenido de Nuevo!</h2>

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
