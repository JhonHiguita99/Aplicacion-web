const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
//const port = 5000;
const path = require('path');  // Asegúrate de que esta línea esté en el archivo


app.use(cors());
app.use(express.json());

let clientes = [];

// Agregar cliente
app.post('/clientes', (req, res) => {
  const { nombre, correo, telefono } = req.body;
  if (nombre && correo && telefono) {
    const nuevoCliente = { id: Date.now(), nombre, correo, telefono };
    clientes.push(nuevoCliente);
    res.status(201).json(nuevoCliente);
  } else {
    res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }
});

// Obtener clientes
app.get('/clientes', (req, res) => {
  res.json(clientes);
});

// Eliminar cliente
app.delete('/clientes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  clientes = clientes.filter(cliente => cliente.id !== id);
  res.status(200).json({ message: 'Cliente eliminado' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://35.172.194.218:${port}`);
});
