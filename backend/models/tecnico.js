const mongoose = require('mongoose');

const tecnicoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  especialidad: {
    type: String,
    required: true
  }
});

const Tecnico = mongoose.model('Tecnico', tecnicoSchema);

module.exports = Tecnico;
