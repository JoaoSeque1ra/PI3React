import React from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import RedesSociaisIcons from '../../../Components/RedesSociaisIcons';
import OptionsPacks from '../../../Components/OptionsPacks';
import CheckBoxMini from '../../../Components/CheckBoxMini';

export default function Main() {
    return (  
        <main className='container-fluid'>
            <div className='row vh-100'>

                <div className='col-md-12 col-lg-7 pt-pageLeft'>
                    <div className='row'>

                        <Breadcrumbs route1="Orçamento / Marketing Digital / Gestão redes sociais" route2=" / Personalizar" textColor="text-blue" />

                        <div className="col-md-12 col-lg-10 offset-lg-1">

                            <div className="card border-0 border-0 bg-cardColorOpacity mt-5">
                                <div className="card-body">

                                    <h5 className="card-title mt-2 text-blue">Redes Sociais</h5>
                                    <h6 className="card-subtitle mb-5 fw-light"> 
                                        Selecione as redes sócias onde pretende que sejam feitas publicações
                                    </h6>
                                    
                                    <div className="container-fluid">
                                        <div className="row">

                                        <RedesSociaisIcons nome="facebook" />

                                        <RedesSociaisIcons nome="insta" />

                                        <RedesSociaisIcons nome="twitter" />

                                        <RedesSociaisIcons nome="tiktok" />

                                        <RedesSociaisIcons nome="pint" />

                                        <RedesSociaisIcons nome="google" />

                                        <RedesSociaisIcons nome="link" />
                                        
                                        <RedesSociaisIcons nome="youtube" />

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="card border-0 border-0 bg-cardColorOpacity mt-5">
                                <div className="card-body">

                                    <h5 className="card-title mt-2 text-blue">Publicações</h5>
                                    <h6 className="card-subtitle mb-5 fw-light"> 
                                        Qual a quantidade que pretende por semana?
                                    </h6>
                                    
                                    <div className="container-fluid">
                                        <div className="row">

                                            <OptionsPacks text="Publicações por semana:" tamanho={15} />
                                            <div className='col-12 my-3 fs-6 fw-light'>
                                                Descrição do que são publicações por semana
                                            </div>

                                            <OptionsPacks text="Stories por semana:" tamanho={10} />
                                            <div className='col-12 my-3 fs-6 fw-light'>
                                                Descrição do que são stories por semana
                                            </div>

                                            <OptionsPacks text="Reels por semana:" tamanho={7} />
                                            <div className='col-12 my-3 fs-6 fw-light'>
                                                Descrição do que são reels por semana
                                            </div>

                                        </div>
                                    </div>

                                    

                                </div>
                            </div>

                            <div className="card border-0 border-0 bg-cardColorOpacity my-5">
                                <div className="card-body">

                                    <h5 className="card-title mt-2 text-blue">Serviços</h5>
                                    <h6 className="card-subtitle mb-5 fw-light"> 
                                        Selecione outros serviços para o seu pack
                                    </h6>
                                    
                                    <div className="container-fluid">
                                        <div className="row">

                                            <CheckBoxMini text="Design para publicações" id="designPublicacoes"/>

                                            <CheckBoxMini text="Cover" id="cover"/>

                                            <CheckBoxMini text="Capa" id="capa"/>

                                            <CheckBoxMini text="Copywriting" id="copywriting"/>

                                            <CheckBoxMini text="Planificação Digital" id="planificacaoDigital"/>

                                            <CheckBoxMini text="Consultoria Digital" id="consultoriaDigital"/>

                                            <CheckBoxMini text="Gestão de Campanhas" id="gestaoCampanhas"/>

                                            <CheckBoxMini text="Relatório Mensal" id="relatorioMensal"/>

                                        </div>
                                    </div>

                                    

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="col-md-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center bg-blue pt-pageRight position-fixed end-0 vh-100">
                        <div className="row">
                            <div className="col-md-auto">
                                <img src={""} className="img-fluid" alt="Marketing Digital Imagem" />
                            </div>
                        </div>
                    </div>

            </div>
        </main>
    );
}