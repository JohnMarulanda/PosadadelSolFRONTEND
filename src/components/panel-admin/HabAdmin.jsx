import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
import '../../Styles/panel-admin/HabAdmin.css';

const HabAdmin = () => {
    const [habitaciones, setHabitaciones] = useState([]);
    const [habitacion, setHabitacion] = useState({
        numero: '',
        tipo: '',
        capacidad: 0,
        precio: 0,
        servicios_basicos: '',
        piso_asignado: '',
        fecha_dispo: '',
        descripcion: ''
    });
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [deleteConfirmationModalIsOpen, setDeleteConfirmationModalIsOpen] = useState(false);
    const [habitacionToDelete, setHabitacionToDelete] = useState(null);

    useEffect(() => {
        getHabitaciones();
    }, []);

    const getHabitaciones = async () => {
        try {
            const response = await axios.get('http://localhost:4000/rooms');
            setHabitaciones(response.data);
        } catch (error) {
            console.error('Error al obtener las habitaciones', error);
        }
    };

    const createHabitacion = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:4000/rooms', habitacion);
            clearForm();
            getHabitaciones();
        } catch (error) {
            console.error('Error al crear la habitación', error);
        }
    };

    const updateHabitacion = async (habitacionId) => {
        try {
            await axios.put(`http://localhost:4000/rooms/${habitacionId}`, habitacion);
            clearForm();
            getHabitaciones();
        } catch (error) {
            console.error('Error al actualizar la habitación', error);
        }
    };

    const deleteHabitacion = async (habitacionId) => {
        try {
            await axios.delete(`http://localhost:4000/rooms/${habitacionId}`);
            getHabitaciones();
        } catch (error) {
            console.error('Error al eliminar la habitación', error);
        }
    };

    const clearForm = () => {
        setHabitacion({
            numero: '',
            tipo: '',
            capacidad: 0,
            precio: 0,
            servicios_basicos: '',
            piso_asignado: '',
            fecha_dispo: '',
            descripcion: ''
        });
        setIsEditing(false);
        setModalIsOpen(false);
    };

    const closeDeleteConfirmationModal = () => {
        setDeleteConfirmationModalIsOpen(false);
    };

    const confirmDeleteHabitacion = (habitacion) => {
        setHabitacionToDelete(habitacion);
        setDeleteConfirmationModalIsOpen(true);
    };

    const executeDeleteHabitacion = () => {
        deleteHabitacion(habitacionToDelete.habitacion_id);
        setDeleteConfirmationModalIsOpen(false);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            updateHabitacion(habitacion.habitacion_id);
        } else {
            createHabitacion(e);
        }

        closeModal();
    };

    return (
        <div>
            <h1>Página de Administrador</h1>

            <button onClick={() => setModalIsOpen(true)}>Agregar Habitación</button>
            <Link to="/admin">
                <button> Volver atrás  </button>
            </Link>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Crear/Editar Habitación"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div className="modal-header">
                    <h2>{isEditing ? 'Editar Habitación' : 'Crear Habitación'}</h2>
                    <button onClick={closeModal}>Cerrar</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>Número:</label>
                    <input
                        type="text"
                        value={habitacion.numero}
                        onChange={(e) => setHabitacion({ ...habitacion, numero: e.target.value })}
                        required
                    />
                    <label>Tipo:</label>
                    <input
                        type="text"
                        value={habitacion.tipo}
                        onChange={(e) => setHabitacion({ ...habitacion, tipo: e.target.value })}
                        required
                    />
                    <label>Capacidad:</label>
                    <input
                        type="number"
                        value={habitacion.capacidad}
                        onChange={(e) => setHabitacion({ ...habitacion, capacidad: parseInt(e.target.value) })}
                        required
                    />
                    <label>Precio:</label>
                    <input
                        type="number"
                        value={habitacion.precio}
                        onChange={(e) => setHabitacion({ ...habitacion, precio: parseFloat(e.target.value) })}
                        required
                    />
                    <label>Servicios Básicos:</label>
                    <input
                        type="text"
                        value={habitacion.servicios_basicos}
                        onChange={(e) => setHabitacion({ ...habitacion, servicios_basicos: e.target.value })}
                        required
                    />
                    <label>Piso Asignado:</label>
                    <input
                        type="text"
                        value={habitacion.piso_asignado}
                        onChange={(e) => setHabitacion({ ...habitacion, piso_asignado: e.target.value })}
                        required
                    />
                    <label>Fecha Disponible:</label>
                    <input
                        type="date"
                        value={habitacion.fecha_dispo}
                        onChange={(e) => setHabitacion({ ...habitacion, fecha_dispo: e.target.value })}
                        required
                    />
                    <label>Descripción:</label>
                    <textarea
                        value={habitacion.descripcion}
                        onChange={(e) => setHabitacion({ ...habitacion, descripcion: e.target.value })}
                        required
                    ></textarea>
                    <div className="modal-buttons">
                        <button type="submit">{isEditing ? 'Actualizar' : 'Crear'}</button>
                        <button onClick={clearForm}>Cancelar</button>
                    </div>
                </form>
            </Modal>

            <Modal
                isOpen={deleteConfirmationModalIsOpen}
                onRequestClose={closeDeleteConfirmationModal}
                contentLabel="Confirmación de Eliminación"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div className="modal-header">
                    <h2>Confirmación de Eliminación</h2>
                    <button onClick={closeDeleteConfirmationModal}>Cerrar</button>
                </div>
                <div>
                    <p>¿Estás seguro de que deseas eliminar esta habitación?</p>
                    <p>Número: {habitacionToDelete?.numero}</p>
                    <div className="modal-buttons">
                        <button onClick={executeDeleteHabitacion}>Eliminar</button>
                        <button onClick={closeDeleteConfirmationModal}>Cancelar</button>
                    </div>
                </div>
            </Modal>

            <table>
                <thead>
                    <tr>
                        <th>Número</th>
                        <th>Tipo</th>
                        <th>Capacidad</th>
                        <th>Precio</th>
                        <th>Servicios Básicos</th>
                        <th>Piso Asignado</th>
                        <th>Fecha Disponible</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {habitaciones.map((habitacion) => (
                        <tr key={habitacion.habitacion_id}>
                            <td>{habitacion.numero}</td>
                            <td>{habitacion.tipo}</td>
                            <td>{habitacion.capacidad}</td>
                            <td>{habitacion.precio}</td>
                            <td>{habitacion.servicios_basicos}</td>
                            <td>{habitacion.piso_asignado}</td>
                            <td>{habitacion.fecha_dispo}</td>
                            <td>{habitacion.descripcion}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        setHabitacion(habitacion);
                                        setIsEditing(true);
                                        setModalIsOpen(true);
                                    }}
                                >
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button onClick={() => confirmDeleteHabitacion(habitacion)}><i class="fa-solid fa-x"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HabAdmin;
