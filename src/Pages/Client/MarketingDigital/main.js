import React, { useState } from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import CheckBox from '../../../Components/CheckBox';
import CardsCheckBox from '../../../Components/CardsCheckBox';
import Buttons from '../../../Components/Buttons';

import ImagemMarketingDigital from "../../../Assets/Images/marketingdigital_banner2.png";

export default function Main() {
    const [gestaoRedesSociais, setGestaoRedesSociais] = useState(false)
    const [paidMedia, setPaidMedia] = useState(false)
    const [emialSMS, setEmailSMS] = useState(false)
    const [seoSem, setSeoSem] = useState(false)

    return (
        <main>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row">
                            <Breadcrumbs route1="Orçamento" route2="/ Marketing Digital" textColor="text-yellow"/>

                            <div className="col-md-12 col-lg-10 offset-lg-1">
                                <CheckBox onClick={valeu=>setGestaoRedesSociais(valeu.target.checked)} isActive={gestaoRedesSociais} name="Gestão de redes Sociais" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                                <CardsCheckBox text="Responsabilizamos-nos pelo planeamento e pela estratégia nos social media." />

                                <CheckBox onClick={valeu=>setPaidMedia(valeu.target.checked)} isActive={paidMedia} name="Paid Media" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                                <CardsCheckBox text="Consiste na promoção de conteúdo, recorrendo a anúncios pagos, para aumentar a exposição dos conteúdos que a empresa controla (como o site, por exemplo)."/>

                                <CheckBox onClick={valeu=>setEmailSMS(valeu.target.checked)} isActive={emialSMS} name="Email &#38; SMS marketing" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                                <CardsCheckBox text="Utilização do Email e SMS&#39;s como ferramentas para ações de marketing. 
                                Normalmente está associado à utilização de newsletters online."/>

                                <CheckBox onClick={valeu=>setSeoSem(valeu.target.checked)} isActive={seoSem} name="Otimização SEO e SEM" color="bg-checkBoxYellow" colorIcon="colorIconYellow" textColor="text-yellow" />
                                <CardsCheckBox text="Conjunto de técnicas para otimizar a presença na web para motores de pesquisa, aumentando visitas e conversões orgânicas"/>


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
                                <img src={ImagemMarketingDigital} className="img-fluid" alt="Marketing Digital Imagem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}