
const express = require('express');
const Cliente = require('../models/cliente');
const router = express.Router();

// Verificar sesión
const verificarSesion = (req, res, next) => {
  if (!req.session.usuario) {
    return res.redirect('/');
  }
  next();
};

router.use(verificarSesion);

// Ver clientes
router.get('/', (req, res) => {
  res.send(`Bienvenido - ${req.session.usuario.nombre}`);
});

// Crear cliente
router.post('/crear', async (req, res) => {
  const { nombre, email } = req.body;
  const cliente = new Cliente({ nombre, email });
  await cliente.save();
  res.send('Cliente creado');
});

module.exports = router;
