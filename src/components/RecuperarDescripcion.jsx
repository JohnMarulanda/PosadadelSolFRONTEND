import React from "react";
import "../Styles/RecuperarD.css";
import { BsFillTelephoneFill} from "react-icons/bs";
import {MdEmail}  from "react-icons/md";
function RecuperarDescripcion() {
  return (
    <div className="cont-diseño">
      <span id="txt2">
        ¿Olvidaste tu contraseña? 
      </span>

      <span id="txt1">No te preocues nos pasa a todos !Dentro de
        poco tendras tu contraseña de regreso¡</span>

      <div className="img-101">
        <img src={require('../Images/sol5.png')} alt="" />
      </div>

      <span id="txt3">CONTACTANOS</span>
      <span id="txt4">
        <BsFillTelephoneFill  id="icono-11" />
        555-555-5555</span>
      <span id="txt5">
        <MdEmail id="icono-12" />
        Posadadelsol@gmail.com</span>
    </div>
  );
}

export default RecuperarDescripcion;
