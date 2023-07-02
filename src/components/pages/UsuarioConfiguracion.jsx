import React, { useState, useEffect } from 'react';
import "../../Styles/UsuarioConfiguracion.css";
import { useForm } from "react-hook-form";
import axios from 'axios';
import logoPosada from "../../Images/logoPosada.png";
import defaultUser from "../../Images/user.png";
import Footer from '../Footer';
import {getFile, setFile} from '../../FirebaseConfig/firebase';
import { getid } from '../../hooks/loginToken';

export const UsuarioConfiguracion = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {

        //Actualizar informacion base de datos
        const userID = getid();
        //data.id = ''+ userID;
        //data.contrasena = '' + userpass; // esto es temporal
        
        var auxData = {};

        if (data.nombres != ''){auxData.nombres = data.nombres}
        if (data.apellidos !=''){auxData.apellidos = data.apellidos}
        if (data.email != ''){auxData.email = data.email}
        if (data.contrasena != ''){auxData.contrasena = data.contrasena}
        try {
            const response = await axios.put('http://localhost:4000/users/' + userID, auxData);
            if(imageFile){ //solo se vuelve a guardar si se selecciono una imagen
                //Guardar imagen en firebase
                await setFile(imageFile, getid());
            }

          } catch (error) {
            // Manejar el error si ocurre
          }
        
          setTimeout(() => {
            window.location.reload();
          }, 1000); // se retrasa unos milisegundos despues del await setFile    
    }

    //Importar imagen
    const [imageUrl, setImageUrl] = useState('');
    const [imageFile, setImageFile] = useState('');

    useEffect(() => {
        const imagePath = 'usersIcon/'+ getid() +'.jpg';

        getFile(imagePath)
        .then((url) => {
            if (url) {
            setImageUrl(url);
            } else {
            setImageUrl(defaultUser);
            }
        })
        .catch((error) => {
            setImageUrl(defaultUser);
        });
    }, []);

    function changeTempImage(file){
        //Archivo cargado temporalmente
        setImageFile(file);

        //Previsualizacion
        setImageUrl(URL.createObjectURL(file));

        console.log(getid());
    }

      //Cargar datos del usuario
    const [userName, setName] = useState(null);
    const [userLastname, setLastname] = useState(null);
    const [userEmail, setEmail] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
        const userID = getid();
        const response = await axios.get('http://localhost:4000/users/' + userID);
        setName(response.data[0].nombres);
        setLastname(response.data[0].apellidos);
        setEmail(response.data[0].email);

        } catch (error) {
        console.error(error);
        }
    };




    return (
        <div style={{

        }}>

            <div className='body-usuarioConfig'>
                <div className='panel-userconfig'>
                    <div className='leftPanel-userconfig'>
                        <div className='box1-userconfig'>
                            <div className='box2-userConfig'>
                                <img src={logoPosada} className="Img1-userConfig"></img>
                                <h2 className="Text1-userConfig">La posada del sol</h2>
                            </div>
                        </div>
                        <div className='box1-userconfig'>
                            <h2 className='text2-userConfig'>Foto de perfil</h2>
                        </div>
                        <div className='box1-userconfig'>
                            <img src={imageUrl} className="Img2-userConfig" width="250" height="250"></img>
                        </div>
                        <div className='box1-userconfig'>
                            <div className='custom-input-userConfig'>
                                <input type='file' className='submitPhoto-userConfig' accept=".png,.jpg,.jpeg,.WebP,.TIFF" onChange={e => changeTempImage(e.target.files[0])}/>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='panel-userconfig'>
                    <div className='tituloForm-userconfig'>
                        <h1>Configuración personal</h1>
                    </div>
                    <form className='form-userConfig'  onSubmit={handleSubmit(onSubmit)}>
                        <div className='box3-userconfig'>
                            <input className='TextInput-userConfig' placeholder={userName} type="text" {...register('nombres', {

                            maxLength: 30
                        })}></input>
                            <input className='TextInput-userConfig' placeholder={userLastname} type="text" {...register('apellidos', {

                            maxLength: 30
                        })}></input>
                        </div>
                        <div className='box3-userconfig'>
                            <input className='TextInput2-userConfig'  placeholder={userEmail} {...register('email', {

                            maxLength: 50
                        })}></input>
                        </div>
                        <div className='box3-userconfig'>
                            <input className='TextInput2-userConfig' placeholder='Contraseña' {...register('contrasena', {
                            maxLength: 100
                        })}></input>
                        </div>
                        <div className='box3-userconfig'>
                            <input className='TextInput2-userConfig' placeholder='Confirmar Contraseña' type="password"></input>
                        </div>
                        <div className='submitForm-userConfig'>
                            <input type="submit" value="Aplicar cambios" className='input-button-userConfig'></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default UsuarioConfiguracion;
