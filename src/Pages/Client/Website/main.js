import React, { useEffect, useState } from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';
import CheckBox from '../../../Components/CheckBox';
import CardsCheckBox from '../../../Components/CardsCheckBox';
import Buttons from '../../../Components/Buttons';

import ExportIcons from '../../../Helpers/ExportIcons';

import ImagemWebsite from "../../../Assets/Images/lojas_online-1.png";

export default function Main() {
    const [website, setWebsite] = useState(false);
    const [landingPage, setLandingPage] = useState(false);
    const [numeroPaginas, setNumeroPaginas] = useState(1)
    const [comPortfolio, setComPortfolio] = useState(false);
    const [criacaoConteudos, setCriacaoConteudos] = useState(false);
    const [comAlojamento, setComAlojamento] = useState(false);
    const [comDominio, setComDominio] = useState(false);

    useEffect(() => {
        saveLocalNumber(numeroPaginas)
    }, [numeroPaginas])

    const addNumeroPaginas = () => {
        if(numeroPaginas === 12) {
          alert("Número máximo atingido")
          return
        }
        
        setNumeroPaginas(numeroPaginas => numeroPaginas + 1)
      }
    
      const removeNumeroPaginas = () => {
        if(numeroPaginas === 1) {
          alert("Número mínimo atingido")
          return
        }
        
        setNumeroPaginas(numeroPaginas => numeroPaginas - 1)
      }

    return(
        <main>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row">
                            <Breadcrumbs route1="Orçamento / Website &#38; Loja Online" route2="/ Website" textColor="text-purple"/>

                            <div className='col-12 col-lg-10 offset-lg-1'>
                                <div className='row'>

                                    <div className={landingPage ? "d-none" : "col-12 col-lg-6"}>

                                        <CheckBox onClick={valeu=>{
                                            setWebsite(valeu.target.checked)
                                            saveLocal(valeu, "71")
                                        }} isActive={website} name="Website" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />

                                    </div>

                                    <div className={website ? "d-none" : "col-lg-6"}>

                                        <CheckBox onClick={valeu=>{
                                            setLandingPage(valeu.target.checked)
                                            saveLocal(valeu, "72")
                                        }} isActive={landingPage} name="Landing Page" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />

                                    </div>

                                </div>
                            </div>

                            <div className="col-md-12 col-lg-10 offset-lg-1">

                                <div className="d-flex align-items-center mt-5">
                                    <label className="form-check ps-3 py-2 w-100 fs-5 border text-white bg-purple">
                                        <ExportIcons.NumeroPaginas className="me-2 colorIconWhite"/>
                                        Número de páginas

                                        <div className="btn-group float-end me-3">
                                            <button className="btn btn-sm btn-light rounded" onClick={() => {
                                                removeNumeroPaginas()
                                            }}>
                                                <ExportIcons.Remove width={22} height={22} />
                                            </button>
                                            
                                            <input type="number" className="text-white text-center bg-transparent border-0 px-3" value={numeroPaginas} min={1} max={12} disabled/>
                                            
                                            <button className="btn btn-sm btn-light rounded" onClick={() => {
                                                addNumeroPaginas()
                                                saveLocalNumber(numeroPaginas)
                                            }} >
                                                <ExportIcons.Add className='colorIconBlack' width={22} height={22} />
                                            </button>
                                        </div>
                                    </label>
                                </div>

                                <CheckBox onClick={valeu=>{
                                    setComPortfolio(valeu.target.checked)
                                    saveLocal(valeu, "73")
                                }} isActive={comPortfolio} name="Com portfólio" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />
                                <CardsCheckBox text="Um portfolio é uma coleção de trabalhos que ajuda o cliente a perceber o tipo de serviços que a sua empresa já realizou." />

                                <CheckBox onClick={valeu=>{
                                    setCriacaoConteudos(valeu.target.checked)
                                    saveLocal(valeu, "74")
                                }} isActive={criacaoConteudos} name="Com criação de conteúdos textuais" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />
                                <CardsCheckBox text="Pretende que todos os conteúdos textuais a ser implementados na loja online sejam realizados pela Incommun?" />

                                <CheckBox onClick={valeu=>{
                                    setComAlojamento(valeu.target.checked)
                                    saveLocal(valeu, "75")
                                }} isActive={comAlojamento} name="Com alojamento" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />
                                <CardsCheckBox text="O alojamento web permite que a sua loja não só esteja online como atualiza regularmente o seu hardware para um melhor desempenho e maior proteção." />

                                <CheckBox onClick={valeu=>{
                                    setComDominio(valeu.target.checked)
                                    saveLocal(valeu, "76")
                                }} isActive={comDominio} name="Com domínio" color="bg-checkBoxPurple" colorIcon="colorIconPurple" textColor="text-purple" />
                                <CardsCheckBox text="O url do seu site será a primeira coisa que os visitantes irão ver. O domínio torna mais fácil a identificação da loja e aumenta o reconhecimento da marca e da sua empresa." />
                            
                            </div>

                            <div className="col-md-5 offset-md-7 col-lg-6 offset-lg-5 text-end my-5">
                                <Buttons color="btn-transparent" text="Anterior" to={"website-loja-online"}/>
                                <Buttons color="btn-purple" text="Seguinte" to={rotas()}/>
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

    function saveLocal(value, nome) {
        if(value.target.checked) {
            localStorage.removeItem("website")
            return localStorage.setItem(nome,value.target.checked)
        }
        localStorage.removeItem(nome)
    }

    function saveLocalNumber(value) {
        console.log(value)
        if(value < 5) {
            localStorage.removeItem("69")
            localStorage.removeItem("70")
            return localStorage.setItem("68",true)
        }
        if(value < 10) {
            localStorage.removeItem("68")
            localStorage.removeItem("70")
            return localStorage.setItem("69",true)
        }

        localStorage.removeItem("68")
        localStorage.removeItem("69")
        return localStorage.setItem("70",true)
    }

    function rotas() {
        for(let i = 0; i < localStorage.length; i++) {
            if(localStorage.key(i) === "loja-online")
                return "website-loja-online/loja-online"
        }

        return rotas2()
    }

    function rotas2() {
        const localSave = localStorage

        console.log(localSave.key(0))

        for(let i = 0; i < localSave.length; i++) {
            console.log(localSave.key(i))
            if(localSave.key(i) === "design-grafico")
                return "design-grafico"
            if(localSave.key(i) === "comunicacao-consultoria")
                return "comunicacao-consultoria"
            if(localSave.key(i) === "marketing-digital")
                return "marketing-digital"
        }

        return "contactos"
    }

}