import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const ColdDrinks = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulMenuItem(
      filter: {
        category: {
          title: {eq: "zMittag"}
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
  // #2
  return (
    <div>
      <p className="sample">Von Dienstags bis Freitags ausgewogen, meistens Vegetarisch,
            manchmal mit Fleisch aber auch mal Vegan.</p>
      <ul className="menu-items-grid">
        {
          items.map(({ node }) => {
            return (
              <li key={node.id} className="menu-item">
                <h3>{node.title}</h3>
                <span>£{node.price}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ColdDrinks;