import React from 'react';
import '../../Styles/panel-admin/PanelAdmin.css';
import icono from '../../Images/logoPosada.png';
import Icon from '@mui/material/Icon';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import BedroomParentSharpIcon from '@mui/icons-material/BedroomParentSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import BuildCircleSharpIcon from '@mui/icons-material/BuildCircleSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import WavingHandSharpIcon from '@mui/icons-material/WavingHandSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import axios from 'axios';


function PanelAdmin() {
    const [datos, setDatos] = React.useState({
        cantHabitaciones: '',
        cantTrabajadores: '',
        cantMensajes: '',
        cantUsuarios: ''
    });


    React.useEffect(() => {
        // Obtener la cantidad de habitaciones
        axios.get('http://localhost:4000/roomscant')
            .then(response => {
                setDatos(prevDatos => ({
                    ...prevDatos,
                    cantHabitaciones: response.data.count
                }));
            })
            .catch(error => {
                console.error('Error al obtener la cantidad de habitaciones:', error);
            });


        // Obtener la cantidad de trabajadores
        axios.get('http://localhost:4000/employeescant')
            .then(response => {
                setDatos(prevDatos => ({
                    ...prevDatos,
                    cantTrabajadores: response.data.count
                }));
            })
            .catch(error => {
                console.error('Error al obtener la cantidad de trabajadores:', error);
            });

        // Obtener la cantidad de mensajes
        axios.get('http://localhost:4000/mensajescant')
            .then(response => {
                setDatos(prevDatos => ({
                    ...prevDatos,
                    cantMensajes: response.data.count
                }));
            })
            .catch(error => {
                console.error('Error al obtener la cantidad de mensajes:', error);
            });
    }, []);

    // Obtener la cantidad de usuarios
    axios.get('http://localhost:4000/userscant')
        .then(response => {
            setDatos(prevDatos => ({
                ...prevDatos,
                cantUsuarios: response.data.count
            }));
        })
        .catch(error => {
            console.error('Error al obtener la cantidad de usuarios:', error);
        });


    return (
        <div className="contenedor-principal">
            <aside>
                <div className='top'>
                    <div className="logo">
                        <img src={icono} className='logoposadaad' alt="logo-posada" />
                        <h2 className='titulo-top'>Panel <br />Administrador</h2>
                    </div>
                    <div className="close" id='close-btn'>
                        <CloseSharpIcon />
                    </div>
                </div>
                <div className="sidebar">
                    <a href="/Admin" className='active'>
                        <HomeSharpIcon className='iconito' />
                        <h3 className='h3-admin'>Inicio</h3>
                    </a>
                    <a href="/HabAdmin">
                        <BedroomParentSharpIcon className='iconito' />
                        <h3 className='h3-admin'>Habitaciones</h3>
                    </a>
                    <a href="/ServAdmin">
                        <LocalPhoneSharpIcon className='iconito' />
                        <h3 className='h3-admin'>Servicios</h3>
                    </a>
                    <a href="/PlansAdmin">
                        <CalendarMonthSharpIcon className='iconito' />
                        <h3 className='h3-admin'>Planes</h3>
                    </a>
                    <a href="/WorkersAdmin">
                        <EngineeringSharpIcon className='iconito' />
                        <h3 className='h3-admin'>Trabajadores</h3>
                    </a>
                    <a href="/UserAdmin">
                        <GroupSharpIcon className='iconito' />
                        <h3 className='h3-admin'>Usuarios</h3>
                    </a>
                    <a href="/ContacAdmin">
                        <BuildCircleSharpIcon className='iconito' />
                        <h3 className='h3-admin'>Mensajes</h3>
                    </a>
                    <a href="/Inicio">
                        <LogoutSharpIcon className='iconito' />
                        <h3 className='h3-admin'>Salir</h3>
                    </a>
                </div>
            </aside>
            <div className='seccion-principal'>
                <div className="seccion-top">
                    <div className="seccion-top-left">
                        <h1 className='h1-admin'>Hola <br />Admin</h1>
                        <WavingHandSharpIcon sx={{ fontSize: 40 }} />
                    </div>
                    <div className="seccion-top-right">
                        <AccountCircleSharpIcon sx={{ fontSize: 80 }} />
                    </div>
                </div>
                <div className="seccion-top2">
                    <div>
                        <h1 className='h1-admin'>Usuarios Registrados</h1>
                        <p className='p-admin'>{datos.cantUsuarios}</p>
                    </div>
                </div>
                <div className="seccion-datos">
                    <div className="cards">
                        <h2 className='h2-admin'>Cantidad de habitaciones</h2>
                        <p className='p-admin2'>{datos.cantHabitaciones}</p>
                    </div>
                    <div className="cards">
                        <h2 className='h2-admin'>Cantidad de mensajes</h2>
                        <p className='p-admin2'>{datos.cantMensajes}</p>
                    </div>
                    <div className="cards">
                        <h2 className='h2-admin'>Cantidad de trabajadores</h2>
                        <p className='p-admin2'>{datos.cantTrabajadores}</p>
                    </div>

                    <div className="cards">
                        <i class="fa-solid fa-hammer" style={{ fontSize: '90px' }}></i>
                    </div>
                    <div className="cards">
                        <i class="fa-solid fa-mug-hot" style={{ fontSize: '90px' }}></i>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PanelAdmin;
