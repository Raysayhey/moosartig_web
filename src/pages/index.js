import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Menu from '../components/menu/menu'
import Instagram from '../components/instagram'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'

const IndexPage = ({data}) => {

return (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <Img fluid={data.coffeeShop.childImageSharp.fluid} className="hero-image"/>
    </section>
    <section className="container">
      <span className="description">
      <h2>Für uns stehen regionale Produkte sowie die Produzenten
                     und ihre Philosophie im Rampenlicht.   </h2>   </span>
      <div className="gallery-grid">
        <Img fluid={data.latte.childImageSharp.fluid} className="gallery-img1"/>
        <Img fluid={data.coffeeBags.childImageSharp.fluid} className="gallery-img2"/>
        <Img fluid={data.coffeePortrait.childImageSharp.fluid} className="gallery-img3"/>
      </div>
      <div className="about-grid">
        <h2>zMorge, zMittag, zVieri</h2>
        <p >
          Hansis Angebot ist frisch, frech, Hansigemacht. <br />
                          <br/>
               Wir laden euch ein zum gemütlichen Beisammensein. <br/> <br/>

                <strong> <h3>  <i>"Vom zMorge zum zMittag bis zVieri <br/>
                              Es het solangs het!"</i> </h3>
                 
                  </strong>     
                              
                              <br/>
                              {/* Hansi sind Janina und Gabriel, eine junge Familie die
                        die Leidenschaft mit euch teilt
                       Bewusst, Zeitgemäss und Saisonal
                         Einzukaufen und zu Geniessen. */}
          </p> 
      </div>
    </section>
    <div className="parallaxe"></div>
    <section className="container">
      <Menu />
      
      </section>
      
      <div className="parallaxc"></div>

     
      

      <section className="container">

      <Instagram />
    </section>
    <div className="parallaxx"></div>

    <section className="container">


<div className="about-grid">
  <h2>sTrompetehüsli</h2>
  <p >
  Im 1545 erbauten Trompetehüsli wurden von 1893 bis 1955 die berühmten Wolf 
  Blasinstrumente hergestellt. <br />
  Einige Exemplare, welche damals im Trompetehüsli fabriziert wurden, haben den Weg zurück gefunden. <br />
  Beat Wyss, leidenschaftlicher Musiker und Sammler, 
  stellt seine Wolf Instrumente im ganzen Haus aus und teilt auf Anfrage gerne seine Geschichten mit euch.
    </p> 
</div>




</section>

<div className="parallaxd"></div>


    {typeof window !== 'undefined' &&
      <LeafletMap
        position={[47.5547819, 8.900032]} // Your Coordinates
        zoom={18} // Zoom Level
        markerText={"DeHansi & Füllstation"} // Icon text
      />
    }
    <Footer />
  </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    coffeeShop: file(relativePath: { eq: "hansi_front_web.jpg" }) {
      ...fluidImage
    }
    coffeePortrait: file(relativePath: { eq: "hansi_kafi_web.jpg" }) {
      ...fluidImage
    }
    latte: file(relativePath: { eq: "kuchen_web.jpg" }) {
      ...fluidImage
    }
    coffeeBags: file(relativePath: { eq: "gab_janina_web.jpg" }) {
      ...fluidImage
    }
    Bags: file(relativePath: { eq: "rocket_hansi_web.jpg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage
