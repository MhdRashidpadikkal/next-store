"use client"
import Link from 'next/link'



export default function Navbar() {
    const links = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About"},
        {href: "/contact", label: "Contact"},
        {href: "/products", label: "Products"},
        {href: "/cart", label: "Cart"},
    ]

   
  return (
    <div className={`fixed top-0 w-full flex justify-between items-center px-20  text-white py-2 `}>
        <div className='text-3xl font-semibold cursor-pointer '>Next-<span className='text-background'>Store</span></div>
        <div className='flex gap-4 pr-20 '>
            {links.map((link) => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
        </div>
    </div>
  )
}
