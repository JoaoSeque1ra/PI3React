import React from 'react';

import Brand from "../Assets/Images/logotipoincommun.png";

import ExportIcons from '../Helpers/ExportIcons';

export default function NavbarDashboardLg() {
    return (
        <nav className="position-sticky top-0 flex-column flex-shrink-0 ps-3 py-3 text-white bg-gray vh-100 d-none d-lg-flex" style={{ width: "280px" }} >

            <a className="mb-md-0 me-md-auto text-white text-decoration-none">
                <img src={Brand} width="180" className="d-none d-md-block" alt="incommun" />
            </a>

            <hr />

            <ul className="nav nav-pills flex-column mb-auto">

                <li className="nav-item">
                    <a className="nav-link rounded-0 rounded-start fs-5 font-weight-semiBold text-white">
                        <ExportIcons.Preco className="me-2" />
                        Preços
                    </a>

                    <ul className="nav nav-pills flex-column mb-auto pt-1">

                        <li className="nav-item">
                            <a className="nav-link rounded-0 rounded-start fw-normal text-white ps-5">
                                <ExportIcons.MarketingDigitalIcon className="me-2 colorIconWhite" />
                                Marketing Digital
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link rounded-0 rounded-start fw-normal text-white ps-5">
                                <ExportIcons.DesignGrafico className="me-2 colorIconWhite" />
                                Design Gráfico
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link rounded-0 rounded-start fw-normal text-white ps-5">
                                <ExportIcons.WebsiteLojaOnline className="me-2 colorIconWhite" />
                                Website &#38; Loja Online
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link rounded-0 rounded-start fw-normal text-white ps-5">
                                <ExportIcons.ComunicacaoConsultoria className="me-2 colorIconWhite" />
                                Comunicação &#38; Consultoria
                            </a>
                        </li>

                    </ul>

                </li>

                <li className="pt-4">
                    <a className="nav-link text-white fs-5 font-weight-semiBold">
                        <ExportIcons.Orcamento className="me-2" />
                        Orçamento
                    </a>

                    <ul className="nav nav-pills flex-column mb-auto pt-1">

                        <li className="nav-item">
                            <a className="nav-link rounded-0 rounded-start fw-normal text-white ps-5">
                                <ExportIcons.Ver className="me-2 colorIconWhite" />
                                Ver orçamentos
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link rounded-0 rounded-start fw-normal text-white ps-5">
                                <ExportIcons.Novo className="me-2 colorIconWhite" />
                                Novo orçamento
                            </a>
                        </li>

                    </ul>

                </li>

                <li className="pt-4">
                    <a className="nav-link text-white fs-5 font-weight-semiBold">
                        <ExportIcons.Cliente className='me-2 colorIconWhite' />
                        Cliente
                    </a>

                    <ul className="nav nav-pills flex-column mb-auto pt-1">

                        <li className="nav-item">
                            <a className="nav-link rounded-0 rounded-start fw-normal text-white ps-5">
                                <ExportIcons.Ver className='me-2 colorIconWhite' />
                                Ver clientes
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link rounded-0 rounded-start fw-normal text-white ps-5">
                                <ExportIcons.Novo className='me-2 colorIconWhite' />
                                Novo Cliente
                            </a>
                        </li>

                    </ul>

                </li>

                <li className="pt-4">
                    <a className="nav-link text-white fs-5 font-weight-semiBold">
                        <ExportIcons.Dados className='me-2 colorIconWhite' />
                        Dados
                    </a>

                    <ul className="nav nav-pills flex-column mb-auto pt-1">
                        <li className="nav-item">
                            <a className="nav-link rounded-0 rounded-start fw-normal text-white ps-5">
                                <ExportIcons.Ver className='me-2 colorIconWhite' />
                                Ver dados
                            </a>
                        </li>
                    </ul>

                </li>

                <hr />

                <div className="dropdown">
                    <a className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                        id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <strong>Mariana de Lurdes</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item">Sair</a></li>
                    </ul>
                </div>

            </ul>

        </nav>
    );
}