import React, { useState } from 'react';
import api from '../axios';

const Tecnico = () => {
  const [nombre, setNombre] = useState('');
  const [especialidad, setEspecialidad] = useState('');

  const crearTecnico = async () => {
    try {
      const res = await api.post('/tecnico/crear', { nombre, especialidad });
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
        type="text"
        placeholder="Especialidad"
        value={especialidad}
        onChange={(e) => setEspecialidad(e.target.value)}
      />
      <button onClick={crearTecnico}>Crear Técnico</button>
    </div>
  );
};

export default Tecnico;
