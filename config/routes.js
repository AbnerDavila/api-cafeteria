const userRouter = require('../routes/user.router');
const productRouter = require('../routes/product.router');
const pedidoRouter = require('../routes/pedido.router');

module.exports = (app) => {
    app.use("/api/users", userRouter);
    app.use("/api/products", productRouter);
    app.use("/api/pedidos", pedidoRouter);
}
