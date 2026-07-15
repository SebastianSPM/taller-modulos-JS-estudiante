import Producto from "./producto.js";
import Usuario from "./usuario.js";
import Carrito from "./carrito.js";
import { esEmailValido } from './utilidades.js';

const usuario1 = new Usuario("Sebastian", "sebetipm@dominio.es", false);

console.log(esEmailValido(usuario1.email));

const producto1 = new Producto("Arroz", 1900, "granos", 90);
const producto2 = new Producto("pollo", 18400, "carnes", 30);

const carrito1 = new Carrito(usuario1);

const agregarCarrito1 = carrito1.agregar(producto1, 6);
console.log("Se agregaron 5 unidades de ", producto1.nombre, " - ", agregarCarrito1);

const agregarCarrito2 = carrito1.agregar(producto2, 3);
console.log("Se agregaron 3 unidades de ", producto1.nombre, " - ", agregarCarrito2);

console.log("\n----- RECIBO -----");
console.log(carrito1.recibo());






