import React from "react";
import { IoClose } from "react-icons/io5";

import styled from "styled-components";

function VentanasModales({ children, estado, cambiarEstado }) {
  return (
    <>
      <div className="habmodal">
        {estado && (
          <Overlay>
            <ContenedorModal>
              <Titulo>
                <h3>Reserva tu habitación</h3>
              </Titulo>
              <Cerrar onClick={()=> cambiarEstado(!estado)}>
                <IoClose width="100%" height="100%" />
              </Cerrar>

              {children}
            </ContenedorModal>
          </Overlay>
        )}
      </div>
    </>
  );
}

export default VentanasModales;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ContenedorModal = styled.div`
  width: 40%;
  height: 70%;
  background: #fff;
  position: relative;

  border-radius: 2rem;
  border: 1px solid #a9659a;
`;

const Titulo = styled.div`
  background: #fae1fc;
  border-radius: 2rem 2rem 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-beetween;
  margib-bottom: 20px;
  paddingbottom: 20px;
  border-bottom: 1px solid gray;

  h3 {
    margin-left: 2%;
    margin-top: 2%;
    font-weight: 600;
    font-size: 1.5vi;
  }
`;

const Cerrar = styled.button`
  position: absolute;
  top: 2%;
  right: 5%;
  background: #a9659a;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  color: #fff;

  &:hover {
    background: gray;
  }
`;
