import React from 'react';

import Brand from '../../../Assets/Images/logotipoincommun.png';
import NavbarItem from './NavbarItem';

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

                    <NavbarItem text="Preços" font="fs-5 font-weight-semiBold" />


                    <ul className="nav nav-pills flex-column mb-auto pt-1">

                        <NavbarItem text="Marketing Digital" font="fw-normal ps-5" />

                        <NavbarItem text="Design Gráfico" font="fw-normal ps-5" />

                        <NavbarItem text="Website &#38; Loja Online" font="fw-normal ps-5" />

                        <NavbarItem text="Comunicação &#38; Consultoria" font="fw-normal ps-5" />

                    </ul>
                </li>
                <li className="pt-4">

                    <NavbarItem text="Orçamento" font="fs-5 font-weight-semiBold" />

                    <ul className="nav nav-pills flex-column mb-auto pt-1">

                        <NavbarItem text="Ver orçamentos" font="fw-normal ps-5" />

                        <NavbarItem text="Novo orçamento" font="fw-normal ps-5" />

                    </ul>
                </li>
                <li className="pt-4">

                    <NavbarItem text="Cliente" font="fs-5 font-weight-semiBold" />

                    <ul className="nav nav-pills flex-column mb-auto pt-1">

                        <NavbarItem text="Ver clientes" font="fw-normal ps-5" />

                        <NavbarItem text="Novo cliente" font="fw-normal ps-5" />

                    </ul>
                </li>
                <li className="pt-4">

                    <NavbarItem text="Dados" font="fs-5 font-weight-semiBold" />

                    <ul className="nav nav-pills flex-column mb-auto pt-1">
                        
                        <NavbarItem text="Ver dados" font="fw-normal ps-5" />

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
