// import React from "react";
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './assets/LOGO.png';


import { useState, useEffect } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


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
    let Size='';
    if(window.innerWidth > 1500){
        console.log("entro grande")
        Size ='250px';
    } else{
        console.log("else grande")
        Size ='150px';
    }

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState("transparent");
    const [textColor, setTextColor] = useState("white");
    const [logoSize, setLogoSize] = useState(Size);
    
  
    const handleNav = () => {
      setNav(!nav);
    };
  
    function handleChange () {
        console.log("object")
    }
   
    useEffect(() => {
      const changeColor = () => {
        if (window.innerWidth > 1500) {
            console.log("entrooo")
            if (window.scrollY >= 90) {
                setColor("#004857");
                setTextColor("#000000");
                setLogoSize("200px");
            } else {
                setColor("transparent");
                setTextColor("#ffffff");
                setLogoSize("250px");
            }
        } else {
            if (window.scrollY >= 90) {
                setColor("#004857");
                setTextColor("#000000");
                setLogoSize("100px");
            } else {
                setColor("transparent");
                setTextColor("#ffffff");
                setLogoSize("150px");
            }
        } 
      };
     
      window.addEventListener("scroll", changeColor);
    }, []);

      window.addEventListener('resize', () => {
        if (window.innerWidth > 1500) {
            setLogoSize('250px')
        } else {
            setLogoSize('150px')
            
        } 
      });
 
    return (
        <Disclosure  as="nav" className="header_nav">
            {({ open, close }) => (
                <>
                    <div style={{ backgroundColor: `${color}` }}
      className=" uppercase left-0 top-0 w-full z-[50] ease-in duration-300 items-center  " >
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
                                        <img width={logoSize} className='m-5 d-flex' src={Logo} alt="Mi imagen" />
                                        <a href="#menu" onClick={close} className=" text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                            MENU
                                        </a>
                                        <a href="#platter" onClick={close} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                            PLATTERS
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='home-reponses md:hidden'>
                                <img width={logoSize} className='z-20 py-5 d-flex ' src={Logo} alt="Mi imagen" />
                                <div className="-mr-2 flex md:hidden flex-col h-full justify-center"> {/* Agregar clase flex-col y h-full */}
                                    {/* Mobile menu button */}
                                    <Disclosure.Button onClick={handleChange} className="z-20 inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                            <div className="flex flex-col items-center" style={{paddingTop: '40%'}}>
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
