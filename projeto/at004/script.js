function gerar(){
    var valor = document.getElementById('valor')
    var res = document.getElementById('seltab')
    if (valor.value.length == 0) {
        alert('[ERRO]Não foi possível calcular porque você não inseriu um valor, volte e insira um valor.')
    }else {
        var v = Number(valor.value)
        var i = 1
        res.innerHTML = ''
        while(i <= 10){
            var item = document.createElement('option')
            item.text = `${v} * ${i} = ${v*i}`
            item.value = `res${i}`
            res.appendChild(item)
            i++
        }
    }
}