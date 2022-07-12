import React, { useEffect } from 'react';

import NavbarDashboardMd from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardMd';
import Main from './main';

export function WebsiteLojaOnline() {
    useEffect(()=>{
        document.title='Dashboard - Website e Loja Online'
    })
    return (  
        <>
            <NavbarDashboardMd />
            <Main />
        </>
    );
}