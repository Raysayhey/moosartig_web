import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <span>{siteTitle}</span>
    <span > <a href="www.fuellstation-frauenfeld.ch">Füllstation Frauenfeld</a> </span>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
