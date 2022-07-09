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
                        <Breadcrumbs route="/ Marketing Digital / Gestão de Redes Sociais" textColor="text-yellow"/>

                        <div className="col-md-12 offset-lg-1 col-lg-2">
                            <div className='mt-5'>
                                <div className="card card-paidmedia-gestaoredessociais">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mt-3 text-muted">Plano Mensal</h6>
                                        <p className="card-text mb-5 text-yellow fw-bold">START</p>
                                        <p className="card-text">2 redes sociais</p>
                                        <p className="card-text">2 posts/semana</p>
                                        <p className="card-text">2 stories/semana</p>
                                        <p className="card-text">1 cover | capa</p>
                                        <p className="card-text">Design gráfico</p>
                                        <p className="card-text">Copywriting</p>
                                        <p className="card-text"> X Planificação editorial</p>
                                        <p className="card-text"> X Consultoria Digital</p>
                                        <p className="card-text"> X Gestão de campanhas</p>
                                        <p className="card-text"> X Relatório estatístico</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-2 text-center mt-3 mb-5 mt-5">
                                <Buttons color="btn-yellow" text="Selecionar"/>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-2">
                            <div className="mt-5">
                                <div className="card card-paidmedia-gestaoredessociais">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mt-3 text-muted">Plano Mensal</h6>
                                        <p className="card-text mb-5 text-yellow fw-bold">BOOST</p>
                                        <p className="card-text mb-3">3 redes sociais</p>
                                        <p className="card-text mb-3">3 posts/semana </p>
                                        <p className="card-text mb-3">3 stories/semana</p>
                                        <p className="card-text mb-3">1 cover | capa</p>
                                        <p className="card-text mb-3">Design gráfico</p>
                                        <p className="card-text mb-3">Copywriting</p>
                                        <p className="card-text mb-3"> - Planificação editorial</p>
                                        <p className="card-text mb-3"> X Consultoria Digital</p>
                                        <p className="card-text mb-3"> X Gestão de campanhas</p>
                                        <p className="card-text mb-3"> X Relatório estatístico</p>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-2 text-center mt-3 mb-5 mt-5">
                                    <Buttons color="btn-yellow" text="Selecionar"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-2">
                            <div className="mt-5">
                                <div className="card card-paidmedia-gestaoredessociais">
                                    <div className="card-body">
                                    <h6 className="card-subtitle mt-3 text-muted">Plano Mensal</h6>
                                    <p className="card-text mb-5 text-yellow fw-bold">BOMB</p>
                                    <p className="card-text mb-3">3+ redes sociais</p>
                                    <p className="card-text mb-3">5 posts/semana</p>
                                    <p className="card-text mb-3">5 stories/semana</p>
                                    <p className="card-text mb-3">1 cover | capa </p>
                                    <p className="card-text mb-3">Design gráfico</p>
                                    <p className="card-text mb-3">Copywriting</p>
                                    <p className="card-text mb-3"> - Planificação editorial</p>
                                    <p className="card-text mb-3"> - Consultoria Digital</p>
                                    <p className="card-text mb-3"> - Gestão de campanhas</p>
                                    <p className="card-text mb-3"> - Relatório estatístico</p>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-2 text-center mt-3 mb-5 mt-5">
                                    <Buttons color="btn-yellow" text="Selecionar"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-2">
                            <div className="mt-5">
                                <div className="card card-paidmedia-gestaoredessociais bg-yellow">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mt-3 text-muted">Plano Mensal/Anual</h6>
                                        <p className="card-text mb-5 text-white fw-bold">PERSONALIZADO</p>
                                        <p className="card-text mb-3">nº redes sociais</p>
                                        <p className="card-text mb-3">nº posts/semana</p>
                                        <p className="card-text mb-3">nº stories/semana</p>
                                        <p className="card-text mb-3">nº cover | capa</p>
                                        <p className="card-text mb-3">Design gráfico</p>
                                        <p className="card-text mb-3">Copywriting</p>
                                        <p className="card-text mb-3"> - Planificação editorial</p>
                                        <p className="card-text mb-3"> - Consultoria Digital</p>
                                        <p className="card-text mb-3"> - Gestão de campanhas</p>
                                        <p className="card-text mb-3"> - Relatório estatístico</p>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-2 text-center mb-5 mt-5">
                                    <Buttons color="btn-yellow" text="Selecionar"/>
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