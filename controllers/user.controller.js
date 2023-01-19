const User = require("../models/user.model");

exports.getUsers = async (req, res) => {
    try {
        const data = await User.find({});
        if (data) {
            return res.send(data);
        }
        return res.status(400).send({ message: 'An error has occurred!' })
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
}

exports.getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findById(id);
        if (data) {
            return res.send(data);
        }
        return res.status(400).send({ message: 'An error has occurred!' })
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
}

exports.postUsers = (function (req, res) {
    try {
        const newUser = req.body;
        const userCreated = User.create(newUser);
        if (userCreated) {
            return res.status(201).send({ message: "User created!", data: userCreated });
        } else {
            return res.status(400).send({ message: "An error has occured! User not created!" });
        }
    } catch (error) {
        return res.status(400).send({ message: error.message })
    }

});

exports.putUsers = async function (req, res) {
    const user = req.body;
    const id = req.params.id;

    try {
        const userUpdated = await User.findByIdAndUpdate(id, { $set: user }, { new: true });
        if (userUpdated) {
            return res.status(202).json({ message: "User updated", data: userUpdated });
        } else {
            return res.status(400).send({ message: "An error has occured! User not created!" });
        }
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

exports.deleteUsers = async function (req, res) {
    try {
        const id = req.params.id;
        const deletedUser = await User.deleteOne({ _id: id });

        if (deletedUser.deletedCount > 0) {
            return res.status(202).json({ message: "User deleted", data: deletedUser });
        } else {
            return res.status(400).send({ message: "Sorry, user not deleted!" });
        }
    } catch (error) {
        return res.status(400).send(error);
    }
};
