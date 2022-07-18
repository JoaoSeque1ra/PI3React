import React, { useState, useEffect } from 'react';

import Breadcrumbs from '../../../Components/Breadcrumb';

import Buttons from '../../../Components/Buttons';

export default function Main() {
    const [packSelect, setPackSelect] = useState("")

    useEffect(() => {
        for(let i = 0; i < localStorage.length; i++) {
            if(localStorage.key(i) === "1")
                localStorage.removeItem("1")
            if(localStorage.key(i) === "2")
                localStorage.removeItem("2")
            if(localStorage.key(i) === "3")
                localStorage.removeItem("3")
        }
    })

    return (
        <main>
            <div className="container-fluid">
                <div className="row">

                    <div className="pt-pageLeft">
                        <Breadcrumbs route1="Orçamento / Marketing Digital" route2="/ Gestão de Redes Sociais" textColor="text-yellow"/>
                    </div>

                    <div className="col-12 offset-lg-1 col-lg-10">
                        <div className="row">

                            <div className="col-md-6 col-lg-3 mb-5 mt-2">
                                <div className="card text-center h-100 border-warning mt-5" style={{ borderRadius: "3rem", maxHeight:"38rem" }}>
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
                                <div className="text-center mt-3 mb-2">
                                    <Buttons color="btn-yellow" text="Selecionar" onClick={() => {
                                        setPackSelect("pack-start")
                                        saveLocal(true, "1")
                                    }} to={rotas()}/>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-3 mb-5 mt-2">
                                <div className="card text-center h-100 border-warning mt-5" style={{ borderRadius: "3rem", maxHeight:"38rem" }}>
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
                                <div className="text-center mt-3 mb-2">
                                    <Buttons color="btn-yellow" text="Selecionar" onClick={() => {
                                        setPackSelect("pack-boost")
                                        saveLocal(true, "2")
                                    }} to={rotas()}/>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 mb-5 mt-2">
                                <div className="card text-center h-100 border-warning mt-5" style={{ borderRadius: "3rem", maxHeight:"38rem" }}>
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
                                <div className="text-center mt-3 mb-2">
                                    <Buttons color="btn-yellow" text="Selecionar" onClick={() => {
                                        setPackSelect("pack-bomb")
                                        saveLocal(true, "3")
                                    }} to={rotas()}/>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-3 mb-5 mt-2">
                                <div className="card text-center h-100 border-warning bg-yellow mt-5" style={{ borderRadius: "3rem", maxHeight:"38rem" }}>
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
                                <div className="text-center mt-3 mb-2">
                                    <Buttons color="btn-yellow" text="Selecionar" to="marketing-digital/gestao-redes-sociais/packs"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );

    function saveLocal(value, nome) {
        if(value) {
            localStorage.removeItem("gestao-redes-sociais")
            return localStorage.setItem(nome,value)
        }
        localStorage.removeItem(nome)
    }

    function rotas() {
        for(let i = 0; i < localStorage.length; i++) {
            if(localStorage.key(i) === "paid-media")
                return "marketing-digital/paid-media"
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
            if(localSave.key(i) === "website-loja-online")
                return "website-loja-online"
        }

        return "contactos"
    }
}