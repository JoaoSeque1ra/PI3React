import React from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import CheckBox from '../../../Components/CheckBox';
import CardsCheckBox from '../../../Components/CardsCheckBox';
import Buttons from '../../../Components/Buttons';

import ImagemWebsiteLojaOnline from "../../../Assets/Images/websites.jpg";

export default function Main() {
    return(
        <main>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row">
                            <Breadcrumbs route1="Orçamento" route2="/ Contactos" textColor="text-purple"/>

                            <div className="col-md-12 col-lg-10 offset-lg-1">
                                <div className="mt-5">
                                    <div className="input-group input-group-lg border cursor-pointer ">
                                        <input type="text" class="form-control cursor-pointer border-0 rounded-0" placeholder="Nome"/>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <div className="input-group input-group-lg border cursor-pointer ">
                                        <input type="text" className="form-control cursor-pointer border-0 rounded-0" placeholder="Email"/>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <div className="input-group input-group-lg border cursor-pointer ">
                                        <input type="text" className="form-control cursor-pointer border-0 rounded-0" placeholder="Telefone"/>
                                    </div>
                                </div>

                                <div className="my-5">
                                    <div className="input-group input-group-lg border cursor-pointer ">
                                        <input type="text" className="form-control cursor-pointer border-0 rounded-0" placeholder="Empresa*"/>
                                    </div>
                                </div>                             
                            </div>

                            <div className="col-md-5 offset-md-7 col-lg-6 offset-lg-5 text-end my-5">
                                <Buttons color="btn-transparent" text="Anterior" />
                                <Buttons color="btn-purple" text="Seguinte" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center bg-purple pt-pageRight position-fixed end-0 vh-100">
                        <div className="row">
                            <div className="col-md-auto">
                                <img src={ImagemWebsiteLojaOnline} className="img-fluid" alt="Marketing Digital Imagem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}