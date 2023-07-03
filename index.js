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

function factorial() {
    
}

function mostrar() {
    
}

function revisar() {
    bmostrar.removeAttribute("onclick")
    let todos = ""
    let final = ""
    let valor = String(inumeros.value)
    console.log(valor.split(""));
    valor.split("").forEach(x => todos += (!isNaN(x)) ? x : '')
    console.log("sin letras es: " + todos);
    todos = [...new Set(todos.split(""))]
    todos.forEach(x => final += x)
    console.log("sin repetidos es: " + todos);
    console.log(todos);
    console.log("Al final sería: " + final);
    console.log(final);
    inumeros.value = final
    digitos = Array.from(todos)
    console.log("Los digitos son: ");
    console.log(digitos);
    bmostrar.setAttribute("onclick", "mostrar();")
}