import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
    return(
        <div className="sitemap">
            <img className="icon" src="/logo_faviconv5.svg"/>
            <h2>Mindcool's Site</h2>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/'}>Home</Link>
        </div>
    )
}

export default NavBar