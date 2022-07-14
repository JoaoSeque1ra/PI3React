import React, {useState}  from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import CheckBox from '../../../Components/CheckBox';
import CardsCheckBox from '../../../Components/CardsCheckBox';
import Buttons from '../../../Components/Buttons';

import ImagemIdentidadeVisual from "../../../Assets/Images/identidadeVisual.png";

export default function Main() {
    const [identidadeVisual, setIdentidadeVisual] = useState(false)
    const [brandingRebranding, setBrandingRebranding] = useState(false)
    const [estrategiaMarca, setEstrategiaMarca] = useState(false)
    const [registoMarca, setRegistoMarca] = useState(false)
    const [designEditorial, setDesignEditorial] = useState(false)

    return (
        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row"> 
                            <Breadcrumbs route1="Orçamento" route2="/ Design Gráfico" textColor="text-orange"/>
                        
                            <div className="col-md-12 col-lg-10 offset-lg-1">

                                <CheckBox onClick={valeu=>setIdentidadeVisual(valeu.target.checked)} isActive={identidadeVisual} name="Identidade Visual" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="Destaque a sua marca da concorrência. A identidade visual engloba todos os aspetos gráficos e
                                visuais da sua empresa desde cores, tipografia, texturas, ícones ou logótipos." />

                                <CheckBox onClick={valeu=>setBrandingRebranding(valeu.target.checked)} isActive={brandingRebranding} name="Branding &#38; Rebranding" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="Branding: conjunto de conceitos de marketing, ações, estratégias e planos, que tem como principal
                                objetivo consolidar uma marca no mercado. <br>
                                Rebranding: rebranding é necessário quando a cultura da marca passa por alguma mudança
                                significativa." />

                                <CheckBox onClick={valeu=>setEstrategiaMarca(valeu.target.checked)} isActive={estrategiaMarca} name="Estratégia de Marca" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="Processos, atividade e insights que fazem a marca gerar valor aos seus produtos ou serviços e
                                consequentemente, satisfaça os seus clientes. A estratégia tem que ser pensada e coordenada para
                                atuar a longo prazo." />

                                <CheckBox onClick={valeu=>setRegistoMarca(valeu.target.checked)} isActive={registoMarca} name="Registo de Marca" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="O registo da marca permite salvaguardar a sua empresa de imitações ou utilizações indevidas,
                                garantindo o reconhecimento da sua empresa no mercado. Ajuda a diminuir, ainda, a contrafação e
                                concorrência desleal. Vamos manter a sua marca protegida?" />

                                <CheckBox onClick={valeu=>setDesignEditorial(valeu.target.checked)} isActive={designEditorial} name="Design Editorial" color="bg-checkBoxOrange" colorIcon="colorIconOrange" textColor="text-orange" />
                                <CardsCheckBox text="Trata-se do arranjo visual através de elementos do design como alinhamento, fontes, cores,
                                tipografia. Significa que para organizar o conteúdo é necessário seguir regras e padrões." />

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