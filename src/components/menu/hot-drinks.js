import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const HotDrinks = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulMenuItem(
      filter: {
        category: {
          title: {eq: "zMorge"}
        }
      }
    ) {
      edges {
        node {
          title
          id
          description {
            internal {
              content
            }
          }
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
  // #1
  return (
    <div>
      <p className="sample">Zmorge Menu</p>
      <ul className="menu-items-grid">
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
      </ul>
    </div>
  )
}

export default HotDrinks;