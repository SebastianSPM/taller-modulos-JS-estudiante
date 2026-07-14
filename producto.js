class Producto{
    constructor(nombre, precio, categoria, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    hayStock(cantidad){
        if(cantidad > stock) return false
        return true
    }

    ficha(){
        return `
            Nombre: ${this.nombre}
            prcio: ${this.precio}
            categoria: ${this.categoria}
            stock: ${this.stock}
        `
    }
}

export default Producto;