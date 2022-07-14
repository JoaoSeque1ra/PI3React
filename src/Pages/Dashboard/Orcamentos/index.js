import React, { useEffect } from 'react';

import NavbarDashboardMd from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardMd';
import Main from './main';

export function Orcamentos() {
    useEffect(()=>{
        document.title='Dashboard - Ver Orçamentos'
    })
    return (  
        <>
            <NavbarDashboardMd />
            <Main />
        </>
    );
}