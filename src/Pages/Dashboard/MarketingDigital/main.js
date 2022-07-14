import React from 'react';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import PacksInput from '../../../Components/Dashboard/PacksInput';

export default function Main() {
    return (  
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <BreadcrumbsDashboard route1="Preços" route2="/ Marketing Digital"/>

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar"/>
                            </div>

                            {/* Gestão de redes Sociais */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12">
                                        <div className="row">

                                            <div className="col-12 ps-lg-4 fs-4 font-weight-semiBold">
                                                Gestão de redes Sociais
                                            </div>

                                            <div className="col-md-12 col-lg-2 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                1.Packs
                                            </div>

                                            <PacksInput nomePack="Start" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("1: ")}/>

                                            <PacksInput nomePack="Boost" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("2: ")}/>

                                            <PacksInput nomePack="Bomb" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("3: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="row pt-4">

                                            <div className="col-12 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                2.Pack Personalizado
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.1.Facebook
                                                    </div>

                                                    <PacksInput nomePack="Por publicação" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Por storie" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Por reel" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.2.Instagram
                                                    </div>

                                                    <PacksInput nomePack="Por publicação" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Por storie" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Por reel" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.3.Twitter
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Por storie" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Por reel" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.4.TikTok
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Por storie" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Por reel" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.5.Linkedin
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Por storie" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Por reel" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.6.Youtube
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Por storie" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Por reel" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.7.Google My Business
                                                    </div>
            
                                                    <PacksInput nomePack="Por publicação" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Por storie" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Por reel" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.8.Cover
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.9.Design para publicações
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.10.Copywriting
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.11.Planificação Editorial
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.12.Consultoria Digital
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.13.Gestão de Campanhas
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 ps-lg-5">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                2.14.Relatório Mensal
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>
                                    
                               </div>
                            </div>

                            {/* Paid Media */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">
                                    
                                    <div className="col-12 ps-lg-4 fs-4 font-weight-semiBold">
                                        Paid Media
                                    </div>

                                    <div className="col-12">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                1.Packs
                                            </div>

                                            <PacksInput nomePack="Start" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                            <PacksInput nomePack="Boost" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                            <PacksInput nomePack="Bomb" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="row py-4">

                                            <div className="col-12 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                2.Pack Personalizado
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.1.Estratégia Digital
                                                    </div>

                                                    <PacksInput nomePack="Facebook" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Instagram" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Google" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.2.Criação de campanhas e anúncios
                                                    </div>

                                                    <PacksInput nomePack="Facebook" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Instagram" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Google" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.3.Segmentação do público
                                                    </div>

                                                    <PacksInput nomePack="Facebook" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Instagram" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Google" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.4.Otimização de campanha
                                                    </div>

                                                    <PacksInput nomePack="Facebook" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Instagram" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Google" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.5.Relatório mensal
                                                    </div>

                                                    <PacksInput nomePack="Facebook" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Instagram" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Google" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.6.Criação de conversões c/Google Tag Manager
                                                    </div>

                                                    <PacksInput nomePack="Facebook" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Instagram" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Google" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.7.Gestão de campanhas
                                                    </div>

                                                    <PacksInput nomePack="Facebook" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="Instagram" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="Google" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Email & SMS Marketing */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12 ps-lg-4 fs-4 font-weight-semiBold">
                                        Email &#38; SMS Marketing
                                    </div>

                                    <div className="col-12">
                                        <div className="row pt-4">

                                            <div className="col-md-12 col-lg-2 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                1.Packs
                                            </div>

                                            <PacksInput nomePack="Start" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                            <PacksInput nomePack="Boost" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                            <PacksInput nomePack="Bomb" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="row py-4">

                                            <div className="col-12 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                2.Pack Personalizado
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.1.Email Marketing <br />
                                                        <span className="fw-light">(envios)</span>
                                                    </div>

                                                    <PacksInput nomePack="1 000 Emails" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="5 000 Emails" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="10 000 Emails" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.2.SMS Marketing<br/>
                                                        <span className="fw-light">(envios)</span>
                                                    </div>

                                                    <PacksInput nomePack="1 000 sms" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                    <PacksInput nomePack="5 000 sms" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("5: ")}/>

                                                    <PacksInput nomePack="10 000 sms" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("6: ")}/>

                                                </div>
                                            </div>

                                            <div className="col-12 ps-lg-5">
                                                <div className="row pt-4">

                                                    <div className="col-md-12 col-lg-2 ps-lg-5 align-self-center text-break">
                                                        2.3.Gestão newsletter
                                                    </div>

                                                    <PacksInput nomePack="1 000 Emails" valor="0,00&#8364;" className="col-lg-2" onChange={()=> console.count("4: ")}/>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Otimização & SEM */}

                            <div className="col-12 my-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12 ps-lg-4 fs-4 font-weight-semiBold">
                                        Otimização SEO &#38; SEM
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                1.SEO Técnico
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                2.SEO On-Page
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                3.Conteúdos
                                            </div>

                                            <PacksInput valor="0,00&#8364;" className="col-lg-4" onChange={()=> console.count("4: ")}/>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row pt-4">

                                            <div className="col-12 col-lg-4 ps-lg-5 fs-5 font-weight-medium align-self-center text-break">
                                                4.Copywriting
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