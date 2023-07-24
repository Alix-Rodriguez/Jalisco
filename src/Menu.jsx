import './index.css'
import img5 from './assets/5.jpg'
import img6 from './assets/6.jpg'
import img7 from './assets/7.png'
import { Link } from 'react-scroll';


function Menu() {
    const btn1 = {
        background: '#67bfb1',
        color: '#004857',
        fontWeight: 'bold'
    }

    const backgroundStyle1 = {
        backgroundImage: `url(${img5})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      };

      const backgroundStyle2 = {
        backgroundImage: `url(${img6})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      };

    return (
        <>
            <Link to="menu" smooth={true} duration={1000}></Link>
            <div id="menu" className='contenedor_menu flex flex-col items-center justify-center'>
                <h1>Menus</h1>
                <div>
                    <div className="div_botones flex  justify-center items-center">
                        <button style={btn1} className="py-2 px-4 btn-hover rounded-full m-2">MENU</button>
                        <button style={btn1} className="py-2 px-4  btn-hover rounded-full m-2">LUNCH</button>
                        <button style={btn1} className="py-2 px-4  btn-hover rounded-full m-2">KID’S</button>
                    </div>
                </div>
            </div>

            <div style={backgroundStyle1} className='margarita flex flex-col items-center justify-end'>
                <div>
                    <div className="div_botones flex  justify-center items-center">
                        <button style={btn1} className="py-2 px-4 btn-hover rounded-full m-2">DRINKS</button>
                    </div>
                </div>
                <p>Viva Jalisco Restaurant in Bothell is renowned for crafting the most exquisite Margaritas in town. With their blended flavors and top-quality ingredients, their Margaritas are truly a taste of perfection.</p>
            </div>

            <Link to="platter" smooth={true} duration={1000}></Link>
            <div id="platter" style={backgroundStyle2} className='platos_comida flex flex-col items-center justify-center'>
            <img src={img7} alt="imagen comida" />
            <h1>PARTY PLATTERS?</h1>
                <div>
                    <div className="div_botones flex  justify-center items-center">
                        <button style={btn1} className="py-2 px-4 btn-hover rounded-full m-2">TOGO HERE</button>
                    </div>
                </div>
               
            </div>

        </>
    )
}

export default Menu
