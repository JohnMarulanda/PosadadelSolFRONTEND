import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import '../../Styles/panel-admin/HabAdmin.css';

const PlansAdmin = () => {
    const [plans, setPlans] = useState([]);
    const [plan, setPlan] = useState({
        tipo: '',
        descripcion: '',
        precio: 0,
    });
    const [isEditing, setIsEditing] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteConfirmationModalIsOpen, setDeleteConfirmationModalIsOpen] = useState(false);
    const [planToDelete, setPlanToDelete] = useState(null);

    useEffect(() => {
        getPlans();
    }, []);

    const getPlans = async () => {
        try {
            const response = await axios.get('http://localhost:4000/plans');
            setPlans(response.data);
        } catch (error) {
            console.error('Error al obtener los planes', error);
        }
    };

    const createPlan = async () => {
        try {
            await axios.post('http://localhost:4000/plans', plan);
            clearForm();
            closeModal();
            getPlans();
        } catch (error) {
            console.error('Error al crear el plan', error);
        }
    };

    const updatePlan = async () => {
        try {
            await axios.put(`http://localhost:4000/plans/${plan.planId}`, plan);
            clearForm();
            closeModal();
            getPlans();
        } catch (error) {
            console.error('Error al actualizar el plan', error);
        }
    };

    const deletePlan = async () => {
        try {
            await axios.delete(`http://localhost:4000/plans/${planToDelete.planId}`);
            setPlanToDelete(null);
            closeDeleteConfirmationModal();
            getPlans();
        } catch (error) {
            console.error('Error al eliminar el plan', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            updatePlan();
        } else {
            createPlan();
        }
    };

    const clearForm = () => {
        setPlan({
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

    const confirmDeletePlan = (plan) => {
        setPlanToDelete(plan);
        setDeleteConfirmationModalIsOpen(true);
    };

    const closeDeleteConfirmationModal = () => {
        setPlanToDelete(null);
        setDeleteConfirmationModalIsOpen(false);
    };

    return (
        <div>
            <h1>Administrar Planes</h1>
            <button onClick={openModal}>Crear Plan</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Crear/Editar Plan"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div className="modal-header">
                    <h2>{isEditing ? 'Editar Plan' : 'Crear Plan'}</h2>
                    <button onClick={closeModal}>Cerrar</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>Tipo:</label>
                    <input
                        type="text"
                        value={plan.tipo}
                        onChange={(e) => setPlan({ ...plan, tipo: e.target.value })}
                    />

                    <label>Descripción:</label>
                    <input
                        type="text"
                        value={plan.descripcion}
                        onChange={(e) => setPlan({ ...plan, descripcion: e.target.value })}
                    />

                    <label>Precio:</label>
                    <input
                        type="number"
                        value={plan.precio}
                        onChange={(e) => setPlan({ ...plan, precio: parseInt(e.target.value) })}
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
                    <p>¿Estás seguro de que deseas eliminar el plan?</p>
                    <p>Tipo: {planToDelete?.tipo}</p>
                    <p>Descripción: {planToDelete?.descripcion}</p>
                    <p>Precio: {planToDelete?.precio}</p>
                </div>
                <div className="modal-footer">
                    <button onClick={deletePlan}>Eliminar</button>
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
                    {plans.map((plan) => (
                        <tr key={plan.planId}>
                            <td>{plan.tipo}</td>
                            <td>{plan.descripcion}</td>
                            <td>{plan.precio}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        setPlan(plan);
                                        setIsEditing(true);
                                        setModalIsOpen(true);
                                    }}
                                >
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button onClick={() => confirmDeletePlan(plan)}><i class="fa-solid fa-x"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlansAdmin;
