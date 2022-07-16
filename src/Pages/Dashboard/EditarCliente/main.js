import React, {useState} from 'react';

import NavbarDashboardLg from '../../../Components/Dashboard/NavbarDashboard/NavbarDashboardLg';
import ButtonDashboard from '../../../Components/Dashboard/Button';
import BreadcrumbsDashboard from '../../../Components/Dashboard/Breadcrumb';
import { useParams } from 'react-router-dom';

export default function Main(){
    const [nome, setNomeCliente] = useState("")
    const [empresa, setEmpresaCliente] = useState("")
    const [morada, setMoradaCliente] = useState("")
    const [cidade, setCidadeCliente] = useState("")
    const [codigoPostal, setCodigoPostalCliente] = useState("")
    const [pais, setPaisCliente] = useState("")
    const [telefone, setTelefoneCliente] = useState("")
    const [email, setEmailCliente] = useState("")
    const [nif, setNifCliente] = useState("")

    const {idClient} = useParams()
    console.log(idClient)

    return(
        <main className='overflow-auto d-flex'>
            <NavbarDashboardLg />

            <div className="container-fluid changeSpace">
                <div className="row mt-5">

                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <BreadcrumbsDashboard route1="Editar Cliente"/>

                            <div className="col-3 col-lg-4 text-end">
                                <ButtonDashboard text="Guardar"/>
                            </div>

                            {/* Campos editar cliente */}

                            <div className="col-12 mt-5 bg-cardsDashboard">
                                <div className="row py-4">

                                    <div className="col-12">
                                        <form className="row pt-4">

                                            <ClientInput onchange={(value) => setNomeCliente(value.target.value)} value={nome} text="NomeCliente:" id="nomeClient" />

                                            <ClientInput onchange={(value) => setEmpresaCliente(value.target.value)} value={empresa} text="Empresa:" id="empresaCLiente" />

                                            <ClientInput onchange={(value) => setMoradaCliente(value.target.value)} value={morada} text="Morada:" id="moradaCLiente" />

                                            <ClientInput onchange={(value) => setCidadeCliente(value.target.value)} value={cidade} text="Cidade:" id="cidadeCLiente" />

                                            <ClientInput onchange={(value) => setCodigoPostalCliente(value.target.value)} value={codigoPostal} text="Codigo Postal:" id="codigoPostalCliente" />

                                            <ClientInput onchange={(value) => setPaisCliente(value.target.value)} value={pais} text="Pais:" id="paisCliente" />

                                            <ClientInput onchange={(value) => setTelefoneCliente(value.target.value)} value={telefone} text="Telefone:" id="telefoneCliente" />

                                            <ClientInput onchange={(value) => setEmailCliente(value.target.value)} value={email} text="Email:" id="emailCliente" />

                                            <ClientInput onchange={(value) => setNifCliente(value.target.value)} value={nif} text="NIF:" id="nifCliente" />
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
}