let ar = [1,2,3,4,5,6]

const newSlice = (array, start, end) => {
    let arr = [];
    if(end === undefined || end > array.length) end = array.length;
    for (let x = start; x < end; x++) {
        arr[arr.length]=array[x]    
    }
    return arr

}

console.log(newSlice(ar,1,3))



console.log(ar.splice(2,5));

