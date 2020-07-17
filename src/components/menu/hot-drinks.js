import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'


const HotDrinks = () => {
  // const data = useStaticQuery(graphql`
  // query {
  //   allContentfulMenuItem(
  //     filter: {
  //       category: {
  //         title: {eq: "zMorge"}
  //       }
  //     }
  //   ) {
  //     edges {
  //       node {
  //         title
  //         id
  //         description {
  //           internal {
  //             content
  //           }
  //         }
  //         price
  //         category{
  //           title
  //         }
  //       }
  //     }
  //   }
  // }
  // `)

  // const items = data.allContentfulMenuItem.edges;
  // #1
  return (
    <div>
      <p className="sample">Hansi packt für deinen zMorgen alles zwischen
     zwei Brotscheiben <br />
     {/* Wir haben auch eine reiche Auswahl an Müesli. <br/> */}
     Dazu Kaffee von <a target="_blank" rel="noopener noreferrer" href="https://roestgrad.ch">roestgrad.ch</a> und Tee von 
     <a target="_blank" rel="noopener noreferrer" href="https://art-du-the.ch"> art-du-the.ch</a> <br/>
                Sein oder Wachsein ist die Frage.</p>
      {/* <ul className="menu-items-grid">
        {
          items.map(({ node }) => {
            return (
              <li key={node.id} className="menu-item">
                <h3>{node.title}</h3>
                <span>{node.description.internal.content}</span> <br/>

                <span className="preis">{node.price}.-</span>
              </li>
            )
          })
        }
      </ul> */}
    </div>
  )
}

export default HotDrinks;