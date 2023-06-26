import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { isLoggedIn } from '../../../hooks/loginToken';
import ModalPlanes from '../../ModalPlanes';
import styled from 'styled-components'
import imagenmodal4 from '../../../Images/Plan4.jpg'

const Plan4 = () => {
    const [estadoModal4,cambiarEstadoModal4] = useState(false);
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [tipo_serv, setTipoServ] = useState('');
    const tokenExists = isLoggedIn();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/servicios');
                const { data } = response;
                setDescripcion(data[4].descripcion); // Seleccionar el primer elemento del array y extraer la descripción
                setPrecio(formatCurrency(data[4].precio));
                setTipoServ(data[4].tipo_serv);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    const formatCurrency = (value) => {
        const formattedValue = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP'
        }).format(value);

        return formattedValue.replace(/,00$/, ''); // Eliminar los dos ceros finales si existen
    };
    return (
        <div className="card mb-4 border-0 shadow">
            <ModalPlanes
                        estado={estadoModal4}
                        cambiarEstado={cambiarEstadoModal4}
                        titulo="Relax Total"
            >
                <Contenido>
                    <ImagenPlan>
                        <img src={imagenmodal4} alt="asd" className='imagen-modal'/>
                    </ImagenPlan>
                    <Descripcion>
                        <h2>Descripcion</h2>
                        <p className='descripcion-modal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, possimus. Voluptate, dicta. Aliquid totam 
                            fugiat alias nulla dolore praesentium magni tenetur reiciendis maxime amet. 
                            Soluta ea non sint magni repellendus!</p>
                        <BotonAceptar onClick={() => cambiarEstadoModal4(!estadoModal4)}>
                            Aceptar
                        </BotonAceptar>
                    </Descripcion>
                </Contenido>
            </ModalPlanes>
            <div className="row g-0 p-3 align-items-center">
                <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                    <img src={require("../../../Images/Plan4.jpg")} className="img-fluid rounded" alt="Room" />
                </div>
                <div className="col-md-5 px-lg-3 px-md-3 px-0">
                    <h5 className="mb-3" style={{ fontWeight: '600', color: '#A96596' }}>Escapada Cultural</h5>
                    <div className="features mb-4">
                        <h6 className="mb-1" style={{ fontWeight: '600', color: '#A96596' }}>Descripción</h6>
                        <span className="badge rounded-pill bg-light text-dark text-wrap">
                            Visita a museos, recorrido por lugares históricos y experiencias culinarias locales.
                        </span>
                    </div>
                </div>
                <div className="col-md-2 mt-lg-0 mt-md-0 mt-4 text-center">
                    <h6 className="mb-4" style={{ fontWeight: '600', color: '#A96596' }}>Precio: {precio} </h6>
                    {tokenExists && (
                        <a href="" className="btn btn-sm w-100 text-black btn-outline-dark custom-bg shadow-none mb-2">
                            Adquirir
                        </a>
                    )}

                    <a onClick={() => cambiarEstadoModal4(!estadoModal4)}
                        href="#" className="btn btn-sm w-100 btn-outline-dark custom-bg2 shadow-none">
                        Más detalles
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Plan4;

const Contenido = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImagenPlan = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    border-bottom: 2.5px solid #883C77;
    background: white;
`;

const Descripcion = styled.div`
    align-items: center;
    text-align: center;
    border-bottom: 2.5px solid #883C77;
    background: white;
    word-spacing: 5px;
    color: #8B2E57;
`;


const BotonAceptar = styled.button`
    background: #FFE843;
    border: none;
    border-radius: 10px;
    width: 200px;
    height:40px;
    margin-bottom:  20px;
    
    &:hover {
        background: #A96596;
        color: #FFE843;
        border: 1px solid #B63C47;
    }
`;