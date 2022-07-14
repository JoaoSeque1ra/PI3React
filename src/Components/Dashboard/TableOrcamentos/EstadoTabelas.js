import React from 'react';

export default function EstadoTabelas({ id, nome, data, estado, valor }) {
    return (
        <div className="d-flex justify-content-center w-100">
            <div className={changeEstado(estado)}>
                {estado}
            </div>
        </div>
    );
}

function changeEstado(estado) {
    switch (estado) {
        case "Novo":
            return "w-50 w-md-100 py-2 bg-red text-center text-break text-white rounded"
        case "Em tratamento":
            return "w-75 w-md-100 py-2 bg-yellow text-center text-break text-white rounded"
        case "Enviado":
            return "w-50 w-md-100 py-2 bg-gray text-center text-break text-white rounded"
        case "Confirmado":
            return "w-75 w-md-100 py-2 bg-blue text-center text-break text-white rounded"
        case "Cancelado":
            return "w-50 w-md-100 py-2 bg-grayHover text-center text-break text-white rounded"
        default:
            console.log("Erro");
            break
    }
}