import React from 'react'
// import {useStaticQuery, graphql} from 'gatsby'

const Breakfast = () => {
  // const data = useStaticQuery(graphql`
  // query {
  //   allContentfulMenuItem(
  //     filter: {
  //       category: {
  //         title: {eq: "zVieri"}
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
  // #3     
  //          Holz
  return (
    <div>
      <p className="sample">In Zusammenarbeit mit unserer Partnerfirma aus Zürich, 
      Möbelraum in Adliswil, sind komplette Raumgestaltungen umsetzbar. <br/>
      <a target="_blank" rel="noopener noreferrer" href="https://moebelraum.jimdofree.com">Möbelraum.ch</a> 
     </p>
      {/* <ul className="menu-items-grid">
        {
          items.map(({ node }) => {
            return (
              <li key={node.id} className="menu-item">
                <h3>{node.title}</h3>
                <span>{node.description.internal.content}</span> <br/>
                <span>{node.price}.-</span>
              </li>
            )
          })
        }
      </ul> */}
    </div>
  )
}

export default Breakfast;