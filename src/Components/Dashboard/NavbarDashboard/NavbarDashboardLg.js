import React from 'react';

import Brand from '../../../Assets/Images/logotipoincommun.png';
import NavbarItem from './NavbarItem';

import { Link } from 'react-router-dom';

export default function NavbarDashboardLg() {
    return (
        <nav className="sticky-top flex-column flex-shrink-0 ps-3 py-3 text-white bg-gray vh-100 d-none d-lg-flex" style={{ width: "280px" }} >

            <a className="mb-md-0 me-md-auto text-white text-decoration-none">
                <img src={Brand} width="180" className="d-none d-md-block cursor-pointer" alt="incommun" />
            </a>

            <hr />

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

                </li>

            </ul>

            <hr />

            <div className="dropdown">
                <a className="d-flex align-items-center text-white text-decoration-none dropdown-toggle cursor-pointer"
                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <strong>Mariana de Lurdes</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item">Sair</a></li>
                </ul>
            </div>

        </nav>
    );
}