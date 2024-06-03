import React from 'react'
import Logo from '../../assets/image/Logo.png'
import Image from 'next/image'

type Props = {}

export default function Header({ }: Props) {
    return (
        <div className='bg-gray-800 w-full h-16 flex justify-center'>
            <div className='h-full w-3/4 flex items-center justify-between'>
                <div className=' flex gap-2 justify-center items-center'>
                    <Image src={Logo} alt='Logo' className='w-10 h-10' />
                    <label htmlFor=""> AlquilaYa</label>
                </div>
                <button className="btn btn-neutral btn-sm">Login</button>

            </div>

        </div>
    )
}