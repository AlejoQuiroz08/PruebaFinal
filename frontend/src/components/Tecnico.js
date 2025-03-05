import React, { useState } from 'react';
import api from '../axios';

const Tecnico = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const crearTecnico = async () => {
    try {
      const res = await api.post('/tecnico/crear', { nombre, email });
      alert(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Crear Técnico</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={crearTecnico}>Crear Técnico</button>
    </div>
  );
};

export default Tecnico;
