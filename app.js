const express = require("express");
const { ProductManager } = require("./ProductManager")
const products = new ProductManager;
const app = express();
const PORT = 8080;
//
app.use(express.urlencoded({ extended: true }));
//

app.get("/products", (req, res) => {
    const {limit} = req.query;
    const items = products.getProduct();
    const filteredProducts = (limit > 0) ? items.slice(0, limit) : items;
    res.json(filteredProducts);
});

app.get("/products/:pid", (req, res) => {
    let id = Number(req.params.pid);
    let product = products.getProductById(id);
    res.json(product);
});



app.listen(PORT, () => {
    console.log(`example app on port ${PORT}`);
}); 