import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//Barra de navegación.
import Navbar from './components/navbar/Navbar.jsx';

//Páginas principales.
import Inicio from '../src/components/pages/Inicio.jsx';
import Hotel from '../src/components/pages/Hotel.jsx';
import Habitaciones from '../src/components/pages/Habitaciones.jsx';
import Servicios from '../src/components/pages/Servicios.jsx';
import Planes from './components/pages/Planes.jsx';
import Nosotros from '../src/components/pages/Nosotros.jsx';
import Contactanos from '../src/components/pages/Contactanos.jsx';
import Icono from './components/IconWhatsapp.jsx';
import Pagos from '../src/components/pages/Pagos.jsx';

//Inicio de sesión.
import IniciaSesion from './components/login-register/Login-Registro.jsx';
import Confirmacion from './components/pages/Confirmacion.jsx';
import Recuperar from './components/login-register/Recuperar.jsx';
import Recuperar2 from './components/login-register/Recuperar2.jsx';
import Recuperar3 from './components/login-register/Recuperar3.jsx';

//Pagina 404.
import Page404 from './components/Page404.jsx';
import UsuarioConfiguracion from './components/pages/UsuarioConfiguracion.jsx';

//Panel administrador
import PanelAdmin from './components/panel-admin/PanelAdmin.jsx';
import HabAdmin from './components/panel-admin/HabAdmin.jsx';
import ServAdmin from './components/panel-admin/ServAdmin.jsx';
import WorkersAdmin from './components/panel-admin/WorkersAdmin.jsx';
import UserAdmin from './components/panel-admin/UsersAdmin.jsx';
import PlansAdmin from './components/panel-admin/PlansAdmin.jsx';
import ContacAdmin from './components/panel-admin/ContacAdmin.jsx';

//Recuperar contraseña
export const RecoveryContext = createContext();

function App() {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();

  function NavigateComponents() {
    if (page === "login") return <Recuperar />;
    if (page === "otp") return <Recuperar2 />;
    if (page === "reset") return <Recuperar3 />;

  }

  return (
    <RecoveryContext.Provider
      value={{ page, setPage, otp, setOTP, setEmail, email }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Inicio" replace />} />
          <Route exact path="/Inicio" element={<Inicio />} />
          <Route path="/Hotel" element={<Hotel />} />
          <Route path="/Habitaciones" element={<Habitaciones />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Planes" element={<Planes />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/contactanos" element={<Contactanos />} />

          <Route path="/Inicia-Sesion" element={<IniciaSesion />} />
          <Route path="/Confirmacion" element={<Confirmacion />} />
          <Route path="/Recuperar" element={<Recuperar />} />
          <Route path="/Recuperar2" element={<Recuperar2 />} />
          <Route path="/Recuperar3" element={<Recuperar3 />} />
          <Route path="/Configuracion" element={<UsuarioConfiguracion />} />
          <Route path="/Pagos" element={<Pagos />} />


          <Route path="/Admin" element={<PanelAdmin />} />
          <Route path="/HabAdmin" element={<HabAdmin />} />
          <Route path="/ServAdmin" element={<ServAdmin />} />
          <Route path="/WorkersAdmin" element={<WorkersAdmin />} />
          <Route path="/UserAdmin" element={<UserAdmin />} />
          <Route path="/PlansAdmin" element={<PlansAdmin />} />
          <Route path="/ContacAdmin" element={<ContacAdmin />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
        {/* <Icono /> */}
      </Router>
    </RecoveryContext.Provider>
  );
}

export default App;
