import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

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
        <Route path="client/marketing-digital" element={<Client.MarketingDigital />}/>
        <Route path="client/design-grafico" element={<Client.DesignGrafico />}/>
        <Route path="client/comunicacao-consultoria" element={<Client.ComunicacaoConsultoria />}/>

        <Route path="dashboard/" element={<Dashboard.Home />}/>
      </Routes>
    </Router>
  );
}