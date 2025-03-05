import React, { useState } from 'react';
import api from '../axios';

const Ticket = () => {
  const [clienteId, setClienteId] = useState('');
  const [tecnicoId, setTecnicoId] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const crearTicket = async () => {
    try {
      const res = await api.post('/ticket/crear', { clienteId, tecnicoId, descripcion });
      alert(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Crear Ticket</h2>
      <input
        type="text"
        placeholder="ID Cliente"
        value={clienteId}
        onChange={(e) => setClienteId(e.target.value)}
      />
      <input
        type="text"
        placeholder="ID Técnico"
        value={tecnicoId}
        onChange={(e) => setTecnicoId(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button onClick={crearTicket}>Crear Ticket</button>
    </div>
  );
};

export default Ticket;
