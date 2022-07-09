import React from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import CheckBox from '../../../Components/CheckBox';
import CardsCheckBox from '../../../Components/CardsCheckBox';
import Buttons from '../../../Components/Buttons';

export default function Main() {
    return (
        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row">
                        <Breadcrumbs route="/ Marketing Digital / Paid Media" textColor="text-yellow"/>

                        <div className="col-md-12 offset-lg-1 col-lg-2">
                            <div className='mt-5'>
                                <div className="card card-paidmedia-gestaoredessociais">
                                    <div className="card-body">
                                        <h5 className="card-title mb-5 mt-2 fw-bolder">Facebook/Instagram Ads</h5>
                                        <h6 className="card-subtitle text-muted">Plano Mensal</h6>
                                        <p className="card-text mb-3 text-yellow fw-bold">BASIC</p>
                                        <p className="card-text mb-3">Estratégia Digital</p>
                                        <p className="card-text mb-3">Criação de campanhas e anúncios </p>
                                        <p className="card-text mb-3">Segmentação do público</p>
                                        <p className="card-text mb-3">Otimização da Campanha</p>
                                        <p className="card-text mb-3">Relatório mensal</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-2 text-center mt-3 mb-5 mt-5">
                                <Buttons color="btn-yellow" text="Saber Valores"/>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-2">
                            <div className="mt-5">
                                <div className="card card-paidmedia-gestaoredessociais">
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
                                <div className="col-md-12 col-lg-2 text-center mt-3 mb-5 mt-5">
                                    <Buttons color="btn-yellow" text="Saber Valores"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-2">
                            <div className="mt-5">
                                <div className="card card-paidmedia-gestaoredessociais">
                                    <div className="card-body">
                                        <h5 className="card-title mb-5 mt-2 fw-bolder">Facebook/Instagram & Google Ads</h5>
                                        <h6 className="card-subtitle text-muted">Plano Mensal</h6>
                                        <p className="card-text mb-3 text-yellow fw-bold">PROFESSIONAL</p>
                                        <p className="card-text mb-3">Estratégia Digital</p>
                                        <p className="card-text mb-3">Gestão de campanhas Facebook/Instagram Ads </p>
                                        <p className="card-text mb-3">Gestão de campanhas Google Ads</p>
                                        <p className="card-text mb-3">Criação de Conversões com o Google Tag Manager  </p>
                                        <p className="card-text mb-3">Relatório mensal</p>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-2 text-center mt-3 mb-5 mt-5">
                                    <Buttons color="btn-yellow" text="Saber Valores"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-2">
                            <div className="mt-5">
                                <div className="card card-paidmedia-gestaoredessociais bg-yellow">
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
                                <div className="col-md-12 col-lg-2 text-center mb-5 mt-5">
                                    <Buttons color="btn-yellow" text="Saber Valores"/>
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