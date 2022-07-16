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
                console.log(data)
                setMarketingComunicacao(data[0])
                setOrganizacaoEventos(data[1])
                setAcessoria(data[2])
            })
            .catch(err => {
                alert(err)
            })
    }, [])

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

                                            <PacksInput type="number" value={marketingComunicacao.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value) => {
                                                const newPreco = marketingComunicacao
                                                newPreco.preco = parseFloat(value.target.value)
                                                setMarketingComunicacao(newPreco)
                                            }} />

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                        <div className="row py-4 bg-cardsDashboard h-100">

                                            <div className="col-12 col-lg-4 ps-lg-4 fs-4 font-weight-semiBold align-self-center text-break">
                                                Organização de eventos
                                            </div>

                                            <PacksInput type="number" value={organizacaoEventos.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" onChange={(value) => {
                                                const newPreco = organizacaoEventos
                                                newPreco.preco = parseFloat(value.target.value)
                                                setOrganizacaoEventos(newPreco)
                                            }} />

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

                                            <PacksInput type="number" value={acessoria.preco} className="col-lg-4" pattern="^[0-9]{0,12}([,][0-9]{1,2})?$" 
                                            onChange={(value) => {
                                                const newPreco = acessoria
                                                newPreco.preco = parseFloat(value.target.value)
                                                setAcessoria(newPreco)
                                            }} />

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
        const arrayTeste = []
        const flag = false

        if (marketingComunicacao.preco <= 0 || organizacaoEventos.preco <= 0 || acessoria.preco <= 0)
            return alert("Introduza um valor acima de 0")

        arrayTeste.push(marketingComunicacao, organizacaoEventos, acessoria)

        arrayTeste.map((data, index) => {
            console.log(data)
            const baseUrl = "http://localhost:3001/orcamento/updateDescricaoServicos/" + data.id
            const newData = {
                novoPreco: data.preco
            }

            axios.post(baseUrl, newData)
            .then(response => {
                if(response.data.success)
                    if(index === arrayTeste.length - 1)
                        return alert(response.data.message)

                if(!response.data.success) {
                    alert(response.data.message + " " + data.descricao)
                }

            })
            .catch(err=> {
                alert("ERRO: " + err)
            })
        })
    }
}