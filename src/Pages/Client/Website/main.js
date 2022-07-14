import React, { useState } from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import CheckBox from '../../../Components/CheckBox';
// import CheckBoxNumberPage from '../../../Components/CheckBoxNumberPage';
import CardsCheckBox from '../../../Components/CardsCheckBox';
import Buttons from '../../../Components/Buttons';

import ImagemWebsite from "../../../Assets/Images/lojas_online-1.png";

export default function Main() {
    const [website, setWebsite] = useState(false);
    const [landingPage, setLandingPage] = useState(false);
    const [numeroPaginas, setNumeroPaginas] = useState(0)
    const [comPortfolio, setComPortfolio] = useState(false);
    const [criacaoConteudos, setCriacaoConteudos] = useState(false);
    const [comAlojamento, setComAlojamento] = useState(false);
    const [comDominio, setComDominio] = useState(false);

    return(
        <main>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row">
                            <Breadcrumbs route1="Orçamento" route2="/ Website" textColor="text-purple"/>

                            <div className='col-12 col-lg-10 offset-lg-1'>
                                <div className='row'>

                                    <div className={landingPage ? "d-none" : "col-12 col-lg-6"}>

                                        <CheckBox onClick={valeu=>setWebsite(valeu.target.checked)} isActive={website} name="Website" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />

                                    </div>

                                    <div className={website ? "d-none" : "col-lg-6"}>

                                        <CheckBox onClick={valeu=>setLandingPage(valeu.target.checked)} isActive={landingPage} name="Landing Page" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />

                                    </div>

                                </div>
                            </div>

                            <div className="col-md-12 col-lg-10 offset-lg-1">

                                {/* <CheckBoxNumberPage colorIcon="colorIconWhite"/> */}

                                <CheckBox onClick={valeu=>setComPortfolio(valeu.target.checked)} isActive={comPortfolio} name="Com portfólio" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />
                                <CardsCheckBox text="Um portfolio é uma coleção de trabalhos que ajuda o cliente a perceber o tipo de serviços que a sua empresa já realizou." />

                                <CheckBox onClick={valeu=>setCriacaoConteudos(valeu.target.checked)} isActive={criacaoConteudos} name="Com criação de conteúdos textuais" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />
                                <CardsCheckBox text="Pretende que todos os conteúdos textuais a ser implementados na loja online sejam realizados pela Incommun?" />

                                <CheckBox onClick={valeu=>setComAlojamento(valeu.target.checked)} isActive={comAlojamento} name="Com alojamento" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />
                                <CardsCheckBox text="O alojamento web permite que a sua loja não só esteja online como atualiza regularmente o seu hardware para um melhor desempenho e maior proteção." />

                                <CheckBox onClick={valeu=>setComDominio(valeu.target.checked)} isActive={comDominio} name="Com domínio" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />
                                <CardsCheckBox text="O url do seu site será a primeira coisa que os visitantes irão ver. O domínio torna mais fácil a identificação da loja e aumenta o reconhecimento da marca e da sua empresa." />
                            
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
                                <img src={ImagemWebsite} className="img-fluid" alt="Website Imagem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );

}