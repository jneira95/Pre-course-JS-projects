
let prueba = [1,2,3,4,5]


function newpush(array) {
    for (let i = 1; i < arguments.length; i++) {
        if (i !== 0) {
            array[array.length] = arguments[i]
        }
    } 
}

console.log(prueba,5,4);


