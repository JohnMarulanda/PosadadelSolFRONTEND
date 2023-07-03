import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Styles/panel-admin/HabAdmin.css';
import { Link } from 'react-router-dom'

const ContacAdmin = () => {
    const [mensajes, setMensajes] = useState([]);
    const [selectedTipo, setSelectedTipo] = useState('');
    const [filteredMensajes, setFilteredMensajes] = useState([]);

    useEffect(() => {
        getMensajes();
    }, []);

    const getMensajes = async () => {
        try {
            const response = await axios.get('http://localhost:4000/mensajes');
            setMensajes(response.data);
            setFilteredMensajes(response.data);
        } catch (error) {
            console.error('Error al obtener los mensajes', error);
        }
    };

    const filterMensajesByTipo = async (tipo) => {
        try {
            const response = await axios.get(`http://localhost:4000/mensajes/${tipo}`);
            setFilteredMensajes(response.data);
        } catch (error) {
            console.error('Error al obtener los mensajes por tipo', error);
        }
    };

    const handleTipoChange = (e) => {
        const tipo = e.target.value;
        setSelectedTipo(tipo);
        if (tipo === 'todos') {
            setFilteredMensajes(mensajes); // Utilizar mensajes directamente sin esperar a que se actualice en la función getMensajes
        } else {
            filterMensajesByTipo(tipo);
        }
    };




    return (
        <div>
            <h1>Administrar Mensajes</h1>
            <label>Tipo de Mensaje:</label>
            <select value={selectedTipo} onChange={handleTipoChange}>
                <option value="todos">Todos</option>
                <option value="consultas">Consultas</option>
                <option value="quejas">Quejas</option>
                <option value="sugerencias">Sugerencias</option>
            </select>
            <Link to="/admin">
                <button> Volver atrás  </button>
            </Link>

            <table>
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Correo Electrónico</th>
                        <th>Número de Teléfono</th>
                        <th>Tipo</th>
                        <th>Mensaje</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredMensajes.map((mensaje) => (
                        <tr key={mensaje.id}>
                            <td>{mensaje.nombres}</td>
                            <td>{mensaje.apellidos}</td>
                            <td>{mensaje.correo_electronico}</td>
                            <td>{mensaje.numero_telefono}</td>
                            <td>{mensaje.tipo}</td>
                            <td>{mensaje.mensaje}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContacAdmin;
