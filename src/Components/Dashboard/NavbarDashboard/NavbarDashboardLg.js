import React from 'react';

import Brand from '../../../Assets/Images/logotipoincommun.png';
import NavbarItem from './NavbarItem';

import { Link } from 'react-router-dom';

export default function NavbarDashboardLg() {
    return (
        <nav className="fixed-top flex-column flex-shrink-0 ps-3 py-3 text-white bg-gray vh-100 d-none d-lg-flex" style={{ width: "280px" }} >

            <Link className='mb-md-0 me-md-auto text-white text-decoration-none' to={"/dashboard"}>
                <img src={Brand} width="180" className="d-none d-md-block cursor-pointer" alt="incommun" />
            </Link>

            <hr />

            <ul className="nav nav-pills flex-column mb-auto">

                <li className="nav-item">

                    <NavbarItem text="Preços" font="fs-5 font-weight-semiBold" />

                    <ul className="nav nav-pills flex-column mb-auto pt-1">

                        <NavbarItem text="Marketing Digital" font="fw-normal ps-5" route="marketing-digital"/>

                        <NavbarItem text="Design Gráfico" font="fw-normal ps-5" route="design-grafico"/>

                        <NavbarItem text="Website &#38; Loja Online" font="fw-normal ps-5" route="website-loja-online"/>

                        <NavbarItem text="Comunicação &#38; Consultoria" font="fw-normal ps-5" route="comunicacao-consultoria"/>

                    </ul>

                </li>

                <li className="pt-4">

                    <NavbarItem text="Orçamento" font="fs-5 font-weight-semiBold" />

                    <ul className="nav nav-pills flex-column mb-auto pt-1">

                        <NavbarItem text="Ver orçamentos" font="fw-normal ps-5" route="ver-orcamentos"/>

                        {/* <NavbarItem text="Novo orçamento" font="fw-normal ps-5" route=""/> */}

                    </ul>

                </li>

                <li className="pt-4">

                    <NavbarItem text="Cliente" font="fs-5 font-weight-semiBold" />

                    <ul className="nav nav-pills flex-column mb-auto pt-1">

                        <NavbarItem text="Ver clientes" font="fw-normal ps-5" route="ver-clientes"/>

                        <NavbarItem text="Novo cliente" font="fw-normal ps-5" route="novo-cliente"/>

                    </ul>

                </li>

                {/* <li className="pt-4">

                    <NavbarItem text="Dados" font="fs-5 font-weight-semiBold" />

                    <ul className="nav nav-pills flex-column mb-auto pt-1">

                        <NavbarItem text="Ver dados" font="fw-normal ps-5" route=""/>

                    </ul>

                </li> */}

            </ul>

            <hr />

            <div className="dropdown">
                <div className="d-flex align-items-center text-white text-decoration-none dropdown-toggle cursor-pointer"
                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <strong>Mariana de Lurdes</strong>
                </div>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li>
                        <div className="dropdown-item">Sair</div>
                    </li>
                </ul>
            </div>

        </nav>
    );
}