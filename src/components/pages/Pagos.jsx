import React, { useState} from 'react';
import "../../Styles/Pagos.css";


export const Pagos = () => {

    return(
        <div style={{

        }}>
            
            <div className='body-pagos'>
                <div className='panel1-pagos'>
                    <div className='box1-pagos box2-pagos'>
                        <h1>Agregar tarjeta</h1>
                    </div>
                    <form className='datosTarjeta-pagos'>
                        <div className='box1-pagos'>
                            <h2>Nombre del titular</h2>
                            <input type='text' className='inputText-pagos'></input>
                        </div>
                        <div className='box1-pagos'>
                            <h2>Número de la tarjeta</h2>
                            <input type="text" className='inputText-pagos' pattern="[0-9]{13,16}" maxlength="16" placeholder="1234 1234 1234 1234"></input>
                        </div>
                        <div className='box3-pagos'>
                            <div className='box4-pagos'>
                                <h2>Fecha de vencimiento</h2>
                                <input type='date' className='inputText2-pagos'></input>
                            </div>
                            <div className='box4-pagos'>
                                <h2>Codigo seguridad</h2>
                                <input type='text' placeholder='CVC' className='inputText2-pagos'></input>
                            </div>
                        </div>
                        <div className='box1-pagos'>
                            <input type='submit' className='inputSubmit1-pagos' value='Guardar'></input>
                        </div>

                    </form>
                    
                </div>


            </div>


        </div>
    )
};

export default Pagos;
