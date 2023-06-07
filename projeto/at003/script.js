function contar(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    }else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('[ERRO]Passo inválido. Considerando (PASSO = 1)')
            p = 1
        }
        //contagem crescente
        if (i < f){
                for(i;i <= f; i = i + p){
                res.innerHTML += `${i} \u{1F449} `
            }
        //contagem decrescente    
        }else{
            for(i; i >= f; i-= p){
                res.innerHTML += `${i} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}