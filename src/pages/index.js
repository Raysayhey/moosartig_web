import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Menu from '../components/menu/menu'
import Instagram from '../components/instagram'
// import LeafletMap from '../components/leafletMap'
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
      {/* Wir sind einfach Moosartig <br />  */}
      <h2>Moosartig, ein Startup aus Zürich. </h2>   </span>
      <div className="gallery-grid">
        <Img fluid={data.latte.childImageSharp.fluid} className="gallery-img1"/>
        <Img fluid={data.coffeeBags.childImageSharp.fluid} className="gallery-img2"/>
        <Img fluid={data.coffeePortrait.childImageSharp.fluid} className="gallery-img3"/>
      </div>
      <div className="about-grid">
        <h2>Ohne Moos nix los</h2>
        <p >
        Moosartig bringt die Natur in den Innenraum. <br></br>
          {/* Hansis Angebot ist frisch, frech, Hansigemacht. <br />
                          <br/> */}
                          <br></br>
               Wir verwandeln karge Wände in Kunstwerke durch eine Mischung
                aus mumifiziertem Moos, Holz, Stein & Metall.  <br/>
 <br/> Unsere Kreationen brauchen keine Pflege.
 <br></br>
{/* <br/> Ganz nach Ihren Vorstellungen erarbeiten wir ein Konzept mit Ihnen. 
<br/> */}
   {/* <strong> <h3>  <i>"Wir sind einfach Moosartig"</i> </h3></strong>      */}
                              
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
      
      {/* <div className="parallaxc"></div> */}

     
      

      {/* <section className="container">

      <Instagram />
    </section> */}
    <div className="parallaxx"></div>

    <section className="container">


              <div className="about-grid">
                <h2>Moosartig ist ein Künstlerduo aus Zürich</h2>
                <p >
                Das junge Startup realisiert verschiedene Projekte im Innenbereich mit Pflanzenkunst und Moos Kunstwerken <br/>
                <br />
                Von der Kakteenschale über die komplette Moosbedeckung bis zu Mooskunstwerken ist alles realisierbar, <br/>
                Wir sind gespannt auf Ihre Ideen & Vorstellungen.
                  </p> 
              </div>




</section>

<div className="parallaxd"></div>


    {/* {typeof window !== 'undefined' &&
      <LeafletMap
        position={[47.5547819, 8.900032]} // Your Coordinates
        zoom={18} // Zoom Level
        markerText={"DeHansi & Füllstation"} // Icon text
      />
    } */}
    <Footer />
  </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    coffeeShop: file(relativePath: { eq: "bao_moosartig2.jpg" }) {
      ...fluidImage
    }
    coffeePortrait: file(relativePath: { eq: "kakt_hang_koko.jpg" }) {
      ...fluidImage
    }
    latte: file(relativePath: { eq: "sukkubus.jpg" }) {
      ...fluidImage
    }
    coffeeBags: file(relativePath: { eq: "moos_wand.jpg" }) {
      ...fluidImage
    }
    Bags: file(relativePath: { eq: "reife_pflanz.jpg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage
