import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';



const Footer = () => {

  return (
    <footer>
      <section>
        <div className="address">
          <h3>Kontakt</h3>
         <span></span> 
       <a href="https://www.facebook.com/eifachde.hansi.5"> <p>  <FaFacebook /> DeHansi</p> </a> 

     <a href="https://www.instagram.com/hansiufinsta/"> <p>  <FaInstagram /> @hansiufinsta</p> </a> 

          {/* <span>deHansi</span> */}
          <a href="mailto:trompetehuesli@gmail.com">trompetehuesli@gmail.com</a>
          <span> 076 404 85 24</span>
          <span>Thundorferstrasse 18, 8500 Frauenfeld</span>
          
        </div>
        <div className="hours">
          <h3>Öffnungszeiten</h3>
          <span>Dienstag bis Freitag 8:45 bis 18:00 <br/>
                            Samstag 9:30 bis 16:00
</span>
        </div>
        <div className="contact">
          <h3>Freunde</h3>
          <span>
          <a href="https://fuellstation-frauenfeld.ch">Füllstation </a> <br/>

                 <a href="https://www.gabriel-mueller.ch">Gabriel Müller</a><br/>

              <a href="mailto:eat-rosa.wyss@bluewin.ch">Beat Wyss</a> 052 721 59 51

              </span>
        </div>
      </section>
      <p>
        <a href="https://block-lab.ch" target="_blank" rel="noopener ">Gebaut von Ray</a>
      </p>
    </footer>
  )
}

export default Footer;