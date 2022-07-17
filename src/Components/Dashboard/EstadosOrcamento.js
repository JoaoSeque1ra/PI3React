import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function EstadosOrcamento(props) {
    const [estadoEscolhido, setEstadoEscolhido] = useState("")
    const [estados, setEstados] = useState([])

    useEffect(() =>  {
        const baseUrl = "http://localhost:3001/orcamento/listEstados"

        axios.get(baseUrl)
        .then(response => {
            if(response.data.success) {
                setEstados(response.data.data)
                return
            }

            alert("Erro de Servidor ao carregar estados")
        })
        .catch(err => {
            alert(err)
        })

        setEstadoEscolhido(props.estadoSelecionado)
        console.log(estados)

    }, [])

    return (
        <select className="form-select" onChange={(value) => setEstadoEscolhido(value.target.value)}>
            <option defaultChecked defaultValue={estadoEscolhido}>{estadoEscolhido}</option>
            <LoadEstados />
        </select>
    );

    function LoadEstados() {
        estados.map((data,index) => {
            if(data != estadoEscolhido)
                return(
                    <option key={index} defaultValue={data}>{data}</option>
                )
        })
    }
}