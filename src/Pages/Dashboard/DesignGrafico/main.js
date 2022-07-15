import React from 'react';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import PacksInput from '../../../Components/Dashboard/PacksInput';


export default function Main() {
    return (  
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid changeSpace">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">

                            <BreadcrumbsDashboard route1="Preços" route2="/ Design Gráfico" />

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar"/>
                            </div>

                            {/* Identidade Visual */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12 ps-lg-4 fs-4 font-weight-semiBold">
                                        Identidade Visual
                                    </div>

                                    <div className="col-12">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                1.Criação de Logótipo
                                            </div>

                                            <PacksInput nomePack="2 Propostas" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("1: ")}/>

                                            <PacksInput nomePack="4 Propostas" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("1: ")}/>

                                            <PacksInput nomePack="5 Propostas" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("1: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                2.Análise da concorrência
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                3.Paleta de cores
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                4.Slogan para marca
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                5.Manual normas gráficas
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                6.Estacionário
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Branding & Rebranding */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12 ps-lg-4 fs-4 font-weight-semiBold">
                                        Branding &#38; Rebranding
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                1.Branding
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                2.Rebranding
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Estratégia de marca */}
                            
                            <div className="col-12 ps-lg-4 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-md-12 col-lg-2 fs-4 font-weight-semiBold text-break">
                                        Estratégia de marca
                                    </div>

                                    <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>
                                    
                                </div>
                            </div>

                            {/* Registo de marca */}
                            
                            <div className="col-12 ps-lg-4 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-md-12 col-lg-2 fs-4 font-weight-semiBold text-break">
                                        Registo de marca
                                    </div>

                                    <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>
                                    
                                </div>
                            </div>

                            {/* Design editorial */}
                            
                            <div className="col-12 ps-lg-4 my-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-md-12 col-lg-2 fs-4 font-weight-semiBold text-break">
                                        Design editorial
                                    </div>

                                    <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>
                                    
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
}