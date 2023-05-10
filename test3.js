const fs = require("fs");

if (fs.existsSync("test.txt")) {
    const contenido = fs.readFileSync("test.txt", "utf-8");
    console.log(contenido);
    fs.appendFileSync("test.txt", " agregando al archivo");
} else {
    fs.writeFileSync("test.txt", "Inicio |");
}

fs.writeFile("test.txt", "prueba async", (err) => {
    if (err) {
        console.log("error al escribir el archivo");
    } else {
        console.log("archivo escrito correctamente")
    }
})

fs.readFile("test.txt", "utf-8", (err, content) => {
    if (err) {
        console.log("error al leer el archivo");
    } else {
        console.log(content);
    }
})