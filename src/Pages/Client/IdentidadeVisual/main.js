import React from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import CheckBox from '../../../Components/CheckBox';
import CardsCheckBox from '../../../Components/CardsCheckBox';
import Buttons from '../../../Components/Buttons';

import ImagemIdentidadeVisual from "../../../Assets/Images/identidadeVisual.png";

export default function Main () {
    return (
        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row"> 
                            <Breadcrumbs route1="Orçamento" route2="/ Identidade Visual" textColor="text-orange"/>
                        
                            <div className="col-md-12 col-lg-10 offset-lg-1">

                                <CheckBox name="Análise da Concorrência" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="Prática de monitorar regularmente os seus concorrentes, tendo em atenção negócios e serviços
                                similares aos seus." />

                                <CheckBox name="Criação do Logótipo" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="É o ponto de identificação da sua empresa, comunica os valores da sua marca em cartões, flyers,
                                websites, social media e, principalmente, na mente do consumidor." />

                                <CheckBox name="Paleta de Cores" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="A paleta de cores gera uma identidade visual através de cores pré-selecionadas utilizadas de forma
                                harmoniosa de forma a passar alguma ideia para o utilizador." />

                                <CheckBox name="Slogan para Marca" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="Slogan é uma forma de fazer os utilizadores associarem mentalmente uma frase simples a uma marca." />

                                <CheckBox name="Manual de Normas Gráficas" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="Manual de normas gráficas não passa de um documento com regras e restrições para que a identidade
                                visual seja mantida independentemente da aplicação." />

                                <CheckBox name="Estacionário" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="Estacionário refere-se a todos os produtos que incorporem a identidade gráfica de uma organização,
                                na maioria dos casos em suporte papel ou em formato digital." />

                            </div>

                            <div className="col-md-5 offset-md-7 col-lg-6 offset-lg-5 text-end my-5">
                                <Buttons color="btn-transparent" text="Anterior" />
                                <Buttons color="btn-orange" text="Seguinte" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center bg-orange pt-pageRight position-fixed end-0 vh-100">
                        <div className="row">
                            <div className="col-md-auto">
                                <img src={ImagemIdentidadeVisual} className="img-fluid" alt="Design Gráfico Imagem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}