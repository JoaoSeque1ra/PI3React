import React, {useEffect} from 'react';

import NavbarDashboardMd from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardMd';
import Main from '../CriarCliente/main';

export function CriarCliente() {
    useEffect(()=>{
        document.title='Dashboard - Criar Cliente'
    })

    return (
        <>
            <NavbarDashboardMd />
            <Main />
        </>
    );
}