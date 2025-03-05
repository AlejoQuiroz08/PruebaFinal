import React, { useState } from 'react';
import api from '../axios';

const Cliente = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const crearCliente = async () => {
    try {
      const res = await api.post('/cliente/crear', { nombre, email });
      alert(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Crear Cliente</h2>
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
      <button onClick={crearCliente}>Crear Cliente</button>
    </div>
  );
};

export default Cliente;
