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

                            <BreadcrumbsDashboard route1="Preços" route2="/ Website &#38; Loja Online" />

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar"/>
                            </div>

                            {/* Website */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12 ps-lg-4 fs-4 font-weight-semiBold">
                                        Website
                                    </div>

                                    <div className="col-12">
                                        <div className="row pt-4">
                                            
                                            <div className="col-md-12 col-lg-2 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                1.Número de páginas
                                            </div>

                                            <PacksInput nomePack="&lsaquo;5 páginas" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("1: ")}/>

                                            <PacksInput nomePack="&lsaquo;10 páginas" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("2: ")}/>

                                            <PacksInput nomePack="&rsaquo;10 páginas" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("3: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                2.Website
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                3.Landing page
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                4.Portfólio
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                5.Criação de conteúdos textuais
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                6.Com alojamento
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                7.Com domínio
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Lojas Online | E-Commerce */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12 ps-lg-4 fs-4 font-weight-semiBold">
                                        Lojas Online | E-Commerce
                                    </div>

                                    <div className="col-12">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                1.Número de páginas
                                            </div>

                                            <PacksInput nomePack="&lsaquo;5 páginas" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("1: ")}/>

                                            <PacksInput nomePack="&lsaquo;10 páginas" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("2: ")}/>

                                            <PacksInput nomePack="&rsaquo;10 páginas" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("3: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="row pt-5">

                                            <div className="col-12 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                2.Com integração
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.1.Produtos
                                                    </div>

                                                    <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.2.Contactos
                                                    </div>

                                                    <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.3.Equipas
                                                    </div>

                                                    <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.4.Outros
                                                    </div>

                                                    <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="row pt-5">

                                            <div className="col-12 col-lg-6">
                                                <div className="row pt-4">

                                                    <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                        3.Com domínio
                                                    </div>

                                                    <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6">
                                                <div className="row pt-4">

                                                    <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                        4.Com alojamento
                                                    </div>

                                                    <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 col-lg-6">
                                                <div className="row pt-4">

                                                    <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                        5.Com criação de conteúdos textuais
                                                    </div>

                                                    <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Suporte & Manutenção */}
                            {/* Servidor & Domínio */}

                            <div className="col-12 my-5">
                                <div className="row gx-5">

                                    <div className="col-12 col-lg-6">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Suporte &#38; Manutenção
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Servidor &#38; Domínio
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
}