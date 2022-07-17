import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ClientInput from '../../../Components/Dashboard/ClientInput';

export default function Main(){
    const [nome, setNome] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [morada, setMorada] = useState("")
    const [cidade, setCidade] = useState("")
    const [codigoPostal, setCodigoPostal] = useState("")
    const [localidade, setLocalidade] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [nif, setNif] = useState("")

    const {idClient} = useParams()

    useEffect(() => {
        const baseUrl = "http://localhost:3001/orcamento/findClient/" + idClient

        axios.get(baseUrl)
        .then(response => {
            if(!response.data.success) 
                return alert(response.data.message)

            const data = response.data.data
            setNome(data.nome)
            setEmpresa(data.empresa)
            setMorada(data.morada)
            setCidade(data.cidade)
            setCodigoPostal(data.codigo_postal)
            setLocalidade(data.localidade)
            setTelefone(data.telefone)
            setEmail(data.email)
            setNif(data.numero_fiscal)
        })
        .catch(err =>{
            alert(err)
        })

    },[idClient])

    return(
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid changeSpace">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <BreadcrumbsDashboard route1="Editar Cliente"/>

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar" onClick={() => save()}/>
                            </div>

                            {/* Campos editar cliente */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12">
                                        <form className="row pt-4">

                                            <ClientInput value={nome} onchange={(value) => setNome(value.target.value)} text="Nome:" id="nomeClient" requerido={"required"}/>

                                            <ClientInput onchange={(value) => setTelefone(value.target.value)} value={telefone} text="Telefone:" id="telefoneCliente" requerido={"required"}/>

                                            <ClientInput onchange={(value) => setEmail(value.target.value)} value={email} text="Email:" id="emailCliente" requerido={"required"}/>

                                            <ClientInput onchange={(value) => setEmpresa(value.target.value)} value={empresa} text="Empresa:" id="empresaCLiente" />

                                            <ClientInput onchange={(value) => setMorada(value.target.value)} value={morada} text="Morada:" id="moradaCLiente" />

                                            <ClientInput onchange={(value) => setCidade(value.target.value)} value={cidade} text="Cidade:" id="cidadeCLiente" />

                                            <ClientInput onchange={(value) => setCodigoPostal(value.target.value)} value={codigoPostal} text="Codigo Postal:" id="codigoPostalCliente" />
                                            
                                            <ClientInput onchange={(value) => setLocalidade(value.target.value)} value={localidade} text="Pais:" id="paisCliente" />

                                            <ClientInput onchange={(value) => setNif(value.target.value)} value={nif} text="NIF:" id="nifCliente" />

                                        </form>
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
        if(nome == false)
            return alert("Introduza nome de cliente")
        if(telefone === "")
            return alert("Introduza número de telefone")
        if(email === "")
            return alert("Introduza emial do cliente")

        const baseUrl = "http://localhost:3001/orcamento/updateClient/" + idClient
        const newData = {
            nome: nome,
            telefone: telefone,
            email: email,
            empresa: empresa,
            morada: morada,
            codigo_postal: codigoPostal,
            localidade: localidade,
            numero_fiscal: nif
        }

        axios.post(baseUrl, newData)
        .then(response => {
            if(response.data.success)
                return alert(response.data.message)
            
            alert("Erro na edição de cliente")
        })
        .catch(err => {
            alert(err)
        })

    }
}