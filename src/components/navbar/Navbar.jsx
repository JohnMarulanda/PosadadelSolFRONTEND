import React, { Component, useState, useEffect, useRef } from 'react';
import { MenuItems } from './MenuItems';
import '../../Styles/navbar/Navbar.css';
import { Button } from './Button';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { isLoggedIn, logout, getid } from '../../hooks/loginToken';
import { getFile, setFile } from '../../FirebaseConfig/firebase';
import defaultUser from "./../../Images/user.png";
import axios from 'axios';

const Navbar = () => {


  const [clicked, setClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const location = useLocation();

  const menuRef = useRef(null);





  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    fetchUserImage();

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    logout();
    // Realiza cualquier otra lógica necesaria después de cerrar la sesión
    window.location.reload(); // Recargar la página automáticamente
    window.location.assign('/Inicia-Sesion'); // Redirigir a la página /Inicia-Sesion
  };

  //Cargar imagen de perfil
  const fetchUserImage = () => {
    const imagePath = 'usersIcon/' + getid() + '.jpg';

    getFile(imagePath)
      .then((url) => {
        if (url) {
          setImageUrl(url);
        } else {
          setImageUrl(defaultUser);
        }
      })
      .catch((error) => {
        setImageUrl(defaultUser);
      });
  };

  const tokenExists = isLoggedIn();


  //Cargar nombre del usuario en la barra de navegacion

  const [userName, setName] = useState(null);

  useEffect(() => {
    if (tokenExists) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const userID = getid();
      const response = await axios.get('http://localhost:4000/users/' + userID);
      setName(response.data[0].nombres + " " + response.data[0].apellidos);
    } catch (error) {
      console.error(error);
    }
  };

  if (
    location.pathname === "/admin" ||
    location.pathname === "/HabAdmin" ||
    location.pathname === "/ServAdmin" ||
    location.pathname === "/WorkersAdmin" ||
    location.pathname === "/UserAdmin" ||
    location.pathname === "/PlansAdmin" ||
    location.pathname === "/ContacAdmin"
  ) {
    return null; // No mostrar la Navbar en las rutas especificadas
  }

  return (
    <nav className="NavbarItems">
      <Link to="/Inicio" className="logo-114">
        <img src={require('../../Images/logoPosada.png')} alt="" />
      </Link>
      <div className="menu-icon" onClick={() => setClicked(!clicked)}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              className={item.cName}
              to={item.url}
              activeClassName="nav-link-active"
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {!tokenExists && (
        <ul className="button-114">
          <Link to="/Inicia-Sesion" className="nav-link">
            <Button className="btn-111">
              Entra <i className="fa-solid fa-right-to-bracket"></i>
            </Button>
          </Link>
        </ul>
      )}

      {tokenExists && (
        <>
          <img src={imageUrl} className="user-pic" onClick={toggleMenu} />

          <div ref={menuRef} className={`sub-menu-wrap ${isOpen ? 'open-menu' : ''}`} id="subMenu">
            <div className="sub-menu">
              <div className="user-info">
                <img src={imageUrl} className="user-pic" alt="User" />
                <h2>{userName}</h2>
              </div>
              <hr />

              <Link to="/configuracion" className="sub-menu-link">
                <p> <i class="fa-solid fa-user" ></i>    Mi cuenta</p>
                <span><i class="fa-solid fa-angle-right"></i></span>
              </Link>
              <Link to="" className="sub-menu-link">
                <p> <i class="fa-solid fa-cart-shopping"></i> Mis reservaciones</p>
                <span><i class="fa-solid fa-angle-right"></i></span>
              </Link>
              <Link to="/Pagos" className="sub-menu-link">
                <p> <i class="fa-solid fa-credit-card"></i> Método de pago</p>
                <span><i class="fa-solid fa-angle-right"></i></span>
              </Link>
              <hr />
              <Link to="" className="sub-menu-link">
                <p> <i class="fa-solid fa-life-ring"></i> Soporte</p>
                <span><i class="fa-solid fa-angle-right"></i></span>
              </Link>
              <Link to="" className="sub-menu-link" onClick={handleLogout}>
                <p> <i className="fa-solid fa-right-from-bracket"></i> Salir</p>
                <span><i className="fa-solid fa-angle-right"></i></span>
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;