const fs = require("fs");

class ProductManager {
    constructor() {
        this.product = [];
        const productString = fs.readFileSync('product.json', "utf-8");
        const product = JSON.parse(productString)
        this.product = product;
    }
    
    getProduct() {
        console.log('Array of products\n');
        console.log(this.product);
        return this.product;
    }

    getProductById(id) {
        const object = this.product.find(obj => obj.id === id);
        if (object === undefined) {
            console.log('Not found\n');
        } else {
            console.log('Product found:\n');
            console.log(object);
        }
        return this.product;
    }

    deleteProductById(id) {
        let index = this.product.findIndex(obj => obj.id === id);
        this.product.splice(index, 1);
        const productString = JSON.stringify(this.product);
        fs.writeFileSync("product.json", productString);
        console.log('Product deleted succesfully\n');
    }

    modifyProductById(id, title, description, price, thumbnail, code, stock) {
        let index = this.product.findIndex(obj => obj.id === id);
        const object = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.product[index] = object;
        const productString = JSON.stringify(this.product);
        fs.writeFileSync("product.json", productString);
        return this.product;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const object = this.product.find(obj => obj.code === code);

        // ID counter
        let id = Math.max(...this.product.map(o => o.id));
        id = id + 1;
        console.log(id);
        if (this.product.length === 0)
            id = 0

        if (object !== undefined) {
            if (object.code === code) {
                console.log('Code already in use, could not add product\n');
            }
        } else {
            const addedProduct = {
                id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            this.product.push(addedProduct);
            const productString = JSON.stringify(this.product);
            fs.writeFileSync("product.json", productString);
            console.log('Product added succesfully\n');
        }   
    }
}

const products = new ProductManager;

// Adding products
products.addProduct('table', 'dinner', 100, 'none', 'a', 10);
products.addProduct('chair', 'office', 50, 'none', 'b', 5);
// Adding product with code already in use
products.addProduct('bed', 'king', 200, 'none', 'b', 15);

products.addProduct('couch', 'single', 200, 'none', 'c', 15);
products.addProduct('wardrobe', 'wood', 200, 'none', 'd', 15);

// Array of products
products.getProduct();
// Search by ID
products.getProductById(1);
products.getProductById(0);
// Delete by ID
products.deleteProductById(1);
// Modify product by ID
products.modifyProductById(3,'a',1,1,1,1,1);
products.getProductById(3);

