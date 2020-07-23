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
      <h2>Wir sind Moosartig <br /> Wir arbeiten mit Pflanzen, Moos und mehr  </h2>   </span>
      <div className="gallery-grid">
        <Img fluid={data.latte.childImageSharp.fluid} className="gallery-img1"/>
        <Img fluid={data.coffeeBags.childImageSharp.fluid} className="gallery-img2"/>
        <Img fluid={data.coffeePortrait.childImageSharp.fluid} className="gallery-img3"/>
      </div>
      <div className="about-grid">
        <h2>Grüne Kunst, mal so mal so</h2>
        <p >
          {/* Hansis Angebot ist frisch, frech, Hansigemacht. <br />
                          <br/> */}
               Wir sind Pflanzen <br/> <br/>

                <strong> <h3>  <i>"Wir sind Moosartig"</i> </h3>
                 
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
                <h2>Moosartige Künstler</h2>
                <p >
                Pflanzenkünstler und Moosartige Kunstwerke <br/>
                <br />
                Zürcher Künstler Kollektiv mit Freude an Pflanzen und allem Anderen das mal gewesen gesie. <br />
                          Egal ob Holz oder anderes Organisches Material, wir stellen her auf Wunsch oder nach Lust und Laune. <br/>
                          Alles was brennt und raucht.
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
    coffeeShop: file(relativePath: { eq: "thomas-verbrug.jpg" }) {
      ...fluidImage
    }
    coffeePortrait: file(relativePath: { eq: "kakt_hang_koko.jpg" }) {
      ...fluidImage
    }
    latte: file(relativePath: { eq: "sukkubus.jpg" }) {
      ...fluidImage
    }
    coffeeBags: file(relativePath: { eq: "gab_janina_web.jpg" }) {
      ...fluidImage
    }
    Bags: file(relativePath: { eq: "reife_pflanz.jpg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage
