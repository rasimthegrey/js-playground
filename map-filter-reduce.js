
//map(callback[, thisObject]) returns a new array of the return value from executing 'callback' on every array item
let arr = [1, 2, 3]

let arr2 = arr.map(function(item) { return item+1 })
console.log(arr)
console.log(arr2)

//filter(callback[, thisObejct]): returns a new array containing the items for which callback returned true
let newArr = [1, 2, "A", "B", 42, 3.14, true]
let newArr2 = newArr.filter(function(item) { return typeof item === "string" })
console.log(newArr2)

// reduce(callback[, initialValue]): applies callback(accumulator, currentValue[, currentIndex[, array]])
        //for each value in the array for the purpose of reducing the list of items down to a single value.
        //The reduce function returns the final value returned by callback function.

/*
    If initialValue is specified, then callback is called with initialValue as the first parameter value
    and the value of the first item in the array as the second parameter value. 

    If initialValue is not specified, then callback's first two parameter values will be the first and second elements of the array.
    On every subsequent call, the first parameter's value will be whatever callback returned on the previous call,
    and the second parameter's value will be the next value in the array.

    If callback needs access to the index of the item being processed, on access to the entire array,
    they are available as optional parameters.
*/

let array = [10, 20, 30, 40]
let array2 = array.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0)
console.log(array2)