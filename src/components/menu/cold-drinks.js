import React from 'react'
// import {useStaticQuery, graphql} from 'gatsby'

const ColdDrinks = () => {
  // const data = useStaticQuery(graphql`
  // query {
  //   allContentfulMenuItem(
  //     filter: {
  //       category: {
  //         title: {eq: "zMittag"}
  //       }
  //     }
  //   ) {
  //     edges {
  //       node {
  //         title
  //         id
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
  // #2
  //   Moos Art
  return (
    <div>
      <p className="sample">Mumifiziertes Moos behält ohne Wasser seine Form. <br/>
        Das Moos ist in unterschiedlicher Form und Farbe vorhanden. Je nach Wunsch können wir Ihnen ein
          individuelles Projekt zusammenstellen.
      </p>
      {/* <ul className="menu-items-grid">
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
      </ul> */}
    </div>
  )
}

export default ColdDrinks;