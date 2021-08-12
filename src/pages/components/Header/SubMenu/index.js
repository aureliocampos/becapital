import React from "react";
import { StaticQuery, graphql, Link } from "gatsby"

const isCurrent = ({ current }) => {
  return current ? { className: "header__menu_link_current" } : {}
}

const SubMenu = () => (
   <StaticQuery
   query={graphql`
     query {
      allStrapiServices {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
     }
   `}
   render={data => (
    <ul className="header__submenu_items">
        <li className="header__submenu_item">
          <a href="https://maquinadossonhos.be.capital/" className="header__submenu_link">Planejamento Financeiro</a>
        </li>
      {data.allStrapiServices.edges.map((page) => (
        <li className="header__submenu_item" key={page.node.id}>
          <Link to={`/${page.node.slug}`} className="header__submenu_link" getProps={isCurrent}>{page.node.title}</Link>
        </li>
      ))}
    </ul>
   )}
 />
)

export default SubMenu;