const express = require('express');
const Ticket = require('../models/ticket');
const router = express.Router();

// Verificar sesión
const verificarSesion = (req, res, next) => {
  if (!req.session.usuario) {
    return res.redirect('/');
  }
  next();
};

router.use(verificarSesion);

// Ver tickets
router.get('/', (req, res) => {
  res.send(`Bienvenido - ${req.session.usuario.nombre}`);
});

// Crear ticket
router.post('/crear', async (req, res) => {
  const { clienteId, tecnicoId, descripcion } = req.body;
  const ticket = new Ticket({ cliente: clienteId, tecnico: tecnicoId, descripcion });
  await ticket.save();
  res.send('Ticket creado');
});

module.exports = router;
