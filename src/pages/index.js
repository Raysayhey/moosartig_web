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
      <h3>Für uns stehen Regionale Produkte in der ersten Reihe, jedoch seine Produzenten
                     und ihre Philosophie im Rampenlicht.   </h3>   </span>
      <div className="gallery-grid">
        <Img fluid={data.latte.childImageSharp.fluid} className="gallery-img1"/>
        <Img fluid={data.coffeeBags.childImageSharp.fluid} className="gallery-img2"/>
        <Img fluid={data.coffeePortrait.childImageSharp.fluid} className="gallery-img3"/>
      </div>
      <div className="about-grid">
        <h2>zMorge, zMittag, zVieri</h2>
        <p >
          Hansis Angebot ist frech, frisch, Hansigemacht,
                            ausgewogen bis sündhaft <br/>
               Wir laden euch ein zum gemütlichen Beisammensein. <br/>
                       Vom zMorge zum zMittag bis zVieri <br/>
                              Es het solangs het! 
                              <br/>
                              <br/>
                              Hansi sind Janina und Gabriel, eine junge Familie die
                        die Leidenschaft mit euch teilt
                       Bewusst, Zeitgemäss und Saisonal
                         Einzukaufen und zu Geniessen.
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


    {typeof window !== 'undefined' &&
      <LeafletMap
        position={[47.5547819, 8.900032]} // Your Coordinates
        zoom={18} // Zoom Level
        markerText={"DeHansi & dFüllstation"} // Icon text
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
    coffeeShop: file(relativePath: { eq: "coffee-shop-exterior.jpg" }) {
      ...fluidImage
    }
    coffeePortrait: file(relativePath: { eq: "coffee-portrait.jpg" }) {
      ...fluidImage
    }
    latte: file(relativePath: { eq: "latte.jpg" }) {
      ...fluidImage
    }
    coffeeBags: file(relativePath: { eq: "coffee-bags.jpg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage