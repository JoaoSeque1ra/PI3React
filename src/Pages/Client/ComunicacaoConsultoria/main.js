import React from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import CheckBox from '../../../Components/CheckBox';
import CardsCheckBox from '../../../Components/CardsCheckBox';
import Buttons from '../../../Components/Buttons';

import ImagemComunicacaoConsultoria from "../../../Assets/Images/banner_comunicacao .jpg";

export default function Main() {
    return(
        <main>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row">
                            <Breadcrumbs route="/ Comunicação &#38; Consultoria" textColor="text-yellow"/>

                            <div className="col-md-12 col-lg-10 offset-lg-1">
                                <CheckBox name="Marketing e Comunicação" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                                <CardsCheckBox text="Consultoria é o acompanhamento ao nosso cliente em planos de comunicação publicidade e marketing.
                                Desenhamos uma estratégia adaptada ao nosso cliente que são apresentadas e discutidas para objetivos
                                positivos e lineares." />

                                <CheckBox name="Organização de eventos" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                                <CardsCheckBox text="Planeamos e organizamos juntos um evento memorável para celebrar o aniversário da sua empresa ou
                                datas importantes."/>

                                <CheckBox name="Assessoria e criação de conteúdo" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                                <CardsCheckBox text="Ligado ao marketing digital, assessoria de impressa procura criar uma boa relação com os canais de
                                informação e assim dessa forma gerar tráfego para a empresa."/>

                            </div>

                            <div className="col-md-5 offset-md-7 col-lg-6 offset-lg-5 text-end my-5">
                                <Buttons color="btn-transparent" text="Anterior" />
                                <Buttons color="btn-yellow" text="Seguinte" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center bg-yellow pt-pageRight position-fixed end-0 vh-100">
                        <div className="row">
                            <div className="col-md-auto">
                                <img src={ImagemComunicacaoConsultoria} className="img-fluid" alt="Marketing Digital Imagem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}