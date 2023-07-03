import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Styles/ReservaPage.css';
import { getid } from '../../hooks/loginToken';

const TableExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = getid();
        const response = await axios.get("http://localhost:4000/reserva/"+id);
        setData(response.data);
      } catch (error) {
        console.error('Error al obtener las reservas de las habitaciones', error);
      }
    };

    fetchData();
  }, []);

  return (
    <table className='table-reservaPage'>
      <thead>
        <tr>
          <th>Reserva ID</th>
          <th>ID</th>
          <th>Habitación ID</th>
          <th>Plan ID</th>
          <th>Servicio ID</th>
          <th>Fecha de inicio</th>
          <th>Fecha de fin</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.reserva_id}>
            <td>{item.reserva_id}</td>
            <td>{item.id}</td>
            <td>{item.habitacion_id}</td>
            <td>{item.plan_id}</td>
            <td>{item.servicio_id}</td>
            <td>{item.fecha_inicio}</td>
            <td>{item.fecha_fin}</td>
            <td>{item.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableExample;
