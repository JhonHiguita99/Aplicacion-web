const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

let clientes = []; // Almacenamiento en memoria

// Ruta para crear un cliente
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

// Ruta para obtener la lista de clientes
app.get('/clientes', (req, res) => {
  res.json(clientes);
});

// Ruta para eliminar un cliente
app.delete('/clientes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  clientes = clientes.filter(cliente => cliente.id !== id);
  res.status(200).json({ message: 'Cliente eliminado' });
});

app.listen(port, () => {
  console.log(`Servidor API escuchando en http://http//35.172.214.87:${port}`);
});
