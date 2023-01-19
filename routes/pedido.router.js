const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedido.controller');

router.get('/', pedidoController.getPedidos);
router.get('/:id', pedidoController.getPedido);
router.post('/', pedidoController.createPedido);
router.put('/:id', pedidoController.updatePedido);
router.delete('/:id', pedidoController.deletePedidos);

module.exports = router;
