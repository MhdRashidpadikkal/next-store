"use client"
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { logout, setCredentials } from '@/store/slices/authSlice'
import { Menu, ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


export default function Navbar() {
    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/products", label: "Products" },
        { href: "/contact", label: "Contact" },
    ]

    const [scroll, setScroll] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [isProfile, setIsProfile] = useState(false)

    const dispatch = useAppDispatch();
    const router = useRouter()

    const {totalQuantity} = useAppSelector((state) => state.cart)
    console.log("total quantity", totalQuantity)

    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        const storedJwt = localStorage.getItem("jwt")

        if (storedUser && storedJwt) {
            dispatch(
                setCredentials({
                    user: JSON.parse(storedUser),
                    jwt: storedJwt,

                })
            )
        }
    }, [dispatch])

    const { user, jwt } = useAppSelector((state) => state.auth)

    const pathname = usePathname()
    const isHome = pathname === "/"

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [scroll])

    const handleLogout = () => {
        dispatch(logout())
        router.push("/login")
    }


    return (
        <div className={`fixed top-0 w-full flex justify-between items-center px-4 md:px-20 ${!isHome && "bg-primary"} text-white ${scroll > 10 && "bg-accent/50 backdrop-blur-sm"}  py-2 z-50 `}>
            <div className='text-3xl font-semibold cursor-pointer '>
                <Link href="/">Next-<span className='text-background'>Store</span></Link>
            </div>

            <div className='flex items-center '>
                <div className='hidden md:flex gap-4 pr-5 '>
                    {links.map((link) => (
                        <Link key={link.href} href={link.href}>{link.label}</Link>
                    ))}

                    <div className='flex gap-4 ps-10'>

                        {
                            !user ? (
                                <button className='bg-white rounded-md px-4 text-black text-sm font-semibold'>
                                    <Link href="/login">Sign in</Link>
                                </button>
                            ) : (
                                <div className='relative'>
                                    <button
                                        onClick={() => setIsProfile((prev) => !prev)}
                                        className='bg-[#fcac7e] h-[27] w-[27] cursor-pointer rounded-full'>{user.username[0]}</button>

                                    {
                                        isProfile && (
                                            <div className='absolute top-10 right-0 bg-white text-black rounded-md shadow-md p-2 flex flex-col gap-2'>
                                                <Link href="#" className='hover:bg-accent/50 rounded-md px-2 py-1'>Profile</Link>
                                                <button
                                                    onClick={() => dispatch(logout())}
                                                    className='hover:bg-accent/50 rounded-md px-2 py-1 text-red-500'>Logout
                                                </button>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
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
                                    <button className='bg-red-500 text-white rounded-md text-sm' onClick={handleLogout}>Logout</button>

                                </div>
                                <button onClick={() => setIsOpen(!isOpen)} >
                                    <X />
                                </button>
                            </div>
                        )
                    }

                </div>
                <button className='flex items-center mb-1 cursor-pointer'>
                    <Link href="/cart"><ShoppingCart className='h-[18px] ' /></Link>
                </button>
            </div>
        </div>
    )
}
