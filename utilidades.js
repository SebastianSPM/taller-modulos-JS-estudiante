const formatearPrecio = (precio) => {
    return precio.toLocaleString("es-CO")
}

const esEmailValido = (email) => {
    return email.includes("@") && email.includes(".");
}

const calcularDescuento = (precio, porcentaje) => {
 return precio - (precio * (porcentaje / 100));
}

export {
    formatearPrecio,
    esEmailValido,
    calcularDescuento
}