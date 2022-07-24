import React, { useState } from 'react';
import axios from 'axios';

import Breadcrumbs from '../../../Components/Breadcrumb';
import Buttons from '../../../Components/Buttons';

import ImagemWebsiteLojaOnline from "../../../Assets/Images/websites.jpg";
import { Link } from 'react-router-dom';


export default function Main() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [terms, setTerms] = useState(false)
    // const [idCliente, setIdCliente] = useState("")

    return(
        <main>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-md-12 col-lg-7 pt-pageLeft">
                        <div className="row">
                            <Breadcrumbs route1="Orçamento" route2="/ Contactos" textColor="text-purple"/>

                            <div className="col-md-12 col-lg-10 offset-lg-1">
                                <div className="mt-5">
                                    <div className="input-group input-group-lg border cursor-pointer ">
                                        <input onChange={(value)=> setNome(value.target.value)} type="text" className="form-control cursor-pointer border-0 rounded-0" pattern="^[a-z0-9_-]{3,15}$" placeholder="Nome"/>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <div className="input-group input-group-lg border cursor-pointer ">
                                        <input onChange={(value)=> setEmail(value.target.value)} type="email" className="form-control cursor-pointer border-0 rounded-0" pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+" placeholder="Email"/>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <div className="input-group input-group-lg border cursor-pointer ">
                                        <input onChange={(value)=> setTelefone(value.target.value)} type="number" className="form-control cursor-pointer border-0 rounded-0" pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" placeholder="Telefone"/>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <div className="input-group input-group-lg border cursor-pointer ">
                                        <input onChange={(value)=> setEmpresa(value.target.value)} type="text" className="form-control cursor-pointer border-0 rounded-0" pattern="^[a-z0-9_-]{3,15}$" placeholder="Empresa(opcional)"/>
                                    </div>
                                </div> 
                                <div className="mt-5 form-check form-check-inline">
                                    <input
                                        className="form-check-input text-purple cursor-pointer"
                                        type="checkbox"
                                        id="inlineCheckbox1"
                                        onClick={(value) => setTerms(value.target.checked)}
                                        name="Aceito todos os termos e condições"
                                    />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">
                                        Aceito todos os termos e condições
                                    </label>
                                </div>
                                <div className='mt-1 ms-4 text-purple'>
                                    <Link to={"/client/contactos"} className="text-purple"> Termos aqui.</Link>
                                </div>
                            </div>

                            <div className="col-md-5 offset-md-7 col-lg-6 offset-lg-5 text-end my-5">
                                <Buttons color="btn-transparent" text="Anterior" to=" "/>
                                <Buttons color="btn-purple" text="Seguinte" onClick={()=> {
                                    if(terms)
                                       return guardar()
                                    
                                    alert("Necessita de aceitar os termos e condições")
                                }}
                                to={rota()}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center bg-purple pt-pageRight position-fixed end-0 vh-100">
                        <div className="row">
                            <div className="col-md-auto">
                                <img src={ImagemWebsiteLojaOnline} className="img-fluid" alt="Marketing Digital Imagem" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );

    function rota() {
        if(terms)
            if(nome !== "" && telefone !== "" && email !== "") 
                return "obrigado"
        
        return ""
    }

    function guardar() {
        if(nome === "")
            return alert("Introduza o Nome do cliente")
        if(telefone === "")
            return alert("Introduza o Telefone do cliente")
        if(email === "")
            return alert("Introduza o Email do cliente")

        const localSave = localStorage

        let idDescricao = ""

        const ultimo = localSave.length - 1 

        for(let i = 0; i < localSave.length; i++) {
            if(i <= ultimo - 1)
                idDescricao += localSave.key(i) + ","
            else
                idDescricao += localSave.key(i)
        }

        let quantidade = ""

        for(let i = 0; i < localSave.length; i++) {
            const key = localSave.key(i)
            if(i <= ultimo - 1)
                if(localSave.getItem(key) === "true")
                    quantidade += "1" + ","
                else
                    quantidade += localSave.getItem(key) + ","
            else
                if(localSave.getItem(key) === "true")
                    quantidade += "1"
                else
                    quantidade += localSave.getItem(key)
        }

        console.log(idDescricao)
        console.log(quantidade)

        const baseUrlCreateClient = "http://localhost:3001/orcamento/createClient"
        const dataClient = {
            nome: nome,
            telefone: telefone,
            email: email,
            //Campo opcional
            empresa: empresa,
        }

        axios.post(baseUrlCreateClient, dataClient)
        .then(response => {
            if(!response.data.success)
                return alert("Erro no cliente")

            const dataClientAxios = response.data.data

            console.log("Info cliente")
            console.log(dataClientAxios)

            const idCliente = dataClientAxios.id
            console.log(idCliente)

            // alert(response.data.message)

            const baseUrlCreateOrcamento = "http://localhost:3001/orcamento/createOrcamentoById"
            const dataOrcamento = {
                idCliente: idCliente, 
                idDescricao: idDescricao, 
                quantidade: quantidade
            }
    
            console.log(dataOrcamento)
            axios.post(baseUrlCreateOrcamento, dataOrcamento)
            .then(response => {
                if(!response.data.success)
                    return alert("Erro no orçamento")
    
                alert(response.data.message)
            })
            .catch(err => {
                alert("Erro 34: " + err)
            })

        })
        .catch(err => {
            alert("Erro 34: " + err)
        })
    }
}