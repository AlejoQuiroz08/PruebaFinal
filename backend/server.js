const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const tecnicoRoutes = require('./routes/tecnico');
const clienteRoutes = require('./routes/cliente');
const ticketRoutes = require('./routes/ticket');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'mi-secreto', resave: false, saveUninitialized: true }));

mongoose.connect('mongodb://localhost:27017/sistema_web', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log('Error al conectar con MongoDB:', err));

app.use('/auth', authRoutes);
app.use('/tecnico', tecnicoRoutes);
app.use('/cliente', clienteRoutes);
app.use('/ticket', ticketRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
