import React, {useEffect} from 'react';

import Navbar from '../../../Components/NavbarClient';
import Main from './main';

export function Website() {
    useEffect(()=>{
        document.title='Website'
    })

    return (  
        <>
            <Navbar />
            <Main />
        </>
    );
}