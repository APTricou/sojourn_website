import React from "react"
import { Link } from "gatsby"

const Button = function({ name }) {
  return (
    <Link to={`/${name}`}>
      <div class="nav-button">{name}</div>
    </Link>
  )
}
export default Button
