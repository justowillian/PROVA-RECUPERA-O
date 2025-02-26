const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/ClienteController');

router.post('/', clienteController.createCliente);
router.get('/', clienteController.readClientes);
router.put('/', clienteController.updateCliente);
router.delete('/id_cliente', clienteController.deleteCliente);

module.exports = router;