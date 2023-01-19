const Pedido = require("../models/pedido.model");

exports.getPedidos = async (req, res) => {
    try {
        const data = await Pedido.find({});
        if (data) {
            return res.send(data);
        }
        return res.status(400).send({ message: 'An error has occurred!' })
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
}

exports.getPedido = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Pedido.findById(id);
        if (data) {
            return res.send(data);
        }
        return res.status(400).send({ message: 'An error has occurred!' })
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
}

exports.createPedido = (function (req, res) {
    try {
        const newPedido = req.body;
        const PedidoCreated = Pedido.create(newPedido);
        if (PedidoCreated) {
            return res.status(201).send({ message: "Pedido created!", data: PedidoCreated });
        } else {
            return res.status(400).send({ message: "An error has occured! Pedido not created!" });
        }
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }

});

exports.updatePedido = async function (req, res) {
    const data = req.body;
    const id = req.params.id;

    try {
        const pedidoUpdated = await Pedido.findByIdAndUpdate(id, { $set: data }, { new: true });
        if (pedidoUpdated) {
            return res.status(202).json({ message: "Pedido updated", data: pedidoUpdated });
        } else {
            return res.status(400).send({ message: "An error has occured! Pedido not created!" });
        }
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

exports.deletePedidos = async function (req, res) {
    try {
        const id = req.params.id;
        const deletePedido = await Pedido.deleteOne({ _id: id });

        if (deletePedido.deletedCount > 0) {
            return res.status(202).json({ message: "Pedido deleted", data: deletePedido });
        } else {
            return res.status(400).send({ message: "Sorry, pedido not deleted!" });
        }
    } catch (error) {
        return res.status(400).send(error);
    }
};
