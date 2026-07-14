class Usuario{
    constructor(nombre, email, esVip){
        this.nombre = nombre;
        this.email = email;
        this.esVip = esVip;
    }

    saludo(){
        return `Hola, soy ${nombre}`
    }
}

export default Usuario;