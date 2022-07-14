import React, { useEffect } from 'react';

import NavbarDashboardMd from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardMd';
import Main from '../MarketingDigital/main';

export function MarketingDigital() {
    useEffect(() => {
        document.title='Dashboard - Marketing Digital'
    })

    return (  
        <>
            <NavbarDashboardMd />
            <Main />
        </>
    );
}