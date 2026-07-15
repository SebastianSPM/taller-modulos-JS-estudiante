import { formatearPrecio, calcularDescuento} from "./utilidades.js"
import { hayStock } from "./producto.js"

class Carrito{
    constructor(usuario, items = []){
        this.usuario = usuario;
        this.items = items;
    }

    agregar(producto, cantidad){
        if(!hayStock(cantidad)) return "Sin stock";

        this.items.push({
            producto,
            cantidad
        });

        return "Producto agregado al carrito";
    }

    subtotal(){
        let total = 0;

        for(let i of this.items){
            total += i.producto.precio * i.cantidad;
        }

        return total;
    }

    total(){
        const subtotal = this.subtotal();

        if(this.usuario && this.usuario.esvip){
            return calcularDescuento(subtotal, 10);
        }

        return subtotal;
    }

    recibo(){
        let textoRecibo = `Hola, ${this.usuario.nombre}\n`;

        for(let i of this.items){
            const valorFormateado = formatearPrecio(i.producto.precio * i.cantidad);
            textoRecibo += `${i.producto.nombre} x ${i.cantidad}: ${valorFormateado}\n`;
        }

        textoRecibo += `------------------\n`;
        textoRecibo += `Total: ${formatearPrecio(this.total())}`;

        return textoRecibo;
    }
}

export default Carrito;