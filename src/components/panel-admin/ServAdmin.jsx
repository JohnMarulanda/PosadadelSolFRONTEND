import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import '../../Styles/panel-admin/HabAdmin.css';

const ServAdmin = () => {
    const [servicios, setServicios] = useState([]);
    const [servicio, setServicio] = useState({
        tipo: '',
        descripcion: '',
        precio: 0,
    });
    const [isEditing, setIsEditing] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteConfirmationModalIsOpen, setDeleteConfirmationModalIsOpen] = useState(false);
    const [servicioToDelete, setServicioToDelete] = useState(null);

    useEffect(() => {
        getServicios();
    }, []);

    const getServicios = async () => {
        try {
            const response = await axios.get('http://localhost:4000/services');
            setServicios(response.data);
        } catch (error) {
            console.error('Error al obtener los servicios', error);
        }
    };

    const createServicio = async () => {
        try {
            await axios.post('http://localhost:4000/services', servicio);
            clearForm();
            closeModal();
            getServicios();
        } catch (error) {
            console.error('Error al crear el servicio', error);
        }
    };

    const updateServicio = async () => {
        try {
            await axios.put(`http://localhost:4000/services/${servicio.servicio_id}`, servicio);
            clearForm();
            closeModal();
            getServicios();
        } catch (error) {
            console.error('Error al actualizar el servicio', error);
        }
    };

    const deleteServicio = async () => {
        try {
            await axios.delete(`http://localhost:4000/services/${servicioToDelete.servicio_id}`);
            setServicioToDelete(null);
            closeDeleteConfirmationModal();
            getServicios();
        } catch (error) {
            console.error('Error al eliminar el servicio', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            updateServicio();
        } else {
            createServicio();
        }
    };

    const clearForm = () => {
        setServicio({
            tipo: '',
            descripcion: '',
            precio: 0,
        });
        setIsEditing(false);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const confirmDeleteServicio = (servicio) => {
        setServicioToDelete(servicio);
        setDeleteConfirmationModalIsOpen(true);
    };

    const closeDeleteConfirmationModal = () => {
        setServicioToDelete(null);
        setDeleteConfirmationModalIsOpen(false);
    };

    return (
        <div>
            <h1>Administrar Servicios</h1>
            <button onClick={openModal}>Crear Servicio</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Crear/Editar Servicio"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div className="modal-header">
                    <h2>{isEditing ? 'Editar Servicio' : 'Crear Servicio'}</h2>
                    <button onClick={closeModal}>Cerrar</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>Tipo:</label>
                    <input
                        type="text"
                        value={servicio.tipo}
                        onChange={(e) => setServicio({ ...servicio, tipo: e.target.value })}
                    />

                    <label>Descripción:</label>
                    <textarea
                        value={servicio.descripcion}
                        onChange={(e) => setServicio({ ...servicio, descripcion: e.target.value })}
                    ></textarea>

                    <label>Precio:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={servicio.precio}
                        onChange={(e) => setServicio({ ...servicio, precio: parseFloat(e.target.value) })}
                    />

                    <button type="submit">{isEditing ? 'Guardar Cambios' : 'Crear'}</button>
                </form>
            </Modal>

            <Modal
                isOpen={deleteConfirmationModalIsOpen}
                onRequestClose={closeDeleteConfirmationModal}
                contentLabel="Confirmar Eliminación"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div className="modal-header">
                    <h2>Confirmar Eliminación</h2>
                    <button onClick={closeDeleteConfirmationModal}>Cerrar</button>
                </div>
                <div className="modal-body">
                    <p>¿Estás seguro de que deseas eliminar el servicio?</p>
                    <p>Tipo: {servicioToDelete?.tipo}</p>
                    <p>Descripción: {servicioToDelete?.descripcion}</p>
                    <p>Precio: {servicioToDelete?.precio}</p>
                </div>
                <div className="modal-footer">
                    <button onClick={deleteServicio}>Eliminar</button>
                    <button onClick={closeDeleteConfirmationModal}>Cancelar</button>
                </div>
            </Modal>

            <table>
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {servicios.map((servicio) => (
                        <tr key={servicio.servicio_id}>
                            <td>{servicio.tipo}</td>
                            <td>{servicio.descripcion}</td>
                            <td>{servicio.precio}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        setServicio(servicio);
                                        setIsEditing(true);
                                        setModalIsOpen(true);
                                    }}
                                >
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button onClick={() => confirmDeleteServicio(servicio)}><i class="fa-solid fa-x"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServAdmin;
