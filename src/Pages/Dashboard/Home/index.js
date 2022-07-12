import React, { useEffect } from 'react';

import NavbarDashboardMd from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardMd';
import Main from './main';

export function Home() {
    useEffect(() => {
        document.title='Dashboard'
    })

    return ( 
        <>
            <NavbarDashboardMd />
            <Main />
        </> 
    );
}