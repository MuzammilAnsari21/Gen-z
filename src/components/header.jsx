import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/img/Logo.png'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="relative flex justify-between items-center px-6 py-6 2xl:py-9 lg:py-7 lg:px-27.5 2xl:px-27">
            <ul className="hidden lg:flex lg:gap-10">
                <li className='hover:text-[#F62440] transition delay-200'><Link to="/">Men</Link></li>
                <li className='hover:text-[#F62440] transition delay-200'><Link to="/women">Women</Link></li>
                <li className='hover:text-[#F62440] transition delay-200'><Link to="/kids">Kids</Link></li>
            </ul>

            <img className="lg:w-30 w-20" src={logo} alt="Logo" />

            <ul className="hidden lg:flex lg:gap-10">
                <li className='hover:text-[#F62440] transition delay-200'><Link to="/">Wishlist</Link></li>
                <li className='hover:text-[#F62440] transition delay-200'><Link to="/">Cart</Link></li>
                <li className='hover:text-[#F62440] transition delay-200'><Link to="/">Login</Link></li>
            </ul>

            <button 
                className="lg:hidden flex flex-col gap-1.5 cursor-pointer z-50"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {isOpen && (
                <div className="fixed top-16 left-0 right-0 bg-white shadow-lg lg:hidden z-40">
                    <ul className="flex flex-col gap-4 p-4">
                        <li className='hover:text-[#F62440] transition delay-200 text-center max-md:text-[14px]'><Link to="/" onClick={() => setIsOpen(false)}>Men</Link></li>
                        <li className='hover:text-[#F62440] transition delay-200 text-center max-md:text-[14px]'><Link to="/women" onClick={() => setIsOpen(false)}>Women</Link></li>
                        <li className='hover:text-[#F62440] transition delay-200 text-center max-md:text-[14px]'><Link to="/kids" onClick={() => setIsOpen(false)}>Kids</Link></li>
                        <li className='hover:text-[#F62440] transition delay-200 text-center max-md:text-[14px]'><Link to="/" onClick={() => setIsOpen(false)}>Wishlist</Link></li>
                        <li className='hover:text-[#F62440] transition delay-200 text-center max-md:text-[14px]'><Link to="/" onClick={() => setIsOpen(false)}>Cart</Link></li>
                        <li className='hover:text-[#F62440] transition delay-200 text-center max-md:text-[14px]'><Link to="/" onClick={() => setIsOpen(false)}>Login</Link></li>
                    </ul>
                </div>
            )}
        </header>
    )
}