let cantidad = 0
const itamaño = document.getElementById("tamaño")
const inumeros = document.getElementById("numeros")
const bmostrar = document.getElementById("mostrar")
let digitos = new Array()
let permutacion = new Array()

function elegir() {
    let numero = itamaño.value
    cantidad = numero
    console.log(cantidad);
    inumeros.removeAttribute("disabled")
    bmostrar.removeAttribute("disabled")
    inumeros.setAttribute("minlength", "3")
    inumeros.setAttribute("maxlength", "" + cantidad)
}

function permutar() {
    var resultados = [];
    function permute(lista, prueba) {
        var dato, prueba = prueba || [];

        for (var i = 0; i < lista.length; i++) {
        dato = lista.splice(i, 1);
        if (lista.length === 0) {
            resultados.push(prueba.concat(dato));
        }
        permute(lista.slice(), prueba.concat(dato));
        lista.splice(i, 0, dato[0]);
        }

        return resultados;
    }
    resultados = permute(digitos)
    console.log(resultados);
    // resultados.forEach(x => {
    //     dato = ""
    //     x.forEach(i => dato += i)
    //     x = dato
    // })
    console.log(resultados);
    permutacion = resultados
}

function factorial() {
    console.log(itamaño.value);
    let original = itamaño.value
    let factorial = original
    for (let i = 1; i < original; i++) {
        factorial *= i
    }
    console.log("factorial de: " + original);
    console.log(factorial);
    permutar()
}

function mostrar() {
    factorial()

}

function revisar() {
    // bmostrar.removeAttribute("onclick")
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
    // bmostrar.setAttribute("onclick", "mostrar();")
}