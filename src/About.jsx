import imagen from './assets/person.jpg'
import { Link } from 'react-scroll';

function About() {

    return (
        <>
            <Link to="about" smooth={true} duration={1000}></Link>
            <div id="about" className="about-cont">
                <div className='contenerdo1-about flex'>

                    <div className='item1_about'>
                        <img src={imagen} alt="persona" />
                    </div>

                    <div className='item2_about'>
                        <h1>ABOUT <span>US</span></h1>
                        <p>
                            Allow me to introduce Norma and Jose, the passionate owners of Viva Jalisco, a typical  Mexican restaurant located in Bothell, Washington. Hailing from Tototlán, Jalisco, they bring with them the rich cultural heritage of this enchanting region, known as the cradle of Mexican culture.
                            <br /> <br />
                            Jalisco, the birthplace of tequila, mariachi music, and charrerias, has a deep-rooted tradition of celebrating life and embracing its unique flavors. Norma and Jose's journey from Tototlán to Bothell is a testament to their love for sharing the authentic taste of their homeland with the local community.

                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
