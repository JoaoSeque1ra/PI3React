import React, { useState } from 'react';
import axios from 'axios';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import ClientInput from '../../../Components/Dashboard/ClientInput';

export default function Main() {
    const [nome, setNome] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [morada, setMorada] = useState("")
    const [cidade, setCidade] = useState("")
    const [codigoPostal, setCodigoPostal] = useState("")
    const [pais, setPais] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [nif, setNif] = useState("")

    return(
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid changeSpace">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <BreadcrumbsDashboard route1="Novo Cliente"/>

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar" onClick={()=> guardar()}/>
                            </div>

                            {/* Campos para preencher de novo cliente */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12">
                                        <form className="row pt-4">

                                            <ClientInput onchange={(value) => setNome(value.target.value)} value={nome} text="Nome:" id="nomeClient" requerido={"required"}/>

                                            <ClientInput onchange={(value) => setTelefone(value.target.value)} value={telefone} text="Telefone:" id="telefoneCliente" requerido={"required"}/>

                                            <ClientInput onchange={(value) => setEmail(value.target.value)} value={email} text="Email:" id="emailCliente" requerido={"required"}/>

                                            <ClientInput onchange={(value) => setEmpresa(value.target.value)} value={empresa} text="Empresa:" id="empresaCLiente" />

                                            <ClientInput onchange={(value) => setMorada(value.target.value)} value={morada} text="Morada:" id="moradaCLiente" />

                                            <ClientInput onchange={(value) => setCidade(value.target.value)} value={cidade} text="Cidade:" id="cidadeCLiente" />

                                            <ClientInput onchange={(value) => setCodigoPostal(value.target.value)} value={codigoPostal} text="Codigo Postal:" id="codigoPostalCliente" />
                                            
                                            <ClientInput onchange={(value) => setPais(value.target.value)} value={pais} text="Pais:" id="paisCliente" />

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

    function guardar() {
        if(nome === "")
            return alert("Introduza o Nome do cliente")
        if(telefone === "")
            return alert("Introduza o Telefone do cliente")
        if(email === "")
            return alert("Introduza o Email do cliente")

        const baseUrl = "http://localhost:3001/orcamento/createClient"
        const data = {
            nome: nome,
            telefone: telefone,
            email: email,
            //Campo opcional
            empresa: empresa,
            morada: morada,
            codigo_postal: codigoPostal,
            localidade: cidade,
            numero_fiscal: parseInt(nif)
        }

        axios.post(baseUrl, data)
        .then(response => {
            if(response.data.success)
                return alert(response.data.message)

            alert(response.data.message)
        })
        .catch(err => {
            alert("Erro 34: " + err)
        })
    }

};