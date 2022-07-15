import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Styles/style.css';

import Client from "./Pages/Client/index";
import Dashboard from './Pages/Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="client/" element={<Client.Home />}/>
        <Route path="client/identidade-visual" element={<Client.IdentidadeVisual />}/>
        <Route path="client/marketing-digital" element={<Client.MarketingDigital />}/>
        <Route path="client/design-grafico" element={<Client.DesignGrafico />}/>
        <Route path="client/comunicacao-consultoria" element={<Client.ComunicacaoConsultoria />}/>
        <Route path="client/website-loja-online" element={<Client.WebsiteLojaOnline />}/>
        <Route path="client/website" element={<Client.Website />}/>
        <Route path="client/loja-online" element={<Client.LojaOnline />}/>
        <Route path="client/contactos" element={<Client.Contactos />}/>
        <Route path="client/obrigado" element={<Client.Obrigado />}/>
        <Route path="client/gestao-redes-sociais" element={<Client.GestaoRedesSociais />}/>
        <Route path="client/paid-media" element={<Client.PaidMedia />}/>
        <Route path="client/gestao-redes-sociais/packs" element={<Client.PersonalizarGestaoRedesSociais />}/>


        <Route path="/dashboard/Login" element={<Dashboard.Login />}/>
        <Route path="/dashboard/" element={<Dashboard.Home />}/>
        <Route path="/dashboard/marketing-digital" element={<Dashboard.MarketingDigital />}/>
        <Route path="/dashboard/website-loja-online" element={<Dashboard.WebsiteLojaOnline />}/>
        <Route path="/dashboard/design-grafico" element={<Dashboard.DesignGrafico />}/>
        <Route path="/dashboard/comunicacao-consultoria" element={<Dashboard.ComunicacaoConsultoria />}/>
        
        <Route path="/dashboard/novo-cliente" element={<Dashboard.CriarCliente />}/>
        <Route path="/dashboard/editar-cliente/:idClient" element={<Dashboard.EditarCliente />}/>
        <Route path="/dashboard/ver-clientes" element={<Dashboard.Clientes />}/>
        
        <Route path="/dashboard/ver-orcamentos" element={<Dashboard.Orcamentos />}/>
        <Route path="/dashboard/editar-orcamento/:idOrcamento" element={<Dashboard.EditarOrcamento />}/>
      </Routes>
    </Router>
  );
}