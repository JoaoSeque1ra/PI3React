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
                
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link">Marketing Digital</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Design gráfico</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Websites &#38; Lojas online</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Comunicação &#38; Consultoria</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}