import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Brand from '../../../Assets/Images/logotipoincommun.png';
import LoginImage from '../../../Assets/Images/login.png'

export function Login() {
    useEffect(()=>{
        document.title='Dashboard - Login'
    })

    return (  
        <main className='bg-gray'>
            <div class="container-fluid">
                <div class="row vh-100">

                    <div class="col-md-12 col-lg-5 d-md-flex justify-content-center align-items-center bg-white pt-pageRight d-none d-md-block order-md-2 order-lg-1">
                        <div class="row">

                            <div class="col-md-auto d-flex justify-content-center">                                  
                                <img src={LoginImage} class="img-fluid" alt="Login" />
                            </div>

                        </div>
                    </div>

                    <div class="col-md-12 col-lg-7 align-self-center pt-pageLeft order-lg-2">
                        <div class="row">

                            <div class="col-md-12 col-lg-8 offset-lg-2 d-md-flex justify-content-center font-weight-semiBold font-size-1__5rem">
                                <img src={Brand} alt="Logo Incommun" width="300"/>
                            </div>

                            <div class="col-md-12 col-lg-8 offset-lg-2">

                                <div class="mt-5">
                                    <div class="input-group input-group-lg border cursor-pointer ">

                                        <input type="email" class="form-control cursor-pointer border-0 rounded-0" placeholder="Email" />

                                    </div>
                                </div>

                                <div class="my-5">
                                    <div class="input-group input-group-lg border cursor-pointer ">
                                        <input type="password" class="form-control cursor-pointer border-0 rounded-0" placeholder="Palavra-Passe" />
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-5 offset-md-7 col-lg-6 offset-lg-4 text-end mb-5">
                                <button type="button" class="btn btn-transparent text-white btn-lg rounded-0">Registar</button>
                                <Link to={"/dashboard"} class="btn btn-light btn-lg rounded-0">Entrar</Link>
                            </div>

                        </div>
                    </div>  
                    
                </div> 
            </div>
        </main>
    );
}