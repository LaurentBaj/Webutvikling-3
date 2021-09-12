import React from "react";
import {Link} from "react-router-dom";


export function MainNavigation() {
    return <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/games"}>Games</Link></li>
    </>
}