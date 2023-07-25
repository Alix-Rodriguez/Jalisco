// import React from "react";
import { Link } from 'react-scroll';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from "./Navbar";
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img6 from './assets/6.jpg';

const imagenes = [
    { id: 1, img: img1, alt: "comida" },
    { id: 2, img: img2, alt: "comida" },
    { id: 3, img: img3, alt: "comida" },
    { id: 4, img: img4, alt: "comida" },
    { id: 6, img: img6, alt: "comida" },
];





const estilosImg = {
    height: '100vh',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
}



function Home() {
    return (
        <>

            <Link to="home" smooth={true} duration={1000}></Link>
            
            <div id="home" className="min-h-full">
            <div className='home_sombra'></div>
                {/* Aquí agregamos el componente Navbar */}
                <Navbar />
                {/* Fin del Navbar */}
                {/* carrusel */}
                <Carousel className='carrusel z-5' autoPlay infiniteLoop>
                    {imagenes.map((image) => (
                        <div key={image.id}>
                            <img style={estilosImg} src={image.img} alt={image.alt} />
                        </div>
                    ))}
                </Carousel>
                
                <div className='home_welcome z-5 '>
                    <h1>WELCOME <br />
                        <span>TO VIVA JALISCO</span></h1>
                    <p>Our Kitchen is the expression of our Mexican <br />
                        culture through good food.</p>
                </div>
                
            </div>
           
        </>
    )
}
export default Home
