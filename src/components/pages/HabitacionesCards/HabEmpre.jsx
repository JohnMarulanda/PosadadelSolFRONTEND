import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { isLoggedIn } from '../../../hooks/loginToken';

const HabEmpre = () => {

    const tokenExists = isLoggedIn();
    return (
        <div className="card mb-4 border-0 shadow">
            <div className="row g-0 p-3 align-items-center">
                <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                    <img src={require("../../../Images/habitacion3.jpg")} className="img-fluid rounded" alt="Room" />
                </div>
                <div className="col-md-5 px-lg-3 px-md-3 px-0">
                    <h5 className="mb-3" style={{ fontWeight: '600', color: '#A96596' }}>Tipo de habitación: Empresarial</h5>
                    <div className="features mb-4">
                        <h6 className="mb-1" style={{ fontWeight: '600', color: '#A96596' }}>Descripción</h6>
                        <span className="badge rounded-pill bg-light text-dark text-wrap">
                            Habitación Empresarial, 2 Camas Queen, 2 Baños,
                        </span>
                    </div>
                    <div className="Facilities mb-3">
                        <h6 className="mb-1" style={{ fontWeight: '600', color: '#A96596' }}>Servicios básicos</h6>
                        <span className="badge rounded-pill bg-light text-dark text-wrap">
                            Wifi,  Television,  Aire acondicionado, Jacuzzi
                        </span>
                    </div>
                    <div className="guests" >
                        <h6 className="mb-1" style={{ fontWeight: '600', color: '#A96596' }}>Huéspedes</h6>
                        <span className="badge rounded-pill bg-light text-dark text-wrap">
                            2 Adultos, 2 Niños
                        </span>
                    </div>
                </div>
                <div className="col-md-2 mt-lg-0 mt-md-0 mt-4 text-center">
                    <h6 className="mb-4" style={{ fontWeight: '600', color: '#A96596' }}>Desde $400.000</h6>
                    {tokenExists && (
                        <a href="" className="btn btn-sm w-100 text-black btn-outline-dark custom-bg shadow-none mb-2">
                            Reservar
                        </a>
                    )}
                    <a href="" className="btn btn-sm w-100 btn-outline-dark custom-bg2 shadow-none">
                        Más detalles
                    </a>
                    <span className="badge rounded-pill bg-light text-dark text-wrap mt-2">
                        0 habitaciones disponibles
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HabEmpre;