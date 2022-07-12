import React, { useEffect } from 'react';

import NavbarDashboardMd from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardMd';
import Main from './main';

export function DesignGrafico() {
    useEffect(()=>{
        document.title='Dashboard - Design Gráfico'
    })

    return (  
        <>
            <NavbarDashboardMd />
            <Main />
        </>
    );
}