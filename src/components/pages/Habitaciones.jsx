import React, { useState, useEffect } from "react";
import "../../Styles/habitaciones2.css";
import HabSencilla from "./HabitacionesCards/HabSencilla";
import HabDoble from "./HabitacionesCards/HabDoble";
import HabTriple from "./HabitacionesCards/HabTriple";
import HabEmpre from "./HabitacionesCards/HabEmpre";
import HabPenth from "./HabitacionesCards/HabPenth";
import Footer from "../Footer";
import axios from "axios";
import VentanasModales from "../VentanasModalesHab";
import styled from "styled-components";

export const Habitaciones = () => {
  const [opciones, setOpciones] = useState({
    sencilla: false,
    doble: false,
    triple: false,
    penthouse: false,
    empresarial: false,
    sencillaydoble: false,
    tripleyempresarial: false,
    penthouseyempresarial: false,
  });

  const borrarTodo = () => {
    setOpciones({
      sencilla: false,
      doble: false,
      triple: false,
      penthouse: false,
      empresarial: false,
      sencillaydoble: false,
      triplayempresarial: false,
      penthouseyempresarial: false,
    });
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (id === "sencillaydoble") {
      setOpciones({ ...opciones, sencillaydoble: checked });
    } else if (id === "tripleyempresarial") {
      setOpciones({ ...opciones, tripleyempresarial: checked });
    } else if (id === "penthouseyempresarial") {
      setOpciones({ ...opciones, penthouseyempresarial: checked });
    } else {
      setOpciones({ ...opciones, [id]: checked });
    }
  };

  const [precioSencilla, setPrecio] = useState("");
  const [precioDoble, setPrecio1] = useState("");
  const [precioTriple, setPrecio2] = useState("");
  const [precioEmpresarial, setPrecio3] = useState("");
  const [precioPenth, setPrecio4] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/habitaciones");
        const { data } = response;
        setPrecio(formatCurrency(data[0].precio));
        setPrecio1(formatCurrency(data[1].precio));
        setPrecio2(formatCurrency(data[2].precio));
        setPrecio3(formatCurrency(data[3].precio));
        setPrecio4(formatCurrency(data[4].precio));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const formatCurrency = (value) => {
    const formattedValue = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(value);

    return formattedValue.replace(/,00$/, "");
  };

  const [estado1, cambiarEstado1] = useState(false);
  const [estado2, cambiarEstado2] = useState(false);
  const [estado3, cambiarEstado3] = useState(false);
  const [estado4, cambiarEstado4] = useState(false);
  const [estado5, cambiarEstado5] = useState(false);

  return (
    <div>
      <div className="bannerHabServ">
        <h1 className="h1-HabServ">Tipos de Habitaciones </h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 mb-lg-0 mb-4 px-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-white rounded shadow">
              <div className="container-fluid flex-lg-column align-items-stretch">
                <h4
                  className="mt-2 "
                  style={{ fontWeight: "600", color: "#A96596" }}
                >
                  Filtros
                </h4>
                <button
                  className="navbar-toggler shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#filterDropdown"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse flex-column align-items-stretch mt-2"
                  id="filterDropdown"
                >
                  <div className="border bg-light p-3 rounded mb-3">
                    <h5
                      className="mb-3 "
                      style={{ fontWeight: "600", color: "#A96596" }}
                    >
                      Mirar disponibilidad
                    </h5>
                    <label className="form-label" style={{ fontWeight: "500" }}>
                      Fecha
                    </label>
                    <input
                      type="date"
                      className="form-control shadow-none mb-3"
                    />
                  </div>
                  <div className="border bg-light p-3 rounded mb-3">
                    <h5
                      className="mb-3"
                      style={{ fontWeight: "600", color: "#A96596" }}
                    >
                      Tipo de habitación
                    </h5>
                    <div className="mb-2">
                      <input
                        type="checkbox"
                        id="sencilla"
                        className="form-check-input shadow-none me-1"
                        checked={opciones.sencilla}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        style={{ fontWeight: "500" }}
                        htmlFor="sencilla"
                      >
                        Sencilla
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="checkbox"
                        id="doble"
                        className="form-check-input shadow-none me-1"
                        checked={opciones.doble}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        style={{ fontWeight: "500" }}
                        htmlFor="doble"
                      >
                        Doble
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="checkbox"
                        id="triple"
                        className="form-check-input shadow-none me-1"
                        checked={opciones.triple}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        style={{ fontWeight: "500" }}
                        htmlFor="triple"
                      >
                        Triple
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="checkbox"
                        id="penthouse"
                        className="form-check-input shadow-none me-1"
                        checked={opciones.penthouse}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        style={{ fontWeight: "500" }}
                        htmlFor="penthouse"
                      >
                        Penthouse
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="checkbox"
                        id="empresarial"
                        className="form-check-input shadow-none me-1"
                        checked={opciones.empresarial}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        style={{ fontWeight: "500" }}
                        htmlFor="empresarial"
                      >
                        Empresarial
                      </label>
                    </div>
                  </div>

                  <div className="border bg-light p-3 rounded mb-3">
                    <h5
                      className="mb-3"
                      style={{ fontWeight: "600", color: "#A96596" }}
                    >
                      Precio
                    </h5>
                    <div className="mb-2">
                      <input
                        type="checkbox"
                        id="sencillaydoble"
                        className="form-check-input shadow-none me-1"
                        checked={opciones.sencillaydoble}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        style={{ fontWeight: "500" }}
                        htmlFor="sencillaydoble"
                      >
                        $100.000 - $200.000
                      </label>
                    </div>

                    <div className="mb-2">
                      <input
                        type="checkbox"
                        id="tripleyempresarial"
                        className="form-check-input shadow-none me-1"
                        checked={opciones.tripleyempresarial}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        style={{ fontWeight: "500" }}
                        htmlFor="tripleyempresarial"
                      >
                        $300.000- $400.000
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="checkbox"
                        id="penthouseyempresarial"
                        className="form-check-input shadow-none me-1"
                        checked={opciones.penthouseyempresarial}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        style={{ fontWeight: "500" }}
                        htmlFor="penthouseyempresarial"
                      >
                        $500.000
                      </label>
                    </div>
                  </div>

                  <div className="border bg-light p-3 rounded mb-3">
                    <button
                      className="btn btn-sm w-100 text-black btn-outline-dark custom-bg shadow-none mb-2"
                      style={{ fontWeight: "500" }}
                      onClick={borrarTodo}
                    >
                      Borrar todo
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="col-lg-9 col-md-12 px-4">
            {!opciones.sencilla &&
              !opciones.doble &&
              !opciones.triple &&
              !opciones.penthouse &&
              !opciones.empresarial &&
              !opciones.sencillaydoble &&
              !opciones.tripleyempresarial &&
              !opciones.penthouseyempresarial && (
                <>
                  <HabSencilla handleClick={() => cambiarEstado2(!estado2)} />
                  <HabDoble handleClick={() => cambiarEstado1(!estado1)} />
                  <HabTriple handleClick={() => cambiarEstado5(!estado5)} />
                  <HabEmpre handleClick={() => cambiarEstado3(!estado3)} />
                  <HabPenth handleClick={() => cambiarEstado4(!estado4)} />
                </>
              )}
            {(opciones.sencilla || opciones.sencillaydoble) && <HabSencilla />}
            {(opciones.doble || opciones.sencillaydoble) && <HabDoble />}
            {opciones.triple && !opciones.tripleyempresarial && <HabTriple />}
            {opciones.empresarial && !opciones.tripleyempresarial && (
              <HabEmpre />
            )}
            {opciones.penthouse && !opciones.penthouseyempresarial && (
              <HabPenth />
            )}
            {opciones.penthouseyempresarial && (
              <>
                <HabPenth />
              </>
            )}
            {opciones.tripleyempresarial && (
              <>
                <HabTriple />
                <HabEmpre />
              </>
            )}
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>

      {/* ----------------------------------Habitacion doble---------------------------------------------------- */}
      <VentanasModales estado={estado1} cambiarEstado={cambiarEstado1} titulo="Habitacion doble">
        <Contenido>
          <img
            src={require("../../Images/habitacion2.jpeg")}
            className="img-modal1"
            alt="Room"
          />

          <span>Cuenta con 2 camas y baño </span>
          <span>Tiene una buena vista del paisaje</span>
          <span>
            Costo por noche: $200.000 sin incluir servicios adicionales
          </span>
          <span>Amplio espacio para descanzar y relajarce</span>
          <span>
            Servicios adicionales incluyen servicio al cuarto, limpieza en la
            mañana y en la tarde, desayuno y servicio de lavanderia
          </span>
          <span>
            Cargos adicionales: Consumo del minibar, toallas extra, medicinas
          </span>

          <img
            src={require("../../Images/logoPosada.png")}
            alt="logo"
            id="logo-2"
          />
        </Contenido>
      </VentanasModales>

      {/* ----------------------------------Habitacion sencilla---------------------------------------------------- */}
      <VentanasModales estado={estado2} cambiarEstado={cambiarEstado2} titulo='Habitacion sencilla'>
        <Contenido>
          <img
            src={require("../../Images/habitacion3.jpg")}
            className="img-modal1"
            alt="Room"
          />
        </Contenido>
      </VentanasModales>

      {/* ---------------------------------Habitacion Empresarial---------------------------------------------------- */}
      <VentanasModales estado={estado3} cambiarEstado={cambiarEstado3} titulo='Habitacion empresarial'>
        <Contenido>
          <img
            src={require("../../Images/habitacion3.jpg")}
            className="img-modal1"
            alt="Room"
          />
        </Contenido>
      </VentanasModales>

      {/* ---------------------------------Habitacion Penthouse---------------------------------------------------- */}
      <VentanasModales estado={estado4} cambiarEstado={cambiarEstado4} titulo='Habitacion penthouse'>
        <Contenido>
          <img
            src={require("../../Images/hotel23.jpg")}
            className="img-modal1"
            alt="Room"
          />
        </Contenido>
      </VentanasModales>

      {/* ---------------------------------Habitacion Triple---------------------------------------------------- */}
      <VentanasModales estado={estado5} cambiarEstado={cambiarEstado5} titulo='Habitacion triple'>
        <Contenido>
          <img
            src={require("../../Images/habitaciontriple.jpg")}
            className="img-modal1"
            alt="Room"
          />
        </Contenido>
      </VentanasModales>
    </div>
  );
};

export default Habitaciones;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
