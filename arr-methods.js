let arr = [1, 2, 3]

// concat: joins 2 or more arrays and returns  new array
let arr2 = [4, 5, 6]
arr = arr.concat([arr2])
console.log(arr)

//join(delimiter = ""): join all elements of an array into a string
let listStr = arr.join(delimiter=",")
console.log(listStr)

//push: add 1 or more elements into array
arr.push(42)
console.log(arr)

//pop: removes last element
arr.pop()
console.log(arr)

//shift: removes first element
arr.shift()
console.log(arr)

//unshift: adds 1 or more elements to the front of an array
arr.unshift(42, ["a", "b"])
console.log(arr)

//slice(starn_index, end_index): extracts a section of array
arr = arr.slice(1, 3)
console.log(arr)

//splice(index, count_to_remove, addElem1, addElem2, ...): removes elements from an array and (optionally) replaces them
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
arr.splice(4, 3, "A", "B", "C", "D", "E")
console.log(arr)

//reverse
console.log(arr.reverse())

//sort()
console.log(arr.sort())

//indexOf(searchElement[, fromIndex]): searches the array for searchElement and returns the index of the first match
arr = [1, 2, 3, 4, 7, 6, 7, 8, 9, 0]
console.log(arr.indexOf(7, 5))