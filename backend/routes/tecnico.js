const express = require('express');
const Tecnico = require('../models/tecnico');
const router = express.Router();

// Verificar si el usuario ha iniciado sesión
const verificarSesion = (req, res, next) => {
  if (!req.session.usuario) {
    return res.redirect('/');
  }
  next();
};

router.use(verificarSesion);

// Ver técnicos
router.get('/', (req, res) => {
  res.send(`Bienvenido - ${req.session.usuario.nombre}`);
});

// Crear técnico
router.post('/crear', async (req, res) => {
  const { nombre, especialidad } = req.body;
  const tecnico = new Tecnico({ nombre, especialidad });
  await tecnico.save();
  res.send('Técnico creado');
});

module.exports = router;
