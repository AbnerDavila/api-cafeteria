const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.postUsers);
router.put('/:id', userController.putUsers);
router.delete('/:id', userController.deleteUsers);

module.exports = router;
