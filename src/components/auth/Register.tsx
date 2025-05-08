"use client"

import { useAppDispatch } from '@/store/hook'
import { register } from '@/store/slices/authSlice'
import { RegisterData } from '@/types/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Register() {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const [credentials, setCredentials] = useState<RegisterData>({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCredentials((prev) => ({...prev, [name]: value }) )
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(register(credentials)).unwrap()
             router.push("/")
        } catch (error) {
            console.error("Registration failed:", error);
        }
    }

  return (
    <div className='mt-25 mb-10 flex sm:px-20 justify-center items-center  '>
        
        <div className='hidden sm:flex lg:w-1/3 h-[500px] '>
            <Image 
            src={"/images/auth/register.png"}
            alt="register"
            width={450}
            height={350}
            className='w-full h-full object-cover rounded-l-md'
            />
        </div>

        <div className=' lg:w-1/3 bg-white flex flex-col justify-center items-center h-[500px] rounded-r-md'>
        <h2 className="text-2xl font-bold">Welcome to <span className='text-[#a88c6a]'>Next-Store</span> </h2>
        <p className="text-sm px-3 ">Create Your Account and Design Your Dream Space</p>
        <form onSubmit={handleSubmit}
            className='flex flex-col gap-3 w-full px-14 mt-5  '
        >
            <input name="username" type="text" placeholder='username' value={credentials.username} onChange={handleChange} className='border border-[#a88c6a] px-2 rounded-md py-1 focus:outline-none focus:border-[#d4af7f]  focus:ring-1 focus:ring-[#d4af7f] ' />
            <input name="email" type="email" placeholder='email' value={credentials.email} onChange={handleChange} className='border border-[#a88c6a] px-2 rounded-md py-1 focus:outline-none focus:border-[#d4af7f]  focus:ring-1 focus:ring-[#d4af7f] ' />
            <input name="password" type="password" placeholder='password' value={credentials.password} onChange={handleChange} className='border border-[#a88c6a] px-2 rounded-md py-1 focus:outline-none focus:border-[#d4af7f]  focus:ring-1 focus:ring-[#d4af7f] ' />
            <input name="confirmPassword" type="password" placeholder='confirm password' value={credentials.confirmPassword} onChange={handleChange} className='border border-[#a88c6a] px-2 rounded-md py-1 focus:outline-none focus:border-[#d4af7f]  focus:ring-1 focus:ring-[#d4af7f] ' />
            <button type="submit"
                className='bg-black text-white rounded-2xl cursor-pointer mt-2 py-1'
            >Register</button>
        </form>

        <p className='mt-5'>Already have an account? <Link href="/login" className='text-[#a88c6a] hover:text-[#c4945a] '>Login</Link></p>

        </div>
    </div>
  )
}
