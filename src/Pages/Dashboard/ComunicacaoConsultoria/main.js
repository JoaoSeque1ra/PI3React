import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import PacksInput from '../../../Components/Dashboard/PacksInput';

export default function Main() {
    const [marketingComunicacao, setMarketingComunicacao] = useState([])
    const [organizacaoEventos, setOrganizacaoEventos] = useState([])
    const [acessoria, setAcessoria] = useState([])

    useEffect(() => {
        const baseUrl = "http://localhost:3001/orcamento/findDescricaoServicos/4"

        axios.get(baseUrl)
            .then(response => {
                if (!response.data.success)
                    return alert(response.data.message)

                const data = response.data.data
                setMarketingComunicacao(data[0])
                setOrganizacaoEventos(data[1])
                setAcessoria(data[2])
            })
            .catch(err => {
                alert(err)
            })
    }, [])

    const updateArray = (index, data) => {
        index.preco = parseInt(data)

        setMarketingComunicacao(index)
        console.log(marketingComunicacao)
    }

    return (
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid changeSpace">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">

                            <BreadcrumbsDashboard route1="Preços" route2="/ Comunicação &#38; Consultoria" />

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar" onClick={() => save()} />
                            </div>

                            <div className="col-12 mt-5">
                                <div className="row gx-5">

                                    <div className="col-12 col-lg-6">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Marketing e Comunicação
                                            </div>

                                            <PacksInput value={marketingComunicacao.preco} className="col-lg-4" onChange={(value) => setMarketingComunicacao(value.target.value)} />

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Organização de eventos
                                            </div>

                                            <PacksInput value={organizacaoEventos.preco} className="col-lg-4" onChange={(value) => setOrganizacaoEventos(parseInt(value.target.value))} />

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 mt-5">
                                <div className="row gx-5">

                                    <div className="col-12 col-lg-6">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Assessoria e criação de conteúdo
                                            </div>

                                            <PacksInput value={acessoria.preco} className="col-lg-4" onChange={(value) => setAcessoria(value.target.value)} />

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </main>
    );

    function save() {
        if (marketingComunicacao.preco <= 0 || organizacaoEventos.preco <= 0 || acessoria.preco <= 0)
            return alert("Introduza um valor acima de 0")

        const baseUrl = "http://localhost:3001/orcamento/updateDescricaoServicos/" + 115
        const data = {
            novoPreco: marketingComunicacao
        }

        axios.post(baseUrl, data)
        .then(response => {
            if(response.data.success)
                return alert(response.data.message)

            alert("ERRO")
        })
        .catch(err=> {
            alert("ERRO: " + err)
        })

    }
}