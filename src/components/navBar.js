import React from "react";
import {Link} from "react-router-dom"
import '../style/navBar.css'

function Navbar() {
  return (
    <div>

      <ul>
        <h2> <Link to="/"> Me Gusta Tu Eyeliner </Link> </h2>
        <li> <Link to="/contact">Meet and Join Us!</Link> </li>
        <li> <Link to="/featured">Featured Artists </Link> </li>
        <li> <Link to="/makeup"> Make Up Vids </Link> </li>
        <li> <Link to="/ourstory"> Our Story </Link> </li>
        <li> <Link to="/exhibit">Virtual Exhibit </Link> </li>
      </ul>
      
    </div>
  );
};

export default Navbar