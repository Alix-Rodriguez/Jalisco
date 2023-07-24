import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './assets/LOGO.png'
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
// import img5 from './assets/5.jpg'
import img6 from './assets/6.jpg'
import './index.css'
import { Link } from 'react-scroll';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const imagenes = [
    { id: 1, img: img1, alt: "comida" },
    { id: 2, img: img2, alt: "comida" },
    { id: 3, img: img3, alt: "comida" },
    { id: 4, img: img4, alt: "comida" },
    // { id: 5, img: img5, alt: "comida" },
    { id: 6, img: img6, alt: "comida" },
]



const navigation = [
    { name: 'HOME', href: '#home', current: false },
    { name: 'ABOUT', href: '#about', current: false },
    { name: 'MENU', href: '#menu', current: false },
    { name: 'PLATTERS', href: '#platter', current: false },
]




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Home() {
    return (
        <>

            <Link to="home" smooth={true} duration={1000}></Link>
            <div id="home" className="min-h-full">
                <Disclosure as="nav" className="header_nav">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex  items-center justify-center">
                                    <div className="flex items-center">

                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-center space-x-4">
                                                <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                                    HOME
                                                </a>
                                                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                                    ABOUT
                                                </a>
                                                <img width='250px' className='d-flex' src={Logo} alt="Mi imagen" />
                                                <a href="#menu" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                                    MENU
                                                </a>
                                                <a href="#platter" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                                    PLATTERS
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='home-reponses md:hidden'>
                                        <img width='150px' className='d-flex' src={Logo} alt="Mi imagen" />
                                        <div className="-mr-2 flex md:hidden">
                                            {/* Mobile menu button */}
                                            <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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

                                <Disclosure.Panel className="md:hidden bg-gray-800">
                                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 ">
                                        {navigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'block rounded-md px-3 py-2 text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </Disclosure.Panel>
                            </div>
                        </>
                    )}
                </Disclosure>

                {/* carrusel */}
                <Carousel className='carrusel' autoPlay infiniteLoop>
                    {imagenes.map((image) => (
                        <div key={image.id}>
                            <img src={image.img} alt={image.alt} />
                        </div>
                    ))}
                </Carousel>
                <div className='home_welcome'>
                    <h1 >WELCOME <br />
                        <span>TO VIVA JALISCO</span></h1>
                    <p>Our Kitchen is the expression of our Mexican <br />
                        culture through good food.</p>
                </div>


                {/* 
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>
        </main> */}
            </div>
        </>
    )
}
export default Home
