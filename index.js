let cantidad = 0
const itamaño = document.getElementById("tamaño")
const inumeros = document.getElementById("numeros")
const bmostrar = document.getElementById("mostrar")
let digitos = new Array()

function elegir() {
    let numero = itamaño.value
    cantidad = numero
    console.log(cantidad);
    inumeros.removeAttribute("disabled")
    bmostrar.removeAttribute("disabled")
    inumeros.setAttribute("minlength", "3")
    inumeros.setAttribute("maxlength", "" + cantidad)
}

function factorial(params) {
    
}

function mostrar() {
    
}

function revisar() {
    let todos = []
    let valor = String(inumeros.value)
    console.log(valor.split(""));
    for (let i = 0; i < valor.length; i++) {
        let dato = valor.charAt(i)
        if (!isNaN(dato)) {
            
        }
    }
}