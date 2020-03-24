import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const Lunch = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulMenuItem(
      filter: {
        category: {
          title: {eq: "Lunch"}
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
  // #5 ichaufe
  return (
    <div>
      <p className="sample"> 
      <a target="_blank" rel="noopener noreferrer" href="https://fuellstation-frauenfeld.ch">Füllstation Frauenfeld</a>
      </p>
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

export default Lunch;