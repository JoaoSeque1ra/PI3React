import React, { useState } from 'react';

import TableTrMd from './TableTrMd';

// Ele faz a ligação nesta pagina

export default  function TableMd({campo1, campo2, campo3, campo4}) {
    const teste = {
        id: "0087",
        nome: "João Sequeira",
        valor: "100€"
    }
    const [infoOrcamento, setInfoOrcamento] = useState([teste]);

    return (  
        <div className="table-responsive d-flex d-lg-none">
            <table className="table table-hover table-striped">

                <thead>
                    <tr>
                        <th className="fw-light" scope="col">
                            {campo1}
                        </th>
                        <th className="fw-light" scope="col">
                            {campo2}
                        </th>
                        <th className="fw-light text-end" scope="col">
                            {campo3}
                        </th>
                        <th className="fw-light text-center" scope="col">
                            {campo4}
                        </th>
                    </tr>
                </thead>

                <tbody className="align-middle">

                    <TableTrMd id="0088" nome="Marcelo Machado" valor="50,00€" />
                        
                    <LoadInfo />

                </tbody>

                <tfoot>
                    <tr>
                        <th className="fw-light" scope="col">
                            {campo1}
                        </th>
                        <th className="fw-light" scope="col">
                            {campo2}
                        </th>
                        <th className="fw-light text-end" scope="col">
                            {campo3}
                        </th>
                        <th className="fw-light text-center" scope="col">
                            {campo4}
                        </th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );

    function LoadInfo() {
        return infoOrcamento.map((data, index) => {
            return(
                <TableTrMd key={index} id={data.id} nome={data.nome} valor={data.valor} />
            )
        })
    }
}