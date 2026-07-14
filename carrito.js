import { formatearPrecio, calcularDescuento} from './utilidades'
import 

class Carrito{
    constructor(usuario, items = []){
        this.usuario = usuario;
        this.items = items
    }

    agregar(producto, cantidad){
        if(!producto.hayStock(cantidad)) return "Sin stock";

        this.items.push({
            producto,
            cantidad
        })

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

        if(this.usuario.esvip){
            return calcularDescuento(subtotal, 10);
        }

        return subtotal;
    }

    recibo(){
        return `

        `
    }
}

export default Carrito;