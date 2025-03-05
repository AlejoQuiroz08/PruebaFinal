const express = require('express');
const Usuario = require('../models/usuario');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, clave } = req.body;
  const usuario = await Usuario.findOne({ email, clave });

  if (!usuario) {
    return res.status(401).send('Usuario o contraseña incorrectos');
  }

  // Guardar sesión en el servidor o enviar un JWT (token)
  req.session.usuario = usuario;

  res.redirect('/dashboard');
});

module.exports = router;
