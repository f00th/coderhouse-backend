class ProductManager {
    constructor() {
        this.product = [];
    }

    getProduct() {
        console.log(this.product);
        return this.product;
    }

    getProductById(code) {
        const object = this.product.find(obj => obj.code === code);
        if (object === undefined) {
            console.log('Not found');
        } else {
            console.log(object);
        }
        return object;
    }

    //falta requerir todos los campos como obligatorios
    addProduct(title, description, price, thumbnail, code, stock) {
        const object = this.product.find(obj => obj.code === code);
        if (object !== undefined) {
            if (object.code === code) {
                console.log('Codigo ya utilizado, no se ha podido gregar el producto\n');
            }
        } else {
            const addedProduct = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            this.product.push(addedProduct);
            console.log('Producto agregado satisfactorimente');
        }   
    }
}

const products = new ProductManager;

console.log('Agregando productos');
products.addProduct('mesa', 'ratona', 100, 'none', 'a', 10);
products.addProduct('silla', 'escritorio', 50, 'none', 'b', 5);
console.log('\nAgregando producto con codigo ya utilizado')
products.addProduct('cama', 'simple', 200, 'none', 'b', 15);

console.log('\nArray de productos');
products.getProduct();
console.log('\nBusqueda por id');
products.getProductById('b');
products.getProductById('c');
