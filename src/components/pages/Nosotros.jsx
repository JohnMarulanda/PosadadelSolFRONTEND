// <<<<<<< HEAD
// import React from 'react';
// import '../../Styles/Nosotros.css'
// import imagenhotelnosotros from '../../Images/hotel-apartado-nosotros.jpg'
// import imagenhotelnosotros2 from '../../Images/imagenhotelnosotros2.webp'
// export const Nosotros = () => {
//     return (
// <div className='primer-apartado'>
//     <div>
//         <div className='apartado-left'>
//             <h1>¿Quienes somos?</h1>
//             <h2>¿Por que nuestro hotel?</h2>
//             <p>!La elección perfecta para aquellos que buscan
//                 una experiencia inolvidable
//             </p>
//             <div className='apartado-botones'>
//                 <button className='apartado-boton-1'>Inicio</button>
//                 <button className='apartado-boton-2'>Reserva ahora</button>
//             </div>
//         </div>
//         <div className='apartado-right'>
//             <img src={imagenhotelnosotros} alt="maig1" className='imagen-apartado-nosotros'/>
//         </div>
//     </div>
//     <div className='segundo-apartado'>
//         <div className='segundo-apartado-left'>
//             <img src={imagenhotelnosotros2} alt="maig2" className='imagen-apartado-nosotros2' />
//         </div>
//         <div className='segundo-apartado-right'>
//             <h4 className='titulo-principal'>Nuestro Hotel</h4>
//             <h1 className='titulo-secundario'>Tranquilidad y </h1>
//             <h1 className='titulo-secundario'>Comodidad</h1>
//             <p>descripcion</p>
//             <div className='segundo-apartado-encabezado'>
//                 <div className='segundo-apartado-encabezados'>
//                     <h2 className='titulo-segundo-apartado'>500+</h2>
//                     <p>Clientes felices</p>
//                 </div>
//                 <div className='segundo-apartado-encabezados'>
//                     <h2 className='titulo-segundo-apartado'>1k+</h2>
//                     <p>Reseñas</p>
//                 </div>
//         </div>
//         <div className='ultimo-apartado'>
//             <p>Variedad de servicios</p>
//         </div>
//         <div className='ultimo-apartado'>
//             <p>Variedad de habitaciones</p>
//         </div>
//         </div>

//     </div>
// </div>
//     );

import React from "react";
import WorkerMod from "../WorkerMod";
import Services from "../Services-Nosotros";
import Footer from '../Footer';
import '../../Styles/Nosotros.css'
import imagenhotelnosotros from '../../Images/hotel-apartado-nosotros.jpg'
import imagenhotelnosotros2 from '../../Images/imagenhotelnosotros2.webp'
import Desarrolladores from "../Desarrolladores";
import { isLoggedIn } from "../../hooks/loginToken";


export const Nosotros = () => {
  const tokenExists = isLoggedIn();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: "center"
      }}
    >
      <div className='bannerHabServ'>
        <h1 className='h1-HabServ' >Acerca de nosotros </h1>
      </div>

      <div className='primer-apartado'>
        <div>
          <div className='apartado-left'>
            <h1>¿Quienes somos?</h1>
            <h2>¿Por que nuestro hotel?</h2>
            <p>!La elección perfecta para aquellos que buscan
              una experiencia inolvidable
            </p>
            <div className='apartado-botones'>
              <a className='apartado-boton-1' href='/Inicio'>Inicio</a>
              {tokenExists && (
                <a className='apartado-boton-2' href='/Habitaciones'>Reservar</a>
              )}

            </div>
          </div>
          <div className='apartado-right'>
            <img src={imagenhotelnosotros} alt="maig1" className='imagen-apartado-nosotros' />
          </div>
        </div>
        <div className='segundo-apartado'>
          <div className='segundo-apartado-left'>
            <img src={imagenhotelnosotros2} alt="maig2" className='imagen-apartado-nosotros2' />
          </div>
          <div className='segundo-apartado-right'>
            <h4 className='titulo-principal'>Nuestro Hotel</h4>
            <h1 className='titulo-secundario'>Tranquilidad y </h1>
            <h1 className='titulo-secundario'>Comodidad</h1>
            <p>!La posada del sol la mejor opcion</p>
            <p>para tu comodidad¡</p>
            <div className='segundo-apartado-encabezado'>
              <div className='segundo-apartado-encabezados'>
                <h2 className='titulo-segundo-apartado'>500+</h2>
                <p>Clientes felices</p>
              </div>
              <div className='segundo-apartado-encabezados'>
                <h2 className='titulo-segundo-apartado'>1k+</h2>
                <p>Reseñas</p>
              </div>
            </div>
            <div className='ultimo-apartado'>
              <p>Variedad de servicios</p>
            </div>
            <div className='ultimo-apartado'>
              <p>Variedad de habitaciones</p>
            </div>
          </div>

        </div>
      </div>

      <WorkerMod />
      <Services />
      <Desarrolladores />
      <Footer />



    </div>
  );

};

export default Nosotros;
