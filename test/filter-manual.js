

let filtrados = [12, 5, 8, 130, 44]

function esSuficientementeGrande(elemento) {
    return elemento >= 10;
}

const filtro = (array, exp) => {
    let ar = []
    for (let x = 0; x < array.length; x++) {
        if (exp(array[x])) ar[ar.length] = array[x]
    }
    return ar
}

console.log(filtro(filtrados, esSuficientementeGrande));




