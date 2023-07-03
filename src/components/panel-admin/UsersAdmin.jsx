import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import '../../Styles/panel-admin/HabAdmin.css';
import { Link } from 'react-router-dom'

const UserAdmin = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        nombres: '',
        apellidos: '',
        email: '',
        contrasena: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteConfirmationModalIsOpen, setDeleteConfirmationModalIsOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error al obtener los usuarios', error);
        }
    };

    const createUser = async () => {
        try {
            await axios.post('http://localhost:4000/users', user);
            clearForm();
            closeModal();
            getUsers();
        } catch (error) {
            console.error('Error al crear el usuario', error);
        }
    };

    const updateUser = async () => {
        try {
            await axios.put(`http://localhost:4000/users/${user.id}`, user);
            clearForm();
            closeModal();
            getUsers();
        } catch (error) {
            console.error('Error al actualizar el usuario', error);
        }
    };

    const deleteUser = async () => {
        try {
            await axios.delete(`http://localhost:4000/users/${userToDelete.id}`);
            setUserToDelete(null);
            closeDeleteConfirmationModal();
            getUsers();
        } catch (error) {
            console.error('Error al eliminar el usuario', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            updateUser();
        } else {
            createUser();
        }
    };

    const clearForm = () => {
        setUser({
            nombres: '',
            apellidos: '',
            email: '',
            contrasena: '',
        });
        setIsEditing(false);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const confirmDeleteUser = (user) => {
        setUserToDelete(user);
        setDeleteConfirmationModalIsOpen(true);
    };

    const closeDeleteConfirmationModal = () => {
        setUserToDelete(null);
        setDeleteConfirmationModalIsOpen(false);
    };

    return (
        <div>
            <h1>Administrar Usuarios</h1>
            <button onClick={openModal}>Crear Usuario</button>
            <Link to="/admin">
                <button> Volver atrás  </button>
            </Link>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Crear/Editar Usuario"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div className="modal-header">
                    <h2>{isEditing ? 'Editar Usuario' : 'Crear Usuario'}</h2>
                    <button onClick={closeModal}>Cerrar</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>Nombres:</label>
                    <input
                        type="text"
                        value={user.nombres}
                        onChange={(e) => setUser({ ...user, nombres: e.target.value })}
                    />

                    <label>Apellidos:</label>
                    <input
                        type="text"
                        value={user.apellidos}
                        onChange={(e) => setUser({ ...user, apellidos: e.target.value })}
                    />

                    <label>Email:</label>
                    <input
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />

                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={user.contrasena}
                        onChange={(e) => setUser({ ...user, contrasena: e.target.value })}
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
                    <p>¿Estás seguro de que deseas eliminar el usuario?</p>
                    <p>Nombres: {userToDelete?.nombres}</p>
                    <p>Apellidos: {userToDelete?.apellidos}</p>
                    <p>Email: {userToDelete?.email}</p>
                </div>
                <div className="modal-footer">
                    <button onClick={deleteUser}>Eliminar</button>
                    <button onClick={closeDeleteConfirmationModal}>Cancelar</button>
                </div>
            </Modal>

            <table>
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.nombres}</td>
                            <td>{user.apellidos}</td>
                            <td>{user.email}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        setUser(user);
                                        setIsEditing(true);
                                        setModalIsOpen(true);
                                    }}
                                >
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button onClick={() => confirmDeleteUser(user)}><i class="fa-solid fa-x"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserAdmin;
