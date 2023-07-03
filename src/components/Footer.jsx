import logoPosada from "../Images/logoPosada.png";
import "../Styles/Footer.css";
import React, { useState } from "react";
//import {useform} from "react-hook-form"
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';


emailjs.init('jc2KHEe6_bqatSo0Q');


    function sendEmail(event) {
        event.preventDefault();
        
  const form = event.target;
  const userEmail = form.elements.email.value;

  const templateParams = {
    to_email: userEmail,
    email:  userEmail
  };


  emailjs.send('service_bz02f69', 'template_l0pjheh', templateParams)
  .then(function (response) {
    console.log('Correo electrónico enviado con éxito:', response);
    alert('Por favor, revisa tu bandeja de Spam para observar el correo si no lo ves en tu bandeja principal.');

  }, function (error) {
    console.error('Error al enviar el correo electrónico:', error);
  });

form.reset();
    }


function Footer() {
    return (
        <footer>
            <div className="footerTop">
                <div className="about">
                    <h1>Bienvenido a nuestro Hotel</h1>
                </div>
                <div className="subscription">
                    <h3>¡Suscribete para recibir ofertas especiales!</h3>
                    <form className="ofertaContainer" onSubmit={sendEmail}>
            <input className="inputEmail" type="email" name="email" placeholder="Tu dirección de email" required />
            <button className="button1" type="submit">Suscribirse</button>
          </form>
                </div>
            </div>

            <div className="footerBottom">
                <div className="posada box">
                    <Link to='/Inicio'>
                        <img src={logoPosada} className="logoPos" width="100" height="100"></img>
                    </Link>

                </div>
                <div className="box">
                    <div className="listHrefFooter">
                        <Link className="footerLinkTitles" to="/Inicio">
                            <h3>Nuestro Hotel</h3>
                        </Link>
                    </div>
                </div>
                <div className="box">
                    <div className="listHrefFooter">
                        <Link className="footerLinkTitles" to="/Habitaciones">
                            <h3>Nuestras Habitaciones</h3>
                        </Link>
                        <Link className="footerLink" to="/Habitaciones">Habitaciones Sencillas</Link>
                        <Link className="footerLink" to="/Habitaciones">Habitaciones Empresariales</Link>
                        <Link className="footerLink" to="/Habitaciones">Habitaciones Penthouse</Link>
                    </div>
                </div>
                <div className="box">
                    <div className="listHrefFooter">
                        <Link className="footerLinkTitles" to="/Servicios">
                            <h3>Nuestros servicios</h3>
                        </Link>
                        <Link className="footerLink" to="/Servicios">Comida</Link>
                        <Link className="footerLink" to="/Servicios">Transporte</Link>
                        <Link className="footerLink" to="/Servicios">Limpieza</Link>
                    </div>
                </div>
                <div className="box">
                    <div className="listHrefFooter">
                        <Link className="footerLinkTitles" to="/Nosotros">
                            <h3>Acerca de nosotros</h3>
                        </Link>

                        <Link className="footerLink" href="/Nosotros">Servicios Excelentes</Link>
                        <Link className="footerLink" href="/Nosotros">Trabajadores Capacitados</Link>
                    </div>
                </div>
                <div className="box">
                    <div className="listHrefFooter">
                        <Link className="footerLinkTitles" to='/Contactanos'>
                            <h3>Contactanos</h3>
                        </Link>

                        <a className="footerLink" href="mailto:laposadadelsol.official@gmail.com">laposadadelsol.official@gmail.com</a>
                        <Link className="footerLink" to="/Contactanos">Telefono</Link>
                    </div>
                </div>
                <div className="box">
                    <Link className="footerLinkTitles" to='/Inicio'>
                        <button className="button2" href='#Frase-176'>Inicio</button>
                    </Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer;