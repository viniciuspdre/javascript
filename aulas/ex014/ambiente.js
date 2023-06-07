/*function parimp(n){
    if (n%2==0){
        return 'Par'
    }else{
        return 'Ímpar'
    }
}

let res = parimp(5)
console.log(res)*/

/*function soma(x=0, y=0) {
    return x + y
}

let res = soma(4,5)
console.log(res)*/

/*let v = function(x) {
    return x*2
}

console.log(v(5))*/

/*function fatorial(n) {
    let fat = 1
    for(var c = n; c > 1;c--){
       fat *= c //fat = fat * c
    }
    return fat
}

console.log(fatorial(5))*/

function fatorial(n){
    if (n==1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))