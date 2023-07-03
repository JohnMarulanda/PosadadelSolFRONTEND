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
            </body>
        </div>


    )
}

export default InicioReserva

