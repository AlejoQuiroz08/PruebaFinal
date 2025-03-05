import React, { useState } from 'react';
import api from '../axios';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');

  const login = async () => {
    try {
      const res = await api.post('/auth/login', { email, clave });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
      />
      <button onClick={login}>Iniciar sesión</button>
    </div>
  );
};

export default Auth;
