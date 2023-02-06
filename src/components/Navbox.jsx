import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
    return(
        <div className="sitemap">
            <Link to={'/'}>
            <img className="icon" src="/logo_faviconv5.svg"/>
            </Link>
            <h2>Mindcool's Site</h2>
            <Link to={'/contact'} className="page">Contact</Link>
            <Link to={'/about'} className="page">About</Link>
            <Link to={'/projects'} className="page">Projects</Link>
            <Link to={'/'} className="page">Home</Link>
        </div>
    )
}

export default NavBar