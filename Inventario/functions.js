import PromptSync from "prompt-sync";
import fs from "fs";

const prompt = PromptSync();

export function agregarProducto(dato) {
   
}

export function mostrarProducto(dato) {
    
}

export function editarProducto(dato) {
    
}

export function eliminarProducto(dato) {
    
}

export function mostrarEstadistica(dato) {
    
}

function guardado(dato) {
    let crearTexto = JSON.stringify(dato, null, 2);
    fs.writeFileSync("inventario.json", crearTexto);
}