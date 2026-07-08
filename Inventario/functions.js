import PromptSync from "prompt-sync";
import fs from "fs";

const prompt = PromptSync();

export function agregarProducto(dato) {
   
}

export function mostrarProducto(dato) {
    
}

export function editarProducto(dato) {
    let preguntarProducto = prompt("Que producto desea editar: ");
    console.clear();

    let opcion = "";
    let suma = 0;
    let resta = 0;
    let contador = 0;

    for (let i = 0; i < dato.productos.length; i++) {
        if (preguntarProducto == dato.productos[i].nombre) {
            contador++;

            console.log("Precio actual:", dato.productos[i].precio);
            console.log("1 = Sumar | 2 = Restar | 3 = Nada");
            opcion = prompt("Que desea realizar al precio de " + preguntarProducto + ": ");
            console.log("-----------------------------");

            if (opcion == "1") {
                suma = parseFloat(prompt("Cuanto desea sumar al precio: "));
                console.log("-----------------------------");
                while (isNaN(suma) || suma <= 0) {
                    console.log("Error: cantidad invalida");
                    suma = parseFloat(prompt("Cuanto desea sumar al precio: "));
                    console.log("-----------------------------");
                }
                dato.productos[i].precio += suma;

            } else if (opcion == "2") {
                resta = parseInt(prompt("Cuanto desea restar al precio: "));
                console.log("-----------------------------");
                while (isNaN(resta) || resta <= 0) {
                    console.log("Error: cantidad invalida");
                    resta = parseInt(prompt("Cuanto desea restar al precio: "));
                    console.log("-----------------------------");
                }
                dato.productos[i].precio -= resta;
            }
            console.clear();

            console.log("Stock actual:", dato.productos[i].stock);
            console.log("1 = Sumar | 2 = Restar | 3 = Nada");
            opcion = prompt("Que desea realizar al stock de " + preguntarProducto + ": ");
            console.log("-----------------------------");

            if (opcion == "1") {
                suma = parseFloat(prompt("Cuanto desea sumar al stock: "));
                console.log("-----------------------------");
                while (isNaN(suma) || suma <= 0) {
                    console.log("Error: cantidad invalida");
                    suma = parseFloat(prompt("Cuanto desea sumar al stock: "));
                    console.log("-----------------------------");
                }
                dato.productos[i].stock += suma;

            } else if (opcion == "2") {
                resta = parseInt(prompt("Cuanto desea restar al stock: "));
                console.log("-----------------------------");
                while (isNaN(resta) || resta <= 0) {
                    console.log("Error: cantidad invalida");
                    resta = parseInt(prompt("Cuanto desea restar al stock: "));
                    console.log("-----------------------------");
                }
                dato.productos[i].stock -= resta;
            }
        }
    }
        console.clear();
        console.log("¡Producto editado con exito!");
        console.log("-----------------------------");

    if (contador === 0) {
        console.clear();
        console.log("¡Producto no encontrado!");
        console.log("-----------------------------");
    }

    guardarInventario(dato);
}

export function eliminarProducto(dato) {
    
}

export function mostrarEstadistica(dato) {
    
}

export function leerInventario() {
    let leerTexto = fs.readFileSync("inventario.json", "utf-8");
    return JSON.parse(leerTexto);
}

function guardarInventario(dato) {
    let crearTexto = JSON.stringify(dato, null, 2);
    fs.writeFileSync("inventario.json", crearTexto);
}
