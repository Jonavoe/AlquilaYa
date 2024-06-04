import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/image/Logo.png';
import Link from 'next/link';

type Props = {};

export default function Register({ }: Props) {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body my-10">
                    <div className='w-full flex justify-center items-center mb-8'>
                        <div className='w-36'>
                            <Image src={Logo} alt='Logotipo de la empresa' />
                        </div>
                    </div>
                    <h2 className='text-xl font-medium mb-4'>Registrarse</h2>
                    <form>
                        <div className="form-control mb-4">
                            <label htmlFor="email" className='text-sm mb-1'>Email</label>
                            <input type="email" id="email" placeholder="Ingrese su dirección de correo electrónico" className="input input-xs w-full max-w-xs" required />
                        </div>
                        <div className="form-control mb-4">
                            <label htmlFor="password" className='text-sm'>Contraseña</label>
                            <input type="password" id="password" placeholder="Cree una contraseña segura" className="input input-xs w-full max-w-xs" required />
                        </div>
                        <div className="card-actions justify-end">
                            <button type="submit" className="btn btn-sm bg-primario btn-primary w-full">Crear cuenta</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
