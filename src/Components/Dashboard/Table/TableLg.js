import React, { useState } from 'react';

import TableTrLg from '../TableTrLg';

export default function TableLg({campo1, campo2, campo3, campo4, campo5, campo6}) {
    const teste = {
        id: "0087",
        nome: "João Sequeira",
        data: "11-7-2022",
        estado: "Novo",
        valor: "500€"
    }
    const [infoOrcamento, setInfoOrcamento] = useState([teste]);
    
    return (  
        <div className="table-responsive d-none d-lg-flex">
            <table className="table table-hover table-striped">

                <thead>
                    <tr>
                        <th className="fw-light" scope="col">
                            {campo1}
                        </th>
                        <th className="fw-light" scope="col">
                            {campo2}
                        </th>
                        <th className="fw-light" scope="col">
                            {campo3}
                        </th>
                        <th className="fw-light text-center" scope="col">
                            {campo4}
                        </th>
                        <th className="fw-light text-end" scope="col">
                            {campo5}
                        </th>
                        <th className="fw-light text-center" scope="col">
                            {campo6}
                        </th>
                    </tr>
                </thead>

                <tbody className="align-middle">

                    <TableTrLg id="0088" nome="Marcelo Machado" valor="50,00€" data="20&frasl;março&frasl;2022" estado="Novo"/>
                        
                    <TableTrLg id="0087" nome="Antonio Rodrigues" valor="100,00€" data="20&frasl;março&frasl;2022" estado="Novo"/>

                    <TableTrLg id="0086" nome="Rui Matias" valor="450,00€" data="19&frasl;março&frasl;2022" estado="Novo"/>

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
                        <th className="fw-light" scope="col">
                            {campo3}
                        </th>
                        <th className="fw-light text-center" scope="col">
                            {campo4}
                        </th>
                        <th className="fw-light text-end" scope="col">
                            {campo5}
                        </th>
                        <th className="fw-light text-center" scope="col">
                            {campo6}
                        </th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );

    function LoadInfo() {
        return infoOrcamento.map((data, index) => {
            return(
                <TableTrLg key={index} id={data.id} nome={data.nome} valor={data.valor} estado={data.estado} data={data.data} />
            )
        })
    }
}