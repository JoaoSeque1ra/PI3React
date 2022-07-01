import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Styles/style.css';

import Client from "./Pages/Client/index";
import Dashboard from './Pages/Dashboard';

export default function App() {
  return (
    <>
      <Client.Home />
    </>
  );
}