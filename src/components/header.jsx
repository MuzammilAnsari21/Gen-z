import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/img/Logo.png'

export default function Header() {
    return (
        <header className="flex justify-between items-center lg:px-27.5 2xl:px-27 2xl:py-9 lg:py-7">
            <ul className="flex lg:gap-10">
                <li className='hover:text-[#F62440] transition delay-200'><Link to="/">Men</Link></li>
                <li className='hover:text-[#F62440] transition delay-200'><Link to="/women">Women</Link></li>
                <li className='hover:text-[#F62440] transition delay-200'><Link to="/kids">Kids</Link></li>
            </ul>
            <img className="lg:w-30" src={logo} alt="Logo" />
            <ul className="flex lg:gap-10">
                <li className='hover:text-[#F62440] transition delay-200'><Link to="/">Wishlist</Link></li>
                <li className='hover:text-[#F62440] transition delay-200'><Link to="/">Cart</Link></li>
                <li className='hover:text-[#F62440] transition delay-200'><Link to="/">Login</Link></li>
            </ul>
        </header>
    )
}