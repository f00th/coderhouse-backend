
class Contador {
    static cuentaGlobal = 0;

    constructor(nombre) {
        this.nombre = nombre;
        this.cuenta = 0;
    }
    
    getResponsable() {
        console.log(this.nombre);
        return this.nombre;
    }

    getCuentaIndividual() {
        console.log(this.cuenta)
        return this.cuenta;
    }

    contar() {
        this.cuenta = this.cuenta + 1;
        Contador.cuentaGlobal = Contador.cuentaGlobal + 1;
        return this.cuenta;
    }
    
    getCuentaGlobal() {
        console.log(Contador.cuentaGlobal);
        return Contador.cuentaGlobal;
    }
}

const jorge = new Contador('Jorge');
const mauro = new Contador('Mauro');

jorge.contar();
mauro.contar();
jorge.getResponsable();
mauro.getResponsable();
jorge.getCuentaIndividual();
mauro.getCuentaIndividual();
jorge.getCuentaGlobal();

const a = 3**3;
console.log(a);

const b = ['yo', 'tu', 'el'];
const c = b.includes('tu');
console.log(c);

let array1 = [1,2,3,4];
let suma = array1.reduce(
    (totalParcial, item) => totalParcial + item, 0
);

console.log(suma);