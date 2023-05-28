import React from "react";
import "../Styles/Registro.css";

function Registro() {
  return (
    <div className="contenedor">
      <div className="cont-imagen" name="logo">
        <img src={require("../Images/hotel.png")} alt="Posada del sol" />
      </div>

      <div className="cont-formulario">
        <div className="logo1">
          <img
            className="logo"
            src={require("../Images/logoPosada.png")}
            alt=""
          />
          <h3>La posada del sol</h3>
        </div>

        <h3>
          <strong> Registro </strong>
        </h3>
        <h4>Ingresa tus datos para continuar</h4>

        <input type="text" className="control2" placeholder="Nombres" />
        <input type="text" className="control2" placeholder="Apellidos" />
        <input type="text" className="control1" placeholder="Correo" required />
        <input
          type="password"
          className="control1"
          placeholder="Contraseña"
          required
        />
        <input
          type="password"
          className="control1"
          placeholder="Confirmar contraseña"
          required
        />
        <br />
        <input type="checkbox" name="terminos" className="check" />
        <label htmlFor="terminos">
          Acepto los <a href="#"> Terminos y Condiciones</a>
        </label>
        <br />
        <input type="checkbox" name="ofertas" className="check" />
        <label htmlFor="ofertas">Acepto recibir ofertas en mi correo</label>
        <br />
        <button className="boton">REGISTRARSE</button>
        <br />

        <p className="inicio">
          Ya tengo una cuenta <a href="#"> Ingresa </a>
        </p>
      </div>
    </div>
  );
}

export default Registro;
