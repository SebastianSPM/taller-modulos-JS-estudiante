const formatearPrecio = (precio) => {
    return precio.toLocaleString("es-CO")
}

const esEmailValido = (email) => {
    return email.includes("@") && email.includes(".");
}

const calcularDescuento = (precio, porcentaje) => {
 const descuento = precio * (porcentaje / 100);
 return precio - descuento;
}

export {
    formatearPrecio,
    esEmailValido,
    calcularDescuento
}