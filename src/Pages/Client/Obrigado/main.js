import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main>

      <div className="card-img-overlay bg-blue">

        <h6 className="fundo-obrigada w-1">OBRIGADA</h6>

        <p className="texto-fundo">Será contactado nas próximas 48h</p>
        <p className="texto-fundo">pela nossa equipa comercial</p>

        <div className="text-center mt-5">
          <a href="https://incommun.pt/" className="btn btn-lg rounded-0 btn-blue" >
            Home
          </a>
          {/* <Link color="btn-blue" text="Home" to={""} /> */}
        </div>
        
      </div>

    </main>
  );
}