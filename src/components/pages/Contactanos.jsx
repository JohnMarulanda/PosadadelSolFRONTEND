import React, {useEffect,useState } from 'react';
import "../../Styles/Contactanos.css";
import { useForm } from "react-hook-form";
import axios from 'axios';
import Footer from '../Footer';
import ModalMensaje from '../ModalMensaje';

export const Contactanos = () => {
    const [estadoModal1,cambiarEstadoModal1] = useState(false);
    const [option, setOption] = useState(null);
    const handleOptionChange = (selectedOption) => {
        setOption(selectedOption);
    };
    const { register, formState: { errors, setErrors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.post('http://localhost:4000/contacto', data)
            .then((response) => {
                // Manejar la respuesta del servidor si es exitosa
                console.log(response.data);
            })
            .catch((error) => {
                // Manejar el error si la solicitud no se puede completar
                console.error('Error al enviar los datos:', error);
            });
    };

    const handleClear = () => {
        reset(); // Restablecer todos los campos del formulario a sus valores iniciales
    };



    return (
        <div style={{

        }}>
            <div className='bodyContactenos'>
                <ModalMensaje
                    estado={estadoModal1}
                    cambiarEstado={cambiarEstadoModal1}
                ></ModalMensaje>
                <div className='bannerContactenos'>
                    <h1 className='h1-contactenos'>¡Contactenos!</h1>
                </div>
                <div className='boxContactenos'>
                    <div className='mapaContactenos'>
                        <div className='infoContactenos'>
                            <div className='titulomapContactenos'>
                                <h4>¡Habla con nosotros!</h4>
                                <div className='submapContactenos'><a>¡Tu opinión siempre será importante!</a></div>

                            </div>
                            <div className='logosmapContactenos'>
                                <i class="fa-solid fa-phone"></i>
                                <a>22082xx</a>
                            </div>
                            <div className='logosmapContactenos'>
                                <i class="fa-solid fa-envelope"></i>
                                <a>help@posadasol.com</a>
                            </div>
                            <div className='logosmapContactenos'>
                                <i class="fa-solid fa-location-dot"></i>
                                <a>Direccion</a>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5628.222819688058!2d-76.19351750245288!3d4.070365106300722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39c432a16d8163%3A0xdaa99c2edc9b4719!2sUniversidad%20del%20Valle%20-%20Sede%20Villa%20Campestre!5e0!3m2!1ses!2sco!4v1685319775515!5m2!1ses!2sco"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                id='map-2'
                            ></iframe>

                        </div>
                        <div className='mapaContactenos2'>

                        </div>
                    </div>
                    <form className='div-mapForm' onSubmit={handleSubmit(onSubmit)}>
                        <div className='formularioConctactenos'>
                            <div className='camposContactenos'>
                                <div className='pairConctactenos'>
                                    <div className='pairConctactenos2'>
                                        <label htmlFor="nombres">Nombres:</label>
                                        <input
                                            type="text"
                                            className="input-field-contactanos"
                                            {...register('nombres', { required: true })}
                                        />
                                        {errors.nombres && <span className="p-error-114">Este campo es obligatorio</span>}
                                    </div>
                                    <div className='pairConctactenos2'>
                                        <label htmlFor="apellidos">Apellidos:</label>
                                        <input
                                            type="text"
                                            className="input-field-contactanos"
                                            {...register('apellidos', { required: true })}
                                        />
                                        {errors.apellidos && <span className="p-error-114">Este campo es obligatorio</span>}
                                    </div>
                                </div>
                                <div className='pairConctactenos'>
                                    <div className='pairConctactenos2'>
                                        <label htmlFor="email">Correo electrónico:</label>
                                        <input
                                            type="email"
                                            className="input-field-contactanos"
                                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                        />
                                        {errors.email && errors.email.type === 'required' && (
                                            <span className="p-error-114">Este campo es obligatorio</span>
                                        )}
                                        {errors.email && errors.email.type === 'pattern' && (
                                            <span className="p-error-114">Ingrese un correo electrónico válido</span>
                                        )}
                                    </div>
                                    <div className='pairConctactenos2'>
                                        <label htmlFor="telefono">Número de teléfono:</label>
                                        <input
                                            type="tel"
                                            className="input-field-contactanos"
                                            {...register('telefono', { required: true, pattern: /^\d+$/ })}
                                        />
                                        {errors.telefono && errors.telefono.type === 'required' && (
                                            <span className="p-error-114">Este campo es obligatorio</span>
                                        )}
                                        {errors.telefono && errors.telefono.type === 'pattern' && (
                                            <span className="p-error-114">Ingrese un número de teléfono válido (solo dígitos)</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a>¿Acerca de qué quieres hablarnos?</a>
                            </div>
                            <div className='radio-contactenos'>
                                <div className='radio-paircontactenos'>
                                    <input
                                        type="radio"
                                        id="sugerencias"
                                        name="contactType"
                                        value="sugerencias"
                                        className='radio-button-contactenos'
                                        {...register('tipo', { required: true })}
                                    />
                                    <label htmlFor="sugerencias">Sugerencias</label>
                                </div>
                                <div className='radio-paircontactenos'>
                                    <input
                                        type="radio"
                                        id="quejas"
                                        name="contactType"
                                        value="quejas"
                                        className='radio-button-contactenos'
                                        {...register('tipo', { required: true })}
                                    />
                                    <label htmlFor="quejas">Quejas</label>
                                </div>
                                <div className='radio-paircontactenos'>
                                    <input
                                        type="radio"
                                        id="consultas"
                                        name="contactType"
                                        value="consultas"
                                        className='radio-button-contactenos'
                                        {...register('tipo', { required: true })}
                                    />
                                    <label htmlFor="consultas">Consultas</label>
                                </div>
                                <div className='radio-paircontactenos'>
                                    <input
                                        type="radio"
                                        id="otros"
                                        name="contactType"
                                        value="otros"
                                        className='radio-button-contactenos'
                                        {...register('tipo', { required: true })}
                                    />
                                    <label htmlFor="otros">Otros</label>
                                </div>
                            </div>
                            <div className='pairConctactenos2'>
                                <label htmlFor="comentario">Mensaje:</label>
                                <textarea
                                    cols={20}
                                    rows={5}
                                    className="input-field-contactanos2"
                                    placeholder='Escribe tu mensaje...'
                                    style={{ resize: 'none' }}
                                    {...register('mensaje', { required: true })}
                                ></textarea>
                                {errors.mensaje && <span className="p-error-114">Este campo es obligatorio</span>}
                            </div>
                        </div>
                        <input  
                            type="submit" value="Enviar el mensaje" className='input-button-contactenos'
                            onClick={() => cambiarEstadoModal1(!estadoModal1)} />
                        <input
                            type="button"
                            value="Borrar todo"
                            className='input-button-borrartodo'
                            onClick={handleClear}
                        />

                    </form>

                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Contactanos;
