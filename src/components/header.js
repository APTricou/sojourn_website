import PropTypes from "prop-types"
import React from "react"
import Button from "./Button"

const Header = ({ siteTitle }) => {
  return (
    <nav>
      <div class="nav-header">
        <h3>SL</h3>
        <h1>{siteTitle}</h1>
      </div>
      <div class="nav-buttons">
        <Button name={"Board"} />
        <Button name={"Herd"} />
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
