import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { isLoggedIn } from '../../../hooks/loginToken';

const Transporte = ({handleClick}) => {
    const tokenExists = isLoggedIn();
    return (
        <div className="card mb-4 border-0 shadow">
            <div className="row g-0 p-3 align-items-center">
                <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                    <img src={require("../../../Images/transporte.jpg")} className="img-fluid rounded" alt="Room" />
                </div>
                <div className="col-md-5 px-lg-3 px-md-3 px-0">
                    <h5 className="mb-3" style={{ fontWeight: '600', color: '#A96596' }}>Servicio de Transporte</h5>
                    <div className="features mb-4">
                        <h6 className="mb-1" style={{ fontWeight: '600', color: '#A96596' }}>Descripción</h6>
                        <span className="badge rounded-pill bg-light text-dark text-wrap">
                            Servicio de transporte para traslados hasta el hotel, dentro y fuera de la ciudad
                        </span>
                    </div>
                </div>
                <div className="col-md-2 mt-lg-0 mt-md-0 mt-4 text-center">
                    <h6 className="mb-4" style={{ fontWeight: '600', color: '#A96596' }}>Desde $50.000 </h6>
                    {tokenExists && (
                        <a href="" className="btn btn-sm w-100 text-black btn-outline-dark custom-bg shadow-none mb-2">
                            Adquirir
                        </a>
                    )}
                    <button onClick={handleClick} className="btn btn-sm w-100 btn-outline-dark custom-bg2 shadow-none">
                        Más detalles
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Transporte;