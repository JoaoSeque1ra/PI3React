import React from 'react';

import Brand from "../Assets/Images/logotipoincommun.png";

import ExportIcons from '../Helpers/ExportIcons';

export default function NavbarDashboardLg() {
    return (
        <nav className="position-sticky top-0 flex-column flex-shrink-0 ps-3 py-3 text-white bg-dark vh-100 d-none d-lg-flex" style={{ width: "280px" }} >

            <a className="mb-md-0 me-md-auto text-white text-decoration-none">
                <img src={Brand} width="180" className="d-none d-md-block" alt="incommun" />
            </a>

            <hr />

            <ul class="nav nav-pills flex-column mb-auto">

                <li class="nav-item">
                    <a class="nav-link rounded-0 rounded-start fs-5 font-weight-semiBold text-white">
                        <ExportIcons.Preco />
                        Preços
                    </a>

                    <ul class="nav nav-pills flex-column mb-auto pt-1">

                        <li class="nav-item">
                            <a class="nav-link rounded-0 rounded-start fw-normal text-white ps-5">
                                <ExportIcons.MarketingDigitalIcon />
                                Marketing Digital
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link rounded-0 rounded-start fw-normal text-white ps-5">
                                <ExportIcons.DesignGrafico />
                                Design Gráfico
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link rounded-0 rounded-start fw-normal text-white ps-5 active">
                                <ExportIcons.WebsiteLojaOnline />
                                Website &#38; Loja Online
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link rounded-0 rounded-start fw-normal text-white ps-5">
                                <ExportIcons.ComunicacaoConsultoria />
                                Comunicação &#38; Consultoria
                            </a>
                        </li>

                    </ul>

                </li>

                <li class="pt-4">
                    <a class="nav-link text-white fs-5 font-weight-semiBold">
                        <svg id="icon_products" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <g id="summarize_white_24dp">
                                <g id="Grupo_274" data-name="Grupo 274">
                                    <path id="Caminho_376" data-name="Caminho 376" d="M0,0H24V24H0Z" fill="none" />
                                </g>
                                <g id="Grupo_276" data-name="Grupo 276" transform="translate(3 3)">
                                    <g id="Grupo_275" data-name="Grupo 275">
                                        <path id="Caminho_377" data-name="Caminho 377"
                                            d="M15,3H5A2,2,0,0,0,3.01,5L3,19a2,2,0,0,0,1.99,2H19a2.006,2.006,0,0,0,2-2V9ZM8,17a1,1,0,1,1,1-1A1,1,0,0,1,8,17Zm0-4a1,1,0,1,1,1-1A1,1,0,0,1,8,13ZM8,9A1,1,0,1,1,9,8,1,1,0,0,1,8,9Zm6,1V4.5L19.5,10Z"
                                            transform="translate(-3 -3)" fill="#fff" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        Orçamento
                    </a>

                </li>

            </ul>

        </nav>
    );
}