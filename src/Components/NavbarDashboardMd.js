import React from 'react';

import Brand from "../Assets/Images/logotipoincommun.png";

import ExportIcons from '../Helpers/ExportIcons';

export default function NavbarDashboardMd() {
    return (
    <nav className="position-sticky top-0 navbar navbar-dark bg-gray d-flex d-lg-none">
    <div className="container-fluid">

        <a className="navbar-brand" href="#">
            <img src={Brand} alt="Incommun" height="24" className="d-inline-block align-text-top" />
        </a>

        <button className="navbar-toggler ms-auto border-0" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    </div>

    <div className="collapse" id="navbarToggleExternalContent">
        <div className="barNav"></div>

        <div className="bg-gray p-4">
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
                                Novo cliente
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

                    <ul className="nav nav-pills flex-column mb-auto pt-5">
                        <li className="nav-item">
                            <a className="nav-link rounded-0 rounded-start fw-normal text-white">
                                Sair
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
</nav>);
}
