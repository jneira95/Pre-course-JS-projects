

function map(array, callback){
    var result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = callback(array[i])
    }
    return result
}

var prueba = [1,2,3,4]

var nuevo = map(prueba, function(elemento) {
    return elemento * 10
})

console.log(nuevo);




