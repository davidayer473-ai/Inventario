import PromptSync from "prompt-sync";
import fs from "fs";
import {
    agregarProducto,
    mostrarProducto,
    editarProducto,
    eliminarProducto,
    mostrarEstadistica,
    leerInventario
} from "./functions.js";

const prompt = PromptSync();
let dato = leerInventario();

let opcion = "";
do {
    console.log("--Menú de Inventario--");

    console.log("1 = Agregar Producto");
    console.log("2 = Mostrar Productos");
    console.log("3 = Editar Producto");
    console.log("4 = Eliminar Producto");
    console.log("5 = Mostar Estadísticas");
    console.log("6 = Salir");
    opcion = prompt("Elegir opcion: ");

    console.clear();

    switch (opcion) {
        case "1":
            agregarProducto(dato);
            break;
        case "2":
            mostrarProducto(dato);
            break;
        case "3":
            editarProducto(dato);
            break;
        case "4":
            eliminarProducto(dato);
            break;
        case "5":
            mostrarEstadistica(dato);
            break;
        case "6":
            console.log("Saliendo del sistema... ¡Hasta luego!");
            break;
        default:
            console.log("Opción no válida. Intenta de nuevo.");
            console.log("-----------------------------");
            break;
    }
} while (opcion !== "6");
