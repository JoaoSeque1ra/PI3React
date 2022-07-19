import React, {useEffect} from 'react';

import Navbar from '../../../Components/NavbarClient';
import Main from './main';

export function PaidMedia() {
    useEffect(()=>{
        document.title='Paid Meda'
    })

    return (  
        <>
            <Navbar />
            <Main />
        </>
    );
}