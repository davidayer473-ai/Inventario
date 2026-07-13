import PromptSync from "prompt-sync";
import fs from "fs";

const prompt = PromptSync();

export function agregarProducto(dato) {

   let nombre = prompt("Ingrese el nombre del producto a registrar: ");
   console.clear();
   while (!isNaN(nombre) || nombre.length == 0 || dato.productos.some(p => p.nombre === nombre)) {
    console.log(!isNaN(nombre) || nombre.length == 0 ? "Error: Nombre invalido" : "Error: Producto ya registrado");
    nombre = prompt("Ingrese el nombre del producto a registrar: ");
    console.log("-----------------------------");
   }

   console.clear();
   let categoria =  prompt("Ingrese la categoria del producto a registrar: ");
   console.clear();
   while (!isNaN(categoria) || categoria.length == 0) {
    console.log("Error: Categoria no valida");
    categoria =  prompt("Ingrese la categoria del producto a registrar: ");
    console.log("-----------------------------");
   }

   console.clear();
   let precio = parseFloat(prompt("Ingrese el precio del producto a registrar: "));
   console.clear();
   while (isNaN(precio) || precio < 0) {
    console.log("Error: Precio invalido");
    precio = parseFloat(prompt("Ingrese el precio del producto a registrar: "));
    console.log("-----------------------------");
   }

   console.clear();
   let stock = parseInt(prompt("Ingrese el stock del producto a registrar: "));
   console.clear();
   while (isNaN(precio) || precio < 0) {
    console.log("Error: Precio invalido");
    precio = parseFloat(prompt("Ingrese el precio del producto a registrar: "));
    console.log("-----------------------------");
   }

   let nuevoProducto = {nombre,categoria,precio,stock};
   dato.productos.push(nuevoProducto);

    console.clear();
    console.log("¡Producto registrado con exito!");
    console.log("-----------------------------");

    guardarInventario(dato);
}

export function mostrarProducto(dato) {
    if (dato.productos.length == 0) {
        console.clear();
        console.log("Inventario vacio");
        console.log("-----------------------------");
    }

    for (let i = 0; i < dato.productos.length; i++) {
        console.log((i+1)+"- Producto:", dato.productos[i].nombre);
        console.log("   Categoria:", dato.productos[i].categoria);
        console.log("   Precio:", dato.productos[i].precio);
        console.log("   Stock:", dato.productos[i].stock);
    }
    let enter = prompt("Enter para continuar");
    console.clear();
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
                while (isNaN(resta) || resta < 0 || dato.productos[i].precio < resta) {
                    console.log(isNaN(resta) || resta <= 0 ? "Error: cantidad invalida" : "Error: El precio no debe ser menor de 0");
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
                while (isNaN(suma) || suma < 0) {
                    console.log("Error: cantidad invalida");
                    suma = parseFloat(prompt("Cuanto desea sumar al stock: "));
                    console.log("-----------------------------");
                }
                dato.productos[i].stock += suma;

            } else if (opcion == "2") {
                resta = parseInt(prompt("Cuanto desea restar al stock: "));
                console.log("-----------------------------");
                while (isNaN(resta) || resta < 0 || dato.productos[i].stock < resta) {
                    console.log(isNaN(resta) || resta <= 0 ? "Error: cantidad invalida" : "Error: El stock no debe ser menor de 0");
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
    let preguntarProducto = prompt("Que producto desea eliminar: ");
    let contador = 0;

    for (let i = 0; i < dato.productos.length; i++) {
        if (preguntarProducto == dato.productos[i].nombre) {
            contador++;

            console.clear();
            dato.productos.splice(i, 1);
            break;
        }
    }
    
    if (contador === 0) {
        console.clear();
        console.log("Producto no encontrado");
        console.log("-----------------------------");
        return;
    }

    console.log("Producto eliminado exitosamente");
    console.log("-----------------------------");

    guardarInventario(dato);
}

export function mostrarEstadistica(dato) {
    let totalAlmacen = 0;

    for (let i = 0; i < dato.productos.length; i++){
        let valorTotalProducto = dato.productos[i].precio * dato.productos[i].stock;
        totalAlmacen += valorTotalProducto;
    }
    console.log("El valor monetario total del inventario es de:",totalAlmacen);
    console.log("-----------------------------");
}

export function leerInventario() {
    if (!fs.existsSync("inventario.json")) {
        const estructuraInicial = { productos: [] };
        fs.writeFileSync("inventario.json", JSON.stringify(estructuraInicial, null, 2), 'utf-8');
        return estructuraInicial;
    }
    try {
        const contenido = fs.readFileSync(RUTA_ARCHIVO, 'utf-8');
        return JSON.parse(contenido);
    } catch (error) {
        console.log("Error al leer el archivo, se usará un inventario vacío.");
        return { productos: [] };
    }
}

function guardarInventario(dato) {
    let crearTexto = JSON.stringify(dato, null, 2);
    fs.writeFileSync("inventario.json", crearTexto);
}
