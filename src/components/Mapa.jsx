import React from "react";
import "../Styles/MapaStyle.css";
import Button from "react-bootstrap/Button";

function Mapa() {
  return (

    <>
      <div className="cont-7">
        <p id="title-8">
          <strong> Encuentranos</strong>
        </p>
        <p id="txt-6">
          Usa el mapa para conocer nuestra ubicación, y podras saber que
          paisajes alrededor te esperan.
        </p>
      </div>

      <div className="cont-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5628.222819688058!2d-76.19351750245288!3d4.070365106300722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39c432a16d8163%3A0xdaa99c2edc9b4719!2sUniversidad%20del%20Valle%20-%20Sede%20Villa%20Campestre!5e0!3m2!1ses!2sco!4v1685319775515!5m2!1ses!2sco"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          id="map-1"
        ></iframe>
      </div>
    </>
  );
}

export default Mapa;
