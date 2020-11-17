import React from 'react'
import { FaFacebook, FaInstagram,  FaPhone} from 'react-icons/fa';



const Footer = () => {

  return (
    <footer>
      <section>
        <div className="address">
          {/* <h3>Kontakt</h3> */}
       

        <p> 
       <a href="https://www.facebook.com/Moosartigch-109852187484498">   <FaFacebook /> </a> 

     <a href="https://www.instagram.com/moosartig.ch/">  <FaInstagram /> </a> 
     <a href="tel:0786166007">  <FaPhone /> </a>

     </p> 

    
     

        

          {/* <span>deHansi</span> */}
          <a href="mailto:info@moosartig.ch">info@moosartig.ch</a>
          {/* <a href="tel:076 404 85 24">076 404 85 24</a> */}

          {/* <span> 076 404 85 24</span> */}
          {/* <span>Thundorferstrasse 18, 8500 Frauenfeld</span> */}
          
        </div>
        {/* <div className="hours">
          <h3>Öffnungszeiten</h3>
          <span>Montag bis Freitag 8:45 bis 18:00 <br/>
                          
</span>
        </div> */}
        {/* <div className="contact">
          <h3>Freunde</h3>
          <span>
          <a href="https://fuellstation-frauenfeld.ch">Füllstation </a> <br/>

                 <a href="https://www.gabriel-mueller.ch">Gabriel Müller</a><br/>

              <a href="mailto:beat-rosa.wyss@bluewin.ch">Beat Wyss</a> 052 721 59 51

              </span>
        </div> */}
      </section>
      {/* <p>
        <a href="https://block-lab.ch" target="_blank" rel="noopener ">Gebaut von Ray</a>
      </p> */}
    </footer>
  )
}

export default Footer;