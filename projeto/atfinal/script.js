var num = document.getElementById('num')
var lista = document.getElementById('valshow')
var res = document.getElementById('result')
var val = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if(isNumero(num.value) && !inLista(num.value, val)){
        val.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O valor inserido foi ${num.value}.`
        lista.appendChild(item)
    }else {
        alert('[ERRO]Valor inválido ou já inserido na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    res.innerHTML = `Você inseriu um total de: ${val.length} valores.`
    var soma = 0
    for(var i = 0; i < val.length; i++){
        soma = soma + Number(val[i])
    }
    res.innerHTML += `<br>A soma dos valores é correspondente a: ${soma}`
    var maior = Math.max.apply(null, val)
    var menor = Math.min.apply(null, val)
    res.innerHTML += `<br>O maior valor inserido foi: ${maior}<br>O menor valor inserido foi ${menor}`
    var media = (soma/val.length)
    res.innerHTML += `<br>A média dos valores corresponde a: ${media}`
}