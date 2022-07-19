import React, {useEffect} from 'react';

import Navbar from '../../../Components/NavbarClient';
import Main from './main';

export function Home() {
    useEffect(()=>{
        document.title='Orçamento'
    })

    return ( 
        <>
            <Navbar />
            <Main />
        </>     
    );
}