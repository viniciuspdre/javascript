function verificar() {
    var x = document.getElementById('n1')
    var y = document.getElementById('n2')
    var z = document.getElementById('n3')
    var res = document.getElementById('reschild')
    if (x.value > y.value && x.value > z.value) {
        res.innerHTML = `${x.value}`
    }else if (y.value > x.value && y.value > z.value) {
        res.innerHTML = `${y.value}`
    }else if (z.value > x.value && z.value > y.value){
        res.innerHTML = `${z.value}`
    }else if (x.value == y.value || x.value == z.value || y.value == z.value) {
        res.innerHTML = 'Alguns dos valores são iguais, cheque novamente.'
    }
}