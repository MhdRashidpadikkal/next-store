"use client"
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'



export default function Navbar() {
    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/products", label: "Products" },
        { href: "/cart", label: "Cart" },
    ]

    const [scroll, setScroll] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [scroll])


    return (
        <div className={`fixed top-0 w-full flex justify-between items-center px-4 md:px-20 text-white ${scroll > 10 && "bg-accent/50 backdrop-blur-sm"}  py-2 `}>
            <div className='text-3xl font-semibold cursor-pointer '>Next-<span className='text-background'>Store</span></div>
            <div className='hidden md:flex gap-4 pr-20 '>
                {links.map((link) => (
                    <Link key={link.href} href={link.href}>{link.label}</Link>
                ))}
            </div>
            <div className='relative md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Menu />
                </button>
                {
                    isOpen && (
                        <div className=' absolute top-0 right-0 px-5 py-2 w-[170px] flex justify-between items-start  bg-accent text-primary '>
                            <div className='flex flex-col gap-4 '>
                                {links.map((link) => (
                                    <Link key={link.href} href={link.href}>{link.label}</Link>
                                ))}
                            </div>
                            <button onClick={() => setIsOpen(!isOpen)} >
                                <X />
                            </button>
                        </div>
                    )
                }

            </div>
        </div>
    )
}
