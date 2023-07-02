import React from 'react'
import '../Styles/InicioReserva.css'
import { Link } from 'react-router-dom'
import { isLoggedIn } from '../../src/hooks/loginToken';


function InicioReserva() {
    const tokenExists = isLoggedIn();

    return (
        <div>
            <body>
                <section className="home-176" id="home-176">
                    <div className="swiper home-slider-176">
                        <div className="swiper-wrapper-176">
                            <div className="swiper-slide-176 slide-176">
                                <div className="content-176">
                                    <img src={require('../Images/logoPosada.png')} alt="Posada del SOL" />
                                    <h3 className='Frase-176'>La Posada del Sol</h3>
                                    <h3 className='Frase-176'>Descubre el encanto y la serenidad</h3>
                                    <Link to="/Habitaciones" className="btn-176"> Habitaciones </Link>
                                    <Link to="/Servicios" className="btn-176"> Servicios </Link>
                                    <Link to="/Planes" className="btn-176"> Planes </Link>

                                    {tokenExists && (
                                        <Link to="/Habitaciones" className="btn-176"> Reserva Ahora </Link>
                                    )}


                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="availability-176">
                    <form action="" className='form-176'>
                        <div className="box-176">
                            <p> Llegada: <span>*</span></p>
                            <input type="date" className="input-176" />
                        </div>

                        <div className="box-176">
                            <p> Salida: <span>*</span></p>
                            <input type="date" className="input-176" />
                        </div>
                        <div className="box-176">
                            <p> Tipo de habitación: <span>*</span></p>
                            <select name="child" id="" className="input-176">
                                <option value="" disabled selected hidden>Elige el tipo de habitación</option>
                                <option value="1"> Sencilla (Una cama normal, máximo 2 personas).</option>
                                <option value="2"> Doble (Dos camas normales, máximo 3 personas).</option>
                                <option value="3"> Triple (Tres camas normales, máximo 6 personas).</option>
                                <option value="4"> Empresarial (Una cama queen, máximo 3 personas).</option>
                                <option value="5"> Penthouse (Dos camas queen en el último piso, máximo 5 personas).</option>
                            </select>
                        </div>
                        <input type="submit" value="Verificar" className="veri-btn-13" />
                    </form>
                </section>


            </body>
        </div>


    )
}

export default InicioReserva

