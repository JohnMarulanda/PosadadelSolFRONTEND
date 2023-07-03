import React, { useContext } from "react";
import RecuperarDesc from "../RecuperarDescripcion";
import estilo from "../../Styles/RecuperarP.module.css";

import emailjs from '@emailjs/browser';

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useNavigate } from 'react-router-dom';

import { RecoveryContext } from "../../App";

function Recuperar() {
  const { setEmail, setPage, email, setOTP } = useContext(RecoveryContext);
  const navigate = useNavigate();

  //Enviar el email con la password
  emailjs.init('IEnniO4mfUumuhLAb'); // Reemplaza 'YOUR_USER_ID' por tu ID de usuario de Email.js

    function sendEmail(formdata) {

        // Envía el correo electrónico utilizando la plantilla definida en tu cuenta de Email.js.
        emailjs.send('service_c24qgpl', 'template_9gbkfjn', formdata)
            .then(function (response) {
                console.log('Correo electrónico enviado con éxito:', response);
            }, function (error) {
                console.error('Error al enviar el correo electrónico:', error);
            });
    }

  
  const handleEnviarClick = async () => {

    if (email) {
      try {

        const OTP = Math.floor(Math.random() * 9000 + 1000);
        console.log(OTP);
        setOTP(OTP);
        await sendEmail({ OTP, email: email });
        
        navigate('/Recuperar2');

      } catch (error) {
        console.error("Error al enviar el correo:", error);
      }
      
    }
    else{
    return alert("Porfavor ingresa un correo");}
  };

  return (
    <div className={estilo.cont3}>
      <RecuperarDesc />

      <div className={estilo.cont2}>
    <div className={estilo.logon1}>
          <img src={require("../../Images/logoPosada.png")} alt="logo" id={estilo.logo13}/>
          <span id={estilo.txt5}>La posada del sol</span>
    </div>

        <p className={estilo.text1}>
          <b>¡Recupera tu contraseña!</b>
        </p>
        <p className={estilo.text2}>
          Introduce tu correo electrónico a continuación para recuperar tu contraseña
        </p>
        <FloatingLabel controlId="floatingInput" label="Correo" className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
        <Button variant="warning" id={estilo.btn1} onClick={handleEnviarClick}>
          Enviar
        </Button>
      </div>
    </div>
  );
}

export default Recuperar;
