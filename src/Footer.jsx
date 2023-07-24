import Logo from './assets/LOGO.png'
import face from './assets/face.png'
import insta from './assets/ins.png'

function Footer() {

    return (
      <>
      
        <div className='padre_footer'>
          <div className="footer_div1 flex items-center justify-center ">
              <img src={Logo} alt="logo imagen" />
          </div>
          <div className='footer_div2 flex justify-around items-center'>
            <div className=' flex flex-col item1_footer'>
              <h6>1715 228th St SE UNIT 102 <br />
                  Bothell, WA 98021</h6>
              <h1>(425)481-3931</h1>
            </div>
            <div className='flex items-center'>
            <div className='item1-div3-footer'>
                  <h1>HOURS OF <br />
                    OPERATION</h1>
              </div>
              <div className='item2-div3-footer'>
              <h1>
                  Monday through Saturday <br />
                  <span>11:00 AM to 9:00 PM</span>
              </h1>
              <h1>Sundays <br />
              <span>11:00 AM to 8:00 PM</span></h1>
              </div>
            </div>
            <div className='item3_footer flex flex-col items-center'>
              <h6>Follow us:</h6>
              <div className='flex'>
          
                <a href="#">
                <img width='32px' src={face} alt="imagen facebook" />
                </a>
                <a href="#">
              <img width='32px' src={insta} alt="imagen instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer
  