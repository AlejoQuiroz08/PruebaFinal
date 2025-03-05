const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  clave: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  roles: [{
    type: String,
    enum: ['tecnico', 'cliente', 'admin'],
    default: 'cliente'
  }]
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
