import React, { useState, useEffect } from 'react';
import Desayuno from './ServiciosCards/Desayuno';
import Almuerzo from './ServiciosCards/Almuerzo';
import Cena from './ServiciosCards/Cena';
import Cuarto from './ServiciosCards/Cuarto';
import Lavanderia from './ServiciosCards/Lavanderia';
import Transporte from './ServiciosCards/Transporte';
import Footer from '../Footer';

import VentanasModales from '../VentanasModalesHab';
import styled from 'styled-components';



export const Servicios = () => {
    const [opciones, setOpciones] = useState({
        transporte: false,
        desayuno: false,
        almuerzo: false,
        cena: false,
        lavanderia: false,
        servicioCuarto: false
    });

    const borrarTodo = () => {
        setOpciones({
            transporte: false,
            desayuno: false,
            almuerzo: false,
            cena: false,
            lavanderia: false,
            servicioCuarto: false
        });
    };

    const todasLasOpcionesDesactivadas = Object.values(opciones).every(opcion => !opcion);

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setOpciones({ ...opciones, [id]: checked });
    };

    const [estado6, cambiarEstado6] = useState(false);
    const [estado7, cambiarEstado7] = useState(false);
    const [estado8, cambiarEstado8] = useState(false);
    const [estado9, cambiarEstado9] = useState(false);
    const [estado10, cambiarEstado10] = useState(false);
    const [estado11, cambiarEstado11] = useState(false);

    return (

        <div>

            <div className='bannerHabServ'>
                <h1 className='h1-HabServ'>Servicios</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12 mb-lg-0 mb-4 px-0">
                        <nav className="navbar navbar-expand-lg navbar-light bg-white rounded shadow">
                            <div className="container-fluid flex-lg-column align-items-stretch">
                                <h4 className="mt-2" style={{ fontWeight: '600', color: '#A96596' }}>Filtrar</h4>
                                <button
                                    className="navbar-toggler shadow-none"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#filterDropdown"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse flex-column align-items-stretch mt-2" id="filterDropdown">
                                    <div className="border bg-light p-3 rounded mb-3">
                                        <h5 className="mb-3" style={{ fontWeight: '600', color: '#A96596' }}>
                                            Tipo de servicio
                                        </h5>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="transporte"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.transporte}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="transporte">
                                                Transporte
                                            </label>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="desayuno"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.desayuno}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="desayuno">
                                                Desayuno
                                            </label>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="almuerzo"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.almuerzo}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="almuerzo">
                                                Almuerzo
                                            </label>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="cena"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.cena}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="cena">
                                                Cena
                                            </label>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="lavanderia"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.lavanderia}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="lavanderia">
                                                Servicio de lavandería
                                            </label>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="checkbox"
                                                id="servicioCuarto"
                                                className="form-check-input shadow-none me-1"
                                                checked={opciones.servicioCuarto}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="form-check-label" style={{ fontWeight: '500' }} htmlFor="servicioCuarto">
                                                Servicio al cuarto
                                            </label>
                                        </div>
                                    </div>
                                    <div className="border bg-light p-3 rounded mb-3" >
                                        <button className="btn btn-sm w-100 text-black btn-outline-dark custom-bg shadow-none mb-2" style={{ fontWeight: '500' }} onClick={borrarTodo}>
                                            Borrar todo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>


                    <div className="col-lg-9 col-md-12 px-4">
                        {todasLasOpcionesDesactivadas && (
                            <>
                                <Cuarto handleClick={() => cambiarEstado11(!estado11)}/>
                                <Transporte handleClick={() => cambiarEstado8(!estado8)}/>
                                <Lavanderia handleClick={() => cambiarEstado9(!estado9)}/>
                                <Desayuno handleClick={() => cambiarEstado10(!estado10)}/>
                                <Almuerzo handleClick={() => cambiarEstado6(!estado6)}/>
                                <Cena handleClick={() => cambiarEstado7(!estado7)}/>
                            </>
                        )}
                        {!todasLasOpcionesDesactivadas && opciones.transporte && <Transporte />}
                        {!todasLasOpcionesDesactivadas && opciones.lavanderia && <Lavanderia />}
                        {!todasLasOpcionesDesactivadas && opciones.desayuno && <Desayuno />}
                        {!todasLasOpcionesDesactivadas && opciones.almuerzo && <Almuerzo />}
                        {!todasLasOpcionesDesactivadas && opciones.cena && <Cena />}
                        {!todasLasOpcionesDesactivadas && opciones.servicioCuarto && <Cuarto />}
                    </div>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>

{/* ---------------------------------------ALMUERZO---------------------------------------------------------------- */}
            <VentanasModales estado={estado6} cambiarEstado={cambiarEstado6} titulo="Almuerzo">
        <Contenido>
          <img
            src={require("../../Images/almuerzo.jpg")}
            className="img-modal1"
            alt="Room"
          />

          <span>Variedad de opciones gastronómicas: Destaca la amplia variedad de platos y sabores que se ofrecen en el almuerzo. Contando con servicio para todos los gustos.</span>
          <span>Ingredientes frescos y de calidad: Con convenios con los mejores proveedores de ingredientes siempre tendremos lo mejor para atenderte</span>
        <span>Menú temático: Puedes pedir las especialidad de la casa para tener una experiencia deliciosa y nunca antes vista.</span>
        <img
            src={require("../../Images/logoPosada.png")}
            alt="logo"
            id="logo-2"
          />
        </Contenido>
      </VentanasModales>

    {/* ---------------------------------Cena---------------------------------------------------------------------------- */}
        <VentanasModales estado={estado7} cambiarEstado={cambiarEstado7} titulo="Cena">
        <Contenido>
            <img
            src={require("../../Images/cena.jpg")}
            className="img-modal1"
            alt="Room"
            />

            <span>Experiencia culinaria única: Con el mejor servicio de platos mas sofisticados y de mayor calidad de todos</span>
            <span>Ambiente elegante y romántico: Puedes compartir con tu pareja la mejr experienca romantica para avivar la llama.</span>
            <span>Eventos especiales y temáticos: Contamos con shows para hacer de tus noches muy entretenidas</span>

<img
            src={require("../../Images/logoPosada.png")}
            alt="logo"
            id="logo-2"
          />
            </Contenido>
            </VentanasModales>

    {/* ---------------------------------Transporte---------------------------------------------------------------------------- */}
        <VentanasModales estado={estado8} cambiarEstado={cambiarEstado8} titulo="Transporte">
        <Contenido>
            <img
            src={require("../../Images/transporte.jpg")}
            className="img-modal1"
            alt="Room"
            />

            <span>Servicio de transporte cómodo y confiable: Contamos con los mejores contactos monitoreados para asegurar tu seguridad y tranquilidad</span>
            <span>Traslados al aeropuerto: Nuestro servicio puede llevarte y recogerte del aeropuerto para que no tengas que preocuparte por no conocer la zona</span>
            <span>Horario flexible: Servicio 24 horas puedes hacer uso en cualquier momento.</span>
            <span>Precios competitivos: Los precios son mas bajos que los tranportes por fuera.</span>

<img
            src={require("../../Images/logoPosada.png")}
            alt="logo"
            id="logo-2"
          />
            </Contenido>
            </VentanasModales>

    {/* ---------------------------------Lavanderia---------------------------------------------------------------------------- */}
                            
        <VentanasModales estado={estado9} cambiarEstado={cambiarEstado9} titulo="Lavanderia">
        <Contenido>
            <img
            src={require("../../Images/lavanderia.jpg")}
            className="img-modal1"
            alt="Room"
            />

            <span>Servicio de lavandería profesional: Para cuidar tus prendas y dejarlas con una fragancia inolvidable</span>
            <span>Lavado y planchado: Contamos con el servicio de planchado para que luzcas elegante en todo momento</span>
            <span>Rápido y eficiente: Se especializan en atender tus prendas de la manera mas rapida y eficiente para que tengas que preocuparte.</span>
            <span>Servicio de lavandería las 24 horas: Puedes pedir que vengan a recoger tu ropa al cuarto en cualquier momento del dia.    </span>

<img
            src={require("../../Images/logoPosada.png")}
            alt="logo"
            id="logo-2"
          />
            </Contenido>
            </VentanasModales>

    {/* ---------------------------------Desayuno---------------------------------------------------------------------------- */}
        <VentanasModales estado={estado10} cambiarEstado={cambiarEstado10} titulo="Desayuno">
        <Contenido>
            <img
            src={require("../../Images/desayuno.jpg")}
            className="img-modal1"
            alt="Room"
            />

            <span>Variedad de opciones: Tenemos un amplio menu que ofrecerte para tus mañanas y que tengas undia lleno de energia</span>
            <span>Desyuno continental: Tenemos variedad de panes, croissants, mermeladas, yogur, cereales, jugos naturales y café recién hecho.</span>
            <span>Estaciones de cocina en vivo: Para que disfrutes de un entrenido show de muestra de talentosos chef</span>
            <span>Café y té de calidad: Usando los mejores productos de toda Colombia</span>
            <span>Horario temprano y extendido: El servicio estara disponible hasta las 11:00 am de la mañana</span>

<img
            src={require("../../Images/logoPosada.png")}
            alt="logo"
            id="logo-2"
          />
            </Contenido>
            </VentanasModales>

    {/* ---------------------------------Cuarto---------------------------------------------------------------------------- */}
        <VentanasModales estado={estado11} cambiarEstado={cambiarEstado11} titulo="Servicio al cuarto">
        <Contenido>
            <img
            src={require("../../Images/serviciocuarto.jpeg")}
            className="img-modal1"
            alt="Room"
            />

            <span>Comodidad y conveniencia: Puedes pedir el servicio para que no tengas que dejar de descanzar</span>
            <span>Amplia variedad de opciones: Puedes elegir cualquier opcion del menu o si necesitas algun servicio especial</span>
            <span>Servicio las 24 horas: Puedes llamar en cualquier momento para que sientas mayor confort en cualquier momento.</span>
            <span>Atención personalizada: Los empleados de servicio estan capacitados para brindarte la mejor atencion que puedas merecer.</span>

<img
            src={require("../../Images/logoPosada.png")}
            alt="logo"
            id="logo-2"
          />
            </Contenido>
            </VentanasModales>
        </div>

      


    );
}

export default Servicios;


const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;