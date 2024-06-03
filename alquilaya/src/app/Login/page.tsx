import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/image/Logo.png'

type Props = {}

export default function Login({ }: Props) {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div>
                        <Image src={Logo} />
                    </div>

                    <label htmlFor="" className='text-sm'>Email ID</label>
                    <input type="text" placeholder="Igrese su Email" className="input w-full max-w-xs" />
                    <label htmlFor="">Contraseña</label>
                    <input type="text" placeholder="Ingrese si Contraseña" className="input w-full max-w-xs" />
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}