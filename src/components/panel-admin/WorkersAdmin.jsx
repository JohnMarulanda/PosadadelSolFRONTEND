
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import '../../Styles/panel-admin/HabAdmin.css';


const WorkersAdmin = () => {
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({
        dni: '',
        nombres: '',
        apellidos: '',
        email: '',
        puesto: '',
    });
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [deleteConfirmationModalIsOpen, setDeleteConfirmationModalIsOpen] = useState(false);
    const [employeeToDelete, setEmployeeToDelete] = useState(null);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:4000/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error al obtener los empleados', error);
        }
    };

    const createEmployee = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:4000/employees', employee);
            clearForm();
            getEmployees();
        } catch (error) {
            console.error('Error al crear el empleado', error);
        }
    };

    const updateEmployee = async (dni) => {
        try {
            await axios.put(`http://localhost:4000/employees/${dni}`, employee);
            clearForm();
            getEmployees();
        } catch (error) {
            console.error('Error al actualizar el empleado', error);
        }
    };

    const deleteEmployee = async (dni) => {
        try {
            await axios.delete(`http://localhost:4000/employees/${dni}`);
            getEmployees();
        } catch (error) {
            console.error('Error al eliminar el empleado', error);
        }
    };

    const clearForm = () => {
        setEmployee({
            dni: '',
            nombres: '',
            apellidos: '',
            email: '',
            puesto: '',
        });
        setIsEditing(false);
        setModalIsOpen(false);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const closeDeleteConfirmationModal = () => {
        setDeleteConfirmationModalIsOpen(false);
        setEmployeeToDelete(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            updateEmployee(employee.dni);
        } else {
            createEmployee(e);
        }

        closeModal();
    };

    const confirmDeleteEmployee = (employee) => {
        setEmployeeToDelete(employee);
        setDeleteConfirmationModalIsOpen(true);
    };

    const executeDeleteEmployee = () => {
        if (employeeToDelete) {
            deleteEmployee(employeeToDelete.dni);
            closeDeleteConfirmationModal();
        }
    };

    return (
        <div>
            <h1>Página de Administrador de Empleados</h1>

            <button onClick={() => setModalIsOpen(true)}>Agregar Empleado</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Crear/Editar Empleado"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div className="modal-header">
                    <h2>{isEditing ? 'Editar Empleado' : 'Crear Empleado'}</h2>
                    <button onClick={closeModal}>Cerrar</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>DNI:</label>
                    <input
                        type="text"
                        value={employee.dni}
                        onChange={(e) => setEmployee({ ...employee, dni: e.target.value })}
                        required
                    />
                    <label>Nombres:</label>
                    <input
                        type="text"
                        value={employee.nombres}
                        onChange={(e) => setEmployee({ ...employee, nombres: e.target.value })}
                        required
                    />
                    <label>Apellidos:</label>
                    <input
                        type="text"
                        value={employee.apellidos}
                        onChange={(e) => setEmployee({ ...employee, apellidos: e.target.value })}
                        required
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        value={employee.email}
                        onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                        required
                    />
                    <label>Puesto:</label>
                    <input
                        type="text"
                        value={employee.puesto}
                        onChange={(e) => setEmployee({ ...employee, puesto: e.target.value })}
                        required
                    />
                    <div className="modal-buttons">
                        <button type="submit">{isEditing ? 'Actualizar' : 'Crear'}</button>
                        <button onClick={clearForm}>Cancelar</button>
                    </div>
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
                    <p>¿Estás seguro de que deseas eliminar a este empleado?</p>
                    <p>DNI: {employeeToDelete && employeeToDelete.dni}</p>
                    <p>Nombres: {employeeToDelete && employeeToDelete.nombres}</p>
                    <p>Apellidos: {employeeToDelete && employeeToDelete.apellidos}</p>
                </div>
                <div className="modal-buttons">
                    <button onClick={executeDeleteEmployee}>Eliminar</button>
                    <button onClick={closeDeleteConfirmationModal}>Cancelar</button>
                </div>
            </Modal>

            <table>
                <thead>
                    <tr>
                        <th>DNI</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th>Puesto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.dni}>
                            <td>{employee.dni}</td>
                            <td>{employee.nombres}</td>
                            <td>{employee.apellidos}</td>
                            <td>{employee.email}</td>
                            <td>{employee.puesto}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        setEmployee(employee);
                                        setIsEditing(true);
                                        setModalIsOpen(true);
                                    }}
                                >
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button onClick={() => confirmDeleteEmployee(employee)}><i class="fa-solid fa-x"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WorkersAdmin;

