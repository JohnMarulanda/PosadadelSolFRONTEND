import '../Styles/Servicios.css'
import transporte from "../Images/transporte.jpg";
import comida from "../Images/comida.jpg"
import lavanderia from "../Images/lavanderia.jpg"
import mesero from "../Images/mesero.jpg"

function servicios() {
    return (
        <div className='con'>
            <header className='cabeza' >
                <h1 className='h1serv'><strong>Nuestros Servicios</strong></h1>
                <a className='bi' href='/Servicios'>Ver más</a>
            </header>
            <p className='descripcion'>Contamos con servicios de transporte,lavanderia,desayuno,almuerzo,cena y servicio al cuarto para que tu estadia sea mucho mas comoda</p>
            <div className='afuera'>
                <div className='bloque-1'>
                    <header className='bloque-1-cabeza'>
                        <h1 className='h1serv'><strong>Servicios</strong></h1>
                        <div className='bloque-1-1'>
                            <p className='desde'>Desde $50.000 Adicionales</p>
                        </div>
                    </header>
                    <p className='desde1'>Bienvenido al la Posada del Sol,
                        donde ofrecemos una amplia gama de servicios y comodidades para hacer de tu estancia una experiencia inolvidable.
                        Nuestro objetivo es brindar la máxima comodidad y satisfacción a nuestros huéspedes. </p>
                </div>
                <div className='bloque-2'>
                    <div className='lateral-1'>
                        <div className='caja-lateral-1'>
                            <img src={comida} className='imagen' />
                        </div>
                        <div className='caja-lateral-1'>
                            <img src={mesero} className='imagen' />
                        </div>
                    </div>
                    <div>
                        <div className='caja-lateral-1'>
                            <img src={lavanderia} className='imagen' />
                        </div>
                        <div className='caja-lateral-1'>
                            <img src={transporte} className='imagen' />
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default servicios;