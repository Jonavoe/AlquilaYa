import Image from "next/image";
import React from "react";
import Logo from "@/assets/image/Logo.png";

interface Props {
  user: { email: string } | null;
}

const rents = [
  {
    pais: "Argentina",
    provincia: "Entre rios",
    ciudad: "Conepcion del Uruguay",
    direccion: "Rivadavia 610",
    tipoViviendia: "departamento",
    precio: "170000",
    estadoInmueble: "excelente",
    titulo:
      " departamento en zona segura, vecinos tranquilos, en excelente estado",
    clasificacion: "5",
    idUsuarioPropietario: "1234",
  },
  {
    pais: "argentina",
    provincia: "Entre rios",
    ciudad: "Conepcion del Uruguay",
    direccion: "Rivadavia 610",
    tipoViviendia: "departamento",
    precio: "170000",
    estadoInmueble: "excelente",
    titulo:
      " departamento en zona segura, vecinos tranquilos, en excelente estado",
    clasificacion: "5",
    idUsuarioPropietario: "1234",
  },
  {
    pais: "argentina",
    provincia: "Entre rios",
    ciudad: "Conepcion del Uruguay",
    direccion: "Rivadavia 610",
    tipoViviendia: "departamento",
    precio: "170000",
    estadoInmueble: "excelente",
    titulo:
      " departamento en zona segura, vecinos tranquilos, en excelente estado",
    clasificacion: "5",
    idUsuarioPropietario: "1234",
  },
];

export default function Rents({ user }: Props) {
  return (
    <div className="pt-10 w-screen h-full flex flex-col gap-5 justify-center items-center">
      {rents.map((rent, i) => {
        return (
          <div
            key={i}
            className="flex gap-5 w-8/12 h-full items-start justify-between bg-base-200 p-10 rounded-xl"
          >
            <div className="flex flex-col border-2 gap-5 h-full">
              <div className="flex-col h-full flex gap-2">
                <h2 className="text-2xl font-bold">{rent.titulo}</h2>
                <p className="text-xl">
                  {rent.pais}, {rent.provincia}, {rent.ciudad}
                </p>
                <p className="text-xl ">{rent.direccion}</p>
                <p className="text-xl">{rent.tipoViviendia}</p>
                <p className="text-xl">{rent.estadoInmueble}</p>
              </div>
              <button className="w-full btn btn-default">
                Mas Informacion
              </button>
            </div>
            <Image
              src={Logo}
              alt="image"
              width={0}
              height={0}
              className=" w-96 h-96"
            />
          </div>
        );
      })}
    </div>
  );
}
