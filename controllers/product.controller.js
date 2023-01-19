const Product = require("../models/product.model");

exports.getProducts = async (req, res) => {
    try {
        const data = await Product.find({});
        if (data) {
            return res.send(data);
        }
        return res.status(400).send({ message: 'An error has occurred!' })
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
}

exports.getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findById(id);
        if (data) {
            return res.send(data);
        }
        return res.status(400).send({ message: 'An error has occurred!' })
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
}

exports.createProduct = (function (req, res) {
    try {
        const newProduct = req.body;
        const ProductCreated = Product.create(newProduct);
        if (ProductCreated) {
            return res.status(201).send({ message: "Product created!", data: ProductCreated });
        } else {
            return res.status(400).send({ message: "An error has occured! Product not created!" });
        }
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }

});

exports.updateProduct = async function (req, res) {
    const data = req.body;
    const id = req.params.id;

    try {
        const productUpdated = await Product.findByIdAndUpdate(id, { $set: data }, { new: true });
        if (productUpdated) {
            return res.status(202).json({ message: "Product updated", data: productUpdated });
        } else {
            return res.status(400).send({ message: "An error has occured! Product not created!" });
        }
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

exports.deleteProducts = async function (req, res) {
    try {
        const id = req.params.id;
        const deletedProduct = await Product.deleteOne({ _id: id });

        if (deletedProduct.deletedCount > 0) {
            return res.status(202).json({ message: "Product deleted", data: deletedProduct });
        } else {
            return res.status(400).send({ message: "Sorry, product not deleted!" });
        }
    } catch (error) {
        return res.status(400).send(error);
    }
};
