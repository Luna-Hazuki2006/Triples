let cantidad = 0
const itamaño = document.getElementById("tamaño")
const inumeros = document.getElementById("numeros")
const bmostrar = document.getElementById("mostrar")
let digitos = new Array()
let permutacion = new Array()
let combinacion = new Array()

function elegir() {
    let numero = itamaño.value
    cantidad = numero
    console.log(cantidad);
    inumeros.removeAttribute("disabled")
    bmostrar.removeAttribute("disabled")
    inumeros.setAttribute("minlength", "3")
    inumeros.setAttribute("maxlength", "" + cantidad)
}

function permutar(arreglo) {
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
    resultados = permute(arreglo)
    return resultados
}

function combinar(lista) {
    let resultados = []
    let triple = 3
    for (let i = 0; i < lista.length - triple + 1; i++) {
            let dato = resultados.length
            resultados[dato] = []
            for (let j = i; j < i + triple; j++) {
                resultados[dato].push(lista[j])
            }
        }
    return resultados
}

function getCombination(array, length) {
    function iter(index, right) {
        if (right.length === length) return result.push(right);
        if (index === array.length) return;
        for (let i = index, l = array.length - length + right.length + 1; i < l; i++) {
            iter(i + 1, [...right, array[i]]);
        }
    }
    var result = [];
    iter(0, []);
    return result;
}

function factorial(dato) {
    console.log(dato);
    let original = dato
    let factorial = original
    for (let i = 1; i < original; i++) {
        factorial *= i
    }
    console.log("factorial de: " + original);
    console.log(factorial);
    return factorial
}

function proceso() {
    console.log("Ha empezado");
    let todo = itamaño.value
    let final = 0
    if (todo != 3) {
        final = factorial(todo) / (factorial(3) * factorial(itamaño.value - 3))
        console.log("el valor de combinaciones es: " + final);
        combinacion = combinar(digitos)
    } else {
        final = factorial(todo)
        console.log("el valor de permutaciones es: " + final);
        combinacion = combinar(digitos)
    }
    for (let i = 0; i < combinacion.length; i++) {
        let dato = combinacion[i]
        combinacion[i] = permutar(dato)
    }
    console.log(combinacion);
    console.log("prueba");
    console.log(getCombination(digitos, 3));
}

function revisar() {
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
    let validado = inumeros.value.length
    if (validado != itamaño.value) {
        bmostrar.setAttribute("onclick", "alert('El valor tiene que ser igual a su tamaño');")
    } else if (validado == itamaño.value) {
        bmostrar.setAttribute("onclick", "proceso();")
    }
}