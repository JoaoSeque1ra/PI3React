import React from 'react';
import { Link } from 'react-router-dom';

import brand from "../Assets/Images/logotipoincommun.png"

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-dark fixed-top bg-navBar">

                <Link to="/client" className="navbar-brand">
                    <img src={brand} width="240" className="d-none d-md-block" alt="incommun" />
                    <img src={brand} width="200" className="d-block d-md-none" alt="incommun" />
                </Link>
                
            </nav>
        </header>
    );
}