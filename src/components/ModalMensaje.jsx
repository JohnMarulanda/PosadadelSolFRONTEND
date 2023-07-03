import React from "react";
import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ModalMensaje  = ({estado,cambiarEstado}) => {
    return (
        <>
            { estado &&
            <Overlay>
                <ContenedorModal>
                    <BotonCerrar onClick={() => cambiarEstado(false)}>
                        X
                    </BotonCerrar>
                    <TituloModal>
                        Gracias por contactarnos!
                    </TituloModal>
                    <MensajeModal>
                        Tu mensaje fue enviado exitosamente
                    </MensajeModal>
                    <UltimoMensaje>
                        Pronto recibiras tu respuesta
                    </UltimoMensaje>
                    <IconoModal>
                        <CheckCircleIcon/>
                    </IconoModal>
                </ContenedorModal>
            </Overlay>
            }  
        </>
    )
}

export default ModalMensaje;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    positon: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
   
`;

const ContenedorModal = styled.div`
    width: 800px;
    height: 500px;
    margin-top: 50px;
    min-height: 100px;
    background: white;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba (100,100,111,0.2) 0px 7px 29px 0px;
    padding: 0;
    align-items: center;
    justify-content: center;
`;

const BotonCerrar = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #B63C47;

    &:hover{
        background: #883C77;
        color: #FFFF4C;
    }
    
`;

const TituloModal = styled.h1`
    margin-top: 150px;
    min-height: 100px;
    color: #8B2E57;
    position: relative;
    align-items: center;
    justify-content: center;
`;

const MensajeModal = styled.h2`
    color: #A96596;
`;

const IconoModal = styled.button`
    color: #8B2E57;
    background: white;
    position: absolute;
`;

const UltimoMensaje = styled.h3`
    color: #A96596;
`;