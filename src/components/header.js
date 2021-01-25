import React from "react"
import { Link } from "gatsby"

export default () => (
  <header>
    <nav>
      <ul>
        <li><Link to={"/"} activeClassName="active">About</Link></li>
        <li><Link to={"/projects/"} activeClassName="active">Projects</Link></li>
        <li><a href="https://www.bick.xyz/">Blog</a></li>
      </ul>
    </nav>
  </header>
)