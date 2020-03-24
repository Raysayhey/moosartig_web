import React from 'react'

const Footer = () => {

  return (
    <footer>
      <section>
        <div className="address">
          <h3>Kontakt</h3>
          {/* <span>deHansi</span> */}
          <span>Email...</span>
          <span> Handy Nr.. </span>
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
          <a href="mailto:https://fuellstation-frauenfeld.ch">Füllstation </a> <br/>

                 <a href="mailto:https://www.gabriel-mueller.ch">Gabriel Müller</a><br/>

              <a href="mailto:eat-rosa.wyss@bluewin.ch">Beat Wyss</a> 052 721 59 51

              </span>
        </div>
      </section>
      {/* <p>Modified by
        <a href="https://block-lab.ch" target="_blank" rel="noopener noreferrer">Ray - </a>
      </p> */}
    </footer>
  )
}

export default Footer;