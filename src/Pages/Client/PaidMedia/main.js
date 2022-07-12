import React from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import Buttons from '../../../Components/Buttons';

export default function Main() {
    return (
        <main>
            <div className="container-fluid">
                <div className="row">

                    <div className="pt-pageLeft">
                        <Breadcrumbs route1="Orçamento" route2="/ Marketing Digital / Paid Media" textColor="text-yellow"/>
                    </div>

                    <div className="col-12 offset-lg-1 col-lg-10">
                        <div className="row">

                            <div className="col-md-6 col-lg-3 mb-5 mt-2">
                                <div className="card text-center h-100 border-warning mt-5" style={{ borderRadius: "3rem", maxHeight:"44rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title mb-5 mt-2 fw-bolder">Facebook/ Instagram Ads</h5>
                                        <h6 className="card-subtitle text-muted">Plano Mensal</h6>
                                        <p className="card-text mb-3 text-yellow fw-bold">BASIC</p>
                                        <p className="card-text mb-3">Estratégia Digital</p>
                                        <p className="card-text mb-3">Criação de campanhas e anúncios </p>
                                        <p className="card-text mb-3">Segmentação do público</p>
                                        <p className="card-text mb-3">Otimização da Campanha</p>
                                        <p className="card-text mb-3">Relatório mensal</p>
                                    </div>
                            
                                </div>
                                <div className="text-center mt-3 mb-2">
                                    <Buttons color="btn-yellow" text="Selecionar"/>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-3 mb-5 mt-2">
                                <div className="card text-center h-100 border-warning mt-5" style={{ borderRadius: "3rem", maxHeight:"44rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title mb-5 mt-2 fw-bolder">Google Ads</h5>
                                        <h6 className="card-subtitle text-muted">Plano Mensal</h6>
                                        <p className="card-text mb-3 text-yellow fw-bold">PREMIUM</p>
                                        <p className="card-text mb-3">Estratégia Digital</p>
                                        <p className="card-text mb-3">Pesquisa de keywords </p>
                                        <p className="card-text mb-3">Criação de campanhas e grupos de anúncios </p>
                                        <p className="card-text mb-3">Otimização de anúncios</p>
                                        <p className="card-text mb-3">Criação de Conversões com o Google Tag Manager </p>
                                        <p className="card-text mb-3"> Relatório Mensal</p>
                                    </div>
                            
                                </div>
                                <div className="text-center mt-3 mb-2">
                                    <Buttons color="btn-yellow" text="Selecionar"/>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 mb-5 mt-2">
                                <div className="card text-center h-100 border-warning mt-5" style={{ borderRadius: "3rem", maxHeight:"44rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title mb-5 mt-2 fw-bolder">Facebook/Instagram &#38; Google Ads</h5>
                                        <h6 className="card-subtitle text-muted">Plano Mensal</h6>
                                        <p className="card-text mb-3 text-yellow fw-bold">PROFESSIONAL</p>
                                        <p className="card-text mb-3">Estratégia Digital</p>
                                        <p className="card-text mb-3">Gestão de campanhas Facebook/Instagram Ads </p>
                                        <p className="card-text mb-3">Gestão de campanhas Google Ads</p>
                                        <p className="card-text mb-3">Criação de Conversões com o Google Tag Manager  </p>
                                        <p className="card-text mb-3">Relatório mensal</p>
                                    </div>
                            
                            
                                </div>
                                <div className="text-center mt-3 mb-2">
                                    <Buttons color="btn-yellow" text="Selecionar"/>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-3 mb-5 mt-2">
                                <div className="card text-center h-100 border-warning bg-yellow mt-5" style={{ borderRadius: "3rem", maxHeight:"44rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title mb-5 mt-2 fw-bolder"> Facebook/Instagram Google Ads</h5>
                                        <h6 className="card-subtitle text-muted">Plano Mensal/Anual</h6>
                                        <p className="card-text mb-3 text-white fw-bold">PERSONALIZADO</p>
                                        <p className="card-text mb-3">Estratégia Digital</p>
                                        <p className="card-text mb-3">Gestão de campanhas Facebook/Instagram Ads </p>
                                        <p className="card-text mb-3">Gestão de campanhas Google Ads</p>
                                        <p className="card-text mb-3">Criação de Conversões com o Google Tag Manager  </p>
                                        <p className="card-text mb-3">Relatório mensal</p>
                                    </div>
                        
                                </div>
                                <div className="text-center mt-3 mb-2">
                                    <Buttons color="btn-yellow" text="Selecionar"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}