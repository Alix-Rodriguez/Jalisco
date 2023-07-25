import React from "react";
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './assets/LOGO.png';

const navigation = [
    { name: 'HOME', href: '#home', current: false },
    { name: 'ABOUT', href: '#about', current: false },
    { name: 'MENU', href: '#menu', current: false },
    { name: 'PLATTERS', href: '#platter', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function Navbar() {
    return (
        <Disclosure as="nav" className="header_nav">
            {({ open, close }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-center">
                            <div className="flex items-center">
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-center space-x-12">
                                        <a href="#home" onClick={close} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                        <span style={{ color: '#00acce' }}>HO</span><span style={{ color: '#67bfb1' }}>ME</span>
                                        </a>
                                        <a href="#about" onClick={close} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                            ABOUT
                                        </a>
                                        <img width='380px' className='d-flex' src={Logo} alt="Mi imagen" />
                                        <a href="#menu" onClick={close} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                            MENU
                                        </a>
                                        <a href="#platter" onClick={close} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                            PLATTERS
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='home-reponses md:hidden'>
                                <img width='150px' className='z-20 py-5 d-flex ' src={Logo} alt="Mi imagen" />
                                <div className="-mr-2 flex md:hidden flex-col h-full justify-center"> {/* Agregar clase flex-col y h-full */}
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="z-20 inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>
                        {/* Add fixed style to keep the mobile menu always visible */}
                        <Disclosure.Panel
                            as="div"
                            className={`md:hidden bg-gray-800 ${open ? "fixed inset-0 z-10 menu-enter" : "hidden"} menu-animate`}
                            static
                            enter="menu-enter"
                            exit="menu-exit"
                        >
                            <div className="flex flex-col items-center pt-60">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={close} // Add onClick to close the panel when a link is clicked
                                        className={classNames(
                                            item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                            "block rounded-md px-3 py-8 text-5xl font-medium "
                                        )}
                                        aria-current={item.current ? "page" : undefined}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </div>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;
