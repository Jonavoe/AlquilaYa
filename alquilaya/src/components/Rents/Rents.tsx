import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/image/Logo.png"

interface Props {
    user: { email: string } | null
}


export default function Rents({ user }: Props) {
    return (
        <div className="bg-base-200 pt-10 w-screen h-screen flex justify-center items-start">
            <div className="flex gap-5 items-center justify-center">
                <div className='flex-col flex gap-2'>
                    <h1 className="text-5xl font-bold">Titulo</h1>
                    <p className=" ">clasificacion</p>
                    <p className="">Descripcion</p>
                    <p className="">direcion</p>
                    <p className="">precio</p>
                    <button className="btn btn-primary">Mas Informacion</button>
                </div>
                <Image src={Logo} alt='image' width={0} height={0} className=" w-64 h-64" />
            </div>
        </div>
    )
}