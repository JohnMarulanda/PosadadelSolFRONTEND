import React from 'react'
import '../style/Login.css';

function Login() {
  return (
    <div className="contenedor">
        <div className="cont-imagen">
            <img
                src={require('../images/posada.jpg')} 
                alt="Posada del sol" />

        </div>

        <div className="cont-formulario">
            <img
                className='logo' 
                src={require('../images/logo.jpeg')} alt="" />
            
            <h3><strong> Registro </strong></h3>
            <h4>Ingrese sus datos para continuar</h4>
            
            <input type="text" className='control2' placeholder='Nombres' />
            <input type="text" className='control2' placeholder='Apellidos' />
            <input type="text" className='control1' placeholder='Correo' />
            <input type="password" className='control1' placeholder='Contraseña' />
            <input type="password" className='control1' placeholder='Confirmar contraseña' />
            <br />
            <input type="checkbox" name='terminos' className='check'/>
            <label htmlFor="terminos">Acepto los <a href='#'> Terminos y Condiciones</a></label>
            <br />
            <input type="checkbox" name='ofertas'className='check'/>
            <label htmlFor="ofertas">Acepto recibir ofertas en mi correo</label>
            <br />
            <button className='boton'>REGISTRARSE</button>
            <br />

            <p className='inicio'>Ya tengo una cuenta  <a href='#'> Ingresa </a></p>



        </div>

        
    </div>

  )
}

export default Login
