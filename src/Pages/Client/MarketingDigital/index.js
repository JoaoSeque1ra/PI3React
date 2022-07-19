import React, {useEffect} from 'react';

import Navbar from '../../../Components/NavbarClient';
import Main from './main';

export function MarketingDigital() {
    useEffect(()=>{
        document.title='Marketing Digital'
    })

    return (  
        <>
            <Navbar />
            <Main />
        </>
    );
}