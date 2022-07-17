import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import TablesVerOrcamento from '../../../Components/Dashboard/TableVerOrcamento';
import EstadosOrcamento from '../../../Components/Dashboard/EstadosOrcamento';

export default function Main() {
    const [infoOrcamento, setInfoOrcamento] = useState([])
    const [cliente, setCliente] = useState([])
    const [contems, setContems] = useState([])

    const [estadoPedido, setEstadoPedido] = useState([])
    // const [estado, setEstadoEscolhido] = useState()

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

    const { idOrcamento } = useParams();

    const pedidos = ["Novo", "Em tratamento", "Enviado", "Confirmado", "Cancelado"]

    useEffect(()=>{
        const urlBase = "http://localhost:3001/orcamento/findOrcamento/" + idOrcamento
        axios.get(urlBase)
        .then(response => {
            if(response.data.success) {
                const data = response.data.data
                setInfoOrcamento(data)
                setContems(data.contems)
                setEstadoPedido(data.estadoPedido)
                return setCliente(data.cliente)
            }

            alert(response.data.message)
        })
        .catch(err=> {
            alert("Erro: " + err)
        })

    },[])



    const Subtotal = () => {
        let subtotal = 0
        contems.map((data) => {
            subtotal = parseFloat(data.valor) * parseFloat(data.quantidade) + subtotal
        })

        return parseFloat(subtotal).toFixed(2)
    }

    const Iva = () => {
        let subtotal = Subtotal()

        return parseFloat(subtotal * .23).toFixed(2) 
    }

    const Total = () => {
        let subtotal = Subtotal()
        let iva = Iva()

        return parseFloat(parseFloat(subtotal) + parseFloat(iva)).toFixed(2)
    }

    return (
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid changeSpace">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">

                            <BreadcrumbsDashboard route2="Orçamento" />

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar" onClick={() => save()}/>
                            </div>
                            {/* <div className="col-4 mt-4 col-lg-4 mt-lg-0">
                                <div className="row">

                                    <div className="col-3">
                                        <div className="row text-lg-center">

                                            <div className='col-12'>
                                                <ExportIcons.ClienteBorder />
                                            </div>
                                            <div className="col-12 d-none d-lg-block mt-1">
                                                Perfil
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="row text-lg-center">

                                            <div className='col-12'>
                                                <ExportIcons.ClienteBorder />
                                            </div>
                                            <div className="col-12 d-none d-lg-block mt-1">
                                                Outros Orç
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="row text-lg-center">

                                            <div className='col-12'>
                                                <ExportIcons.ClienteBorder />
                                            </div>
                                            <div className="col-12 d-none d-lg-block mt-1">
                                                PDF
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="row text-lg-center">

                                            <div className='col-12'>
                                                <ExportIcons.ClienteBorder />
                                            </div>
                                            <div className="col-12 d-none d-lg-block mt-1">
                                                Enviar Email
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div> */}

                            <div className="col-12 fs-5 mt-3 mt-lg-0 mb-lg-3">
                                Detalhes do orçamento #{infoOrcamento.id}
                            </div>

                            {/* Informações do Orçamento */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12 col-lg-4 ps-lg-4">
                                        <div className='row'>

                                            <div className="col-5 fw-light">
                                                Data de Criação:
                                            </div>
                                            <div className='col-7'>
                                                {infoOrcamento.data_orcamento}
                                            </div>
                                            <div className='col-5 fw-light mt-3'>
                                                Estado:
                                            </div>
                                            <div className='col-7 mt-3'>
                                                <EstadosOrcamento />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-4 ps-lg-4 mt-3 mt-lg-0">
                                        <div className='row'>

                                            <div className="col-12 fw-light">
                                                Cliente:
                                            </div>
                                            <div className='col-7 fs-5 mt-lg-2'>
                                                {cliente.nome}
                                            </div>
                                            <div className='col-12 col-lg-8 fw-light text-break'>
                                                {cliente.morada}
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-4 ps-lg-4 mt-3 mt-lg-0">
                                        <div className='row'>

                                            <div className="col-2 fw-light text-break">
                                                Email:
                                            </div>
                                            <div className='col-10 text-break'>
                                                {cliente.email}
                                            </div>

                                            <div className="col-4 fw-light text-break mt-2">
                                                Telefone:
                                            </div>
                                            <div className='col-8 text-break mt-2'>
                                                {cliente.telefone}
                                            </div>

                                            <div className="col-4 fw-light text-break mt-2">
                                                NIF / NIPC:
                                            </div>
                                            <div className='col-8 text-break mt-2'>
                                                {cliente.numero_fiscal}
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Orçamento */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <TablesVerOrcamento contems={contems} 

                                    onChangeValor={
                                        (value) => {
                                            const newValor = contems

                                            newValor.map((data) => {
                                                if(data.id === value.target.id) {
                                                    data.valor = value.target.value
                                                    return setContems(newValor)
                                                }
                                            })

                                            forceUpdate()
                                        }
                                    }
                                    
                                    onChangeQuantidade={
                                        (value) => {
                                            const newQuantidade = contems

                                            newQuantidade.map((data) => {
                                                
                                                if(data.id === value.target.id) {
                                                    data.quantidade = parseInt(value.target.value)
                                                    return setContems(newQuantidade)
                                                }
                                            })

                                            forceUpdate()                                            
                                        }
                                    }/>

                                    <div className='offset-6 col-4 offset-lg-7 col-lg-3 text-end mt-4 fw-bold fs-5 text-break'>
                                        Subtotal: 	
                                    </div>
                                    <div className='col-2 text-end pe-4 mt-4 fw-bold fs-5'>
                                        <Subtotal />
                                    </div>

                                    <div className='offset-6 col-3 offset-lg-8 col-lg-2 text-end mt-4 fw-bold fs-5 text-break'>
                                        IVA: 	
                                    </div>
                                    <div className='col-3 col-lg-2 text-end pe-4 mt-4 fw-bold fs-5'>
                                        <Iva />
                                    </div>

                                    <div className='offset-3 col-7 offset-lg-5 col-lg-5 text-end mt-4 fw-bold fs-5 text-break'>
                                        Total do Orçamento:	
                                    </div>
                                    <div className='col-2 text-end pe-4 mt-4 fw-bold fs-5'>
                                        <Total />
                                    </div>

                                </div>
                            </div>
                    
                        </div>
                    </div>

                </div>
            </div>

        </main >
    );

    function save() {
        if(contems.quantidade <= 0)
            alert("Introduza uma quantidade acima de 0")
        if(contems.valor <= 0)
            alert("Introduza valor acima de 0")

        const baseUrl = "http://localhost:3001/orcamento/updateOrcamentoValor/" + idOrcamento
        
        contems.map((data, index) => {
            const newData = {
                estado: "Em tratamento",
                descricaoServicosId: data.descricao_servico_id,
                quantidade: data.quantidade,
                valorServico: data.valor
            }

            axios.post(baseUrl, newData)
            .then(response => {
                if(response.data.success)
                    if(index === contems.length - 1)
                    return alert(response.data.message)

                alert("Erro no servidor")
            })
            .catch(err => {
                alert(err)
            })
        })
    }
}