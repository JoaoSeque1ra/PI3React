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
                setEstadoEscolhido(props.estadoSelecionado)
                return setEstados(response.data.data)
            }

            alert("Erro de Servidor ao carregar estados")
        })
        .catch(err => {
            alert(err)
        })

        console.count()

    }, [])

    return (
        <select className="form-select" onChange={(value) => setEstadoEscolhido(value.target.value)}>
            <option defaultChecked defaultValue={estadoEscolhido}>{estadoEscolhido}</option>
            {/* <LoadEstados /> */}
        </select>
    );

    // function LoadEstados() {
    //     return estados.map((data, index) => {
    //         if(data != estadoEscolhido) {
    //             console.count()
    //             return(
    //                 <option key={index} defaultValue={data}>{data}</option>
    //             )
    //         }
    //     })
    // }
}