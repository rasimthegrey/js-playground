//fibonacci
const fib = (n) => {
    var a = 1
    var b = 1
    var fibo = 0
    if(n === 2 || n === 1){
        console.log("1")
        return
    }
    for(i=0;i<n-2;i++){
        fibo = a+b
        a = b
        b = fibo
    }
    console.log("Result = ", fibo)
    return
}

fib(3)

//factorial
const fac = (n) => {
    var result = 1
    if(n === 0 || n === 1){
        console.log("1")
        return
    }
    for(i=1;i<=n;i++){
        result *= i
    }
    console.log("Factorial = ", result)
    return
}

fac(4)

//circle area and perimeter
const circle = (r) => {
    var pi = 3
    var perimeter = 2 * pi * r
    var area = pi * (r**2)

    console.log("Perimeter = ", perimeter)
    console.log("Area = ", area)
    return
}

circle(5)