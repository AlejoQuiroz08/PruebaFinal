const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  tecnico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tecnico',
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  estado: {
    type: String,
    enum: ['pendiente', 'en proceso', 'resuelto'],
    default: 'pendiente'
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
