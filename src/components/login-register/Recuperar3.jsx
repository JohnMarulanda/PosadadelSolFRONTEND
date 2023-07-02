import React, { useState, useContext } from "react";
import RecuperarDesc from "../../components/RecuperarDescripcion";
import estilo from "../../Styles/Recuperar3P.module.css";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from 'axios';
import { getid } from '../../hooks/loginToken';

import { useNavigate } from 'react-router-dom';

import { RecoveryContext } from "../../App";



function Recuperar() {
  const [nuevaContraseña, setNuevaContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [error, setError] = useState("");

  const { setEmail, setPage, email, setOTP } = useContext(RecoveryContext);
  const navigate = useNavigate();

  //Cuando se da click para cambiar la contrasena
  const handleClick = async () => {

    if (nuevaContraseña !== confirmarContraseña) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(nuevaContraseña)) {
      setError("La contraseña debe tener al menos 8 caracteres, una mayúscula y un número");
      return;
    }

    try {
      const response = await axios.get('http://localhost:4000/users/email/' + email + "");
      const id = response.data[0].id;

      const response2 = await axios.put('http://localhost:4000/users/' + id, { contrasena: nuevaContraseña });
      navigate('/Inicia-Sesion');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={estilo.cont3}>
      <RecuperarDesc />

      <div className={estilo.cont2}>
        <p className={estilo.text1}>
          <b>Restablece tu contraseña</b>
        </p>
        <p className={estilo.text2}>
          El código de verificación ha sido comprobado. Ingrese una nueva contraseña.
        </p>
        <FloatingLabel label="Nueva contraseña" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Nueva contraseña"
            id={estilo.inpt1}
            value={nuevaContraseña}
            onChange={(e) => setNuevaContraseña(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel label="Confirmar nueva contraseña" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Confirmar nueva contraseña"
            id={estilo.inpt2}
            value={confirmarContraseña}
            onChange={(e) => setConfirmarContraseña(e.target.value)}
          />
        </FloatingLabel>

        {error && <p className={estilo.error}>{error}</p>}

        <Button variant="warning" id={estilo.btn1} onClick={handleClick}>
          Restablecer contraseña
        </Button>
      </div>
    </div>
  );
}

export default Recuperar;
