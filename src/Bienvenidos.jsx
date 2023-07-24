import './index.css'


function Bienvenido() {

    return (
        <>
        <div className='bienvenido'>
                <div  className='text-div'>
                    <h1 className="text-3xl font-bold">BIENVENIDOS!</h1>
                    <p>
                        At Viva Jalisco, flavor and generous portions take center stage, setting it apart from the rest.  <br />
                        What sets this restaurant apart is their unwavering commitment to preserving the authentic flavors
                        of Mexico. Norma and Jose, the skilled chefs and owners, employ traditional cooking techniques that make all the difference in every dish they prepare. <br />
                        From the sizzling meats cooked to perfection, to the vibrant and aromatic salsas, every bite at Viva Jalisco is a testament to their dedication and passion for delivering an exceptional dining experience.
                    </p>
                </div>
            
                <div className='text-div2'>
                    <h4 className='font-bold'>VIVA JALISCO MEXICAN RESTAURANT <br />
                        IS LOCATED IN BOTHELL, WASHINGTON <br />
            
                        <span className='text-sm font-medium'>1715 228th St SE UNIT 102</span></h4>
                </div>
            <div className='div3 flex justify-around'>
                {/* primer div */}
                <div className='contenedor1-div3 flex'>
                <div className='item1-div3'>
                    <h1>WE ARE OPEN<br />
                    7 DAYS A WEEK</h1>
                </div>
                <div className='item2-div3'>
                <h1>
                    Monday through Saturday <br />
                    <span>11:00 AM to 9:00 PM</span>
                </h1>
                <h1>Sundays <br />
                <span>11:00 AM to 8:00 PM</span></h1>
                </div>
            
                </div>
                {/* segundo div */}
                <div className='contenedor2-div3'>
                <h1>HAPPY <span className="span1">HOUR</span> <br />
                    <span className="span2"><span className='span3'>EVERY</span> DAY!</span>  <br />
                <span className='span4'>2:00 PM through 5:00 PM</span>
                </h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default Bienvenido
