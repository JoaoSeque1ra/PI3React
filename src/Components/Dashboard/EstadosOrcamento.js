import React, { useEffect, useState } from 'react';

export default function EstadosOrcamento({estadoSelecionado}) {
    const [estadoEscolhido, setEstadoEscolhido] = useState()
    const [estados, setEstados] = useState([])

    useEffect(() => {
        setEstadoEscolhido(estadoSelecionado)
        setEstados(["Novo", "Em tratamento", "Cancelado"])
    }, [])

    return (
        <select className="form-select" onChange={(value) => setEstadoEscolhido(value.target.value)}>
            <option defaultChecked value={estadoEscolhido}>{estadoEscolhido}</option>
            <LoadEstados />
        </select>
    );

    function LoadEstados() {
        return estados.map((data, index) => {
            if(data != estadoEscolhido)
                return(
                    <option key={index} value={data}>{data}</option>
                )
        })
    }
}