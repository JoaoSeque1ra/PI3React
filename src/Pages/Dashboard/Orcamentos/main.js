import React from 'react';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import TableMd from '../../../Components/Dashboard/Table/TableMd';
import TableLg from '../../../Components/Dashboard/Table/TableLg';

export default function Main() {
    return (  
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid">
                <div className="row mt-5">

                    <div class="col-lg-10 offset-lg-1">
                        <div class="row">

                            <BreadcrumbsDashboard route2="Orçamentos"/>

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Novo Orçamento"/>
                            </div>

                            <div class="col-12">
                                <div class="row pt-5">

                                    <TableMd campo1="Orçamento" campo2="Nome" campo3="Total" campo4="Ações"/>

                                    <TableLg campo1="Orçamento" campo2="Nome" campo3="Data" campo4="Estado" campo5="Total" campo6="Ações"/>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
}