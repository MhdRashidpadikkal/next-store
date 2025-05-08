"use client"

import { useAppDispatch } from '@/store/hook'
import { login } from '@/store/slices/authSlice'
import { LoginData } from '@/types/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Login() {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const [credentials, setCredentials] = useState<LoginData>({
        identifier: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCredentials((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(login(credentials)).unwrap()
            router.push("/")
        } catch (error) {
            console.error("Login failed:", error);
        }
    }
    return (
        <div className='mt-25 mb-10 flex px-20 justify-center items-center  '>

            <div className='hidden sm:flex lg:w-1/3 h-[500px] '>
                <Image
                    src={"/images/auth/register.png"}
                    alt="register"
                    width={450}
                    height={350}
                    className='w-full h-full object-cover rounded-l-md'
                />
            </div>

            <div className='lg:w-1/3 bg-white flex flex-col justify-center items-center h-[500px] rounded-r-md'>
                <h2 className="text-2xl font-bold">Welcome back to <span className='text-[#a88c6a]'>Next-Store</span> </h2>
                <p className="text-sm px-3 ">Log in to Continue Shopping Your Dream Space</p>
                <form onSubmit={handleSubmit}
                    className='flex flex-col gap-3 w-full px-14 mt-5  '
                >
                    <input name='identifier' onChange={handleChange} type="text" placeholder='username or email' autoComplete='off' className='border border-[#a88c6a] px-2 rounded-md py-1 focus:outline-none focus:border-[#d4af7f]  focus:ring-1 focus:ring-[#d4af7f] ' />
                    <input name='password' onChange={handleChange} type="password" placeholder='password' autoComplete='off' className='border border-[#a88c6a] px-2 rounded-md py-1 focus:outline-none focus:border-[#d4af7f]  focus:ring-1 focus:ring-[#d4af7f] ' />
                    <button type="submit"
                        className='bg-black text-white rounded-2xl cursor-pointer mt-2 py-1'
                    >Login</button>
                </form>

                <p className='mt-5'>Don’t have an account? <Link href="/register" className='text-[#a88c6a] hover:text-[#c4945a] '>Register</Link></p>
            </div>
        </div>
    )
}
