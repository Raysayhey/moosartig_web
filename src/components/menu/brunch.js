import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const Brunch = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulMenuItem(
      filter: {
        category: {
          title: {eq: "Brunch"}
        }
      }
    ) {
      edges {
        node {
          title
          id
          price
          category{
            title
          }
        }
      }
    }
  }
  `)

  const items = data.allContentfulMenuItem.edges;
  // #Brunch - 4
  return (
    <div>
      <p className="sample">Samstags schläft Hansi aus und serviert dir dafür durchgehend ein
               Brunch Menü von 9:30 - 16:00. <br/>
Danach lagert er seine Füsse hoch, zählt die Mäuse und leert sein Bier runter.</p>
      <ul className="menu-items-grid">
        {
          items.map(({ node }) => {
            return (
              <li key={node.id} className="menu-item">
                <h3>{node.title}</h3>
                <span>{node.price}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Brunch;