import React from 'react';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import TablesClientes from '../../../Components/Dashboard/TableClientes';

export default function Main() {
    return (  
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid changeSpace">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">

                            <BreadcrumbsDashboard route2="Clientes" />

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Novo Cliente" to="/dashboard/novo-cliente"/>
                            </div>

                            <div className='col-12'>
                                <div className='row pt-5'>

                                    <TablesClientes />

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
}