import React from 'react';

import brand from "../Assets/Images/logotipoincommun.png"

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-dark fixed-top bg-navBar">
                <a className="navbar-brand">
                    <img src={brand} width="240" className="d-none d-md-block" alt="incommun" />
                    <img src={brand} width="200" className="d-block d-md-none" alt="incommun" />
                </a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Marketing Digital</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Design gráfico</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Websites &#38; Lojas online</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Comunicação &#38; Consultoria</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}