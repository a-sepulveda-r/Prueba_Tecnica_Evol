const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/clientes', clientesController.getClientes);
router.post('/clientes', clientesController.crearClienteYMedidor);
router.put('/clientes/:rut', clientesController.actualizarCliente);
router.delete('/clientes/:rut', clientesController.eliminarClienteYMedidores);
router.delete(
  '/clientes/:clienteRut/medidores/:medidorCodigo',
  clientesController.eliminarMedidor
);

module.exports = router;
