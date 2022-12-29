import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.png';
import uImg from '../../../img/mdhamimulhaque.jpg';
import Button from '../../Button/Button';
import { HiBars3BottomRight } from 'react-icons/hi2';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <>
            {/* main menu */}
            <div className="container mx-auto flex justify-between items-center py-7 px-5">
                {/* logo */}
                <Link to="/" className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
                    <img className='w-8' src={logo} alt="img" />
                    <span className="ml-3 text-xl text-gray-100 font-semibold antialiased">Dream World</span>
                </Link>
                {/* Navbar */}
                <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
                    <Link to="#link" className="mr-8 hover:text-gray-300">Solutions</Link>
                    <Link to="#link" className="mr-8 hover:text-gray-300">Prices</Link>
                    <Link to="#link" className="mr-8 hover:text-gray-300">About</Link>
                    <Link to="#link" className="mr-8 hover:text-gray-300">Contact</Link>
                </nav>
                {/* Avatar */}
                <div className="hidden relative sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer border-2 rounded-full border-green-300">
                    <img src={uImg} alt="img"
                        className='rounded-full h-8 w-8'
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    />
                    {
                        isDropdownOpen &&
                        <div className='absolute top-9 right-0 bg-gray-800 rounded px-4 py-2'>
                            <div className='mb-2 hover:text-green-300'>Login</div>
                            <div className='hover:text-green-300'>Registration</div>
                        </div>
                    }

                </div>
                {/* hand burger icon  */}
                <button
                    className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:green-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <HiBars3BottomRight className='text-2xl' />
                </button>
            </div>

            {/* mobile menu */}
            {isOpen &&
                <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-900 text-base uppercase text-center font-semibold">
                    <Link to="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Solutions</Link>
                    <Link to="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Prices</Link>
                    <Link to="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">About</Link>
                    <Link to="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Contact</Link>

                    <div className="button_box px-3 py-2 rounded-md">
                        <Button>Login</Button>
                    </div>
                    <div className="button_box px-3 py-2 rounded-md">
                        <Button>Registration</Button>
                    </div>
                </div>
            }

        </>
    );
};

export default Header;