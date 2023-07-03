import React, { useState, useContext } from "react";
import RecuperarDesc from "../../components/RecuperarDescripcion";
import estilo from "../../Styles/Recuperar2P.module.css";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { RecoveryContext } from "../../App";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

import emailjs from '@emailjs/browser';

function Recuperar() {
  const navigate = useNavigate();

  const { email, otp, setOTP } = useContext(RecoveryContext);
  const [timerCount, setTimer] = React.useState(60);
  const [OTPinput, setOTPinput] = useState("");
  const [disable, setDisable] = useState(true);

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

  const handleOTPChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setOTPinput(value);
    setDisable(value.length !== 4);
  };

  const handleConfirmarClick = (e) => {
    e.preventDefault(); // Evita que la página se recargue al presionar el botón
    if (parseInt(OTPinput) === otp) {
      navigate("/Recuperar3");
    } else {
      alert("El código es incorrecto");
    }
  };

  const handleEnviarDeNuevoClick = async (e) => {
    e.preventDefault(); // Evita que la página se recargue al presionar el enlace "Enviar de nuevo"

      try{
      const OTP = Math.floor(Math.random() * 9000 + 1000);
      setOTP(OTP);

      await sendEmail({ OTP, email: email });

      setDisable(true)
      alert("Se ha enviado un nuevo codigo")
      setTimer(60)
      }
      catch{

      }
  };

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [disable]);

  return (
    <div className={estilo.cont3}>
      <RecuperarDesc />

      <div className={estilo.cont2}>
        <p className={estilo.text1}>
          <b>¡Ingresa el código de verificación!</b>
        </p>
        <p className={estilo.text2}>Se te ha enviado un código a tu correo electrónico</p>
        <FloatingLabel label="Código de verificación" className="mb-3">
          <Form.Control
            type="text"
            placeholder="1234"
            value={OTPinput}
            onChange={handleOTPChange}
            maxLength={4}
            pattern="\d*"
          />
        </FloatingLabel>
        <p className={estilo.text3}>
          <b>
            No recibiste el código?{" "}
            <a href="" id={estilo.link1} onClick={handleEnviarDeNuevoClick}>
              Enviar de nuevo
            </a>
          </b>
        </p>
        <Button variant="warning" id={estilo.btn1} onClick={handleConfirmarClick} disabled={disable}>
          Confirmar
        </Button>
      </div>
    </div>
  );
}

export default Recuperar;
