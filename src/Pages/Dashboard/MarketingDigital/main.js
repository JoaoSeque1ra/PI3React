import React from 'react';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';

export default function Main() {
    return (  
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div class="container-fluid">
                <div class="row mt-5">

                    <div class="col-lg-10 offset-lg-1">
                        <div class="row">
                            <BreadcrumbsDashboard route1="Preços" route2="/ Marketing Digital"/>

                            <div class="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar"/>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}