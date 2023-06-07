function calc(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var media = (Number(n1.value) + Number(n2.value))/2
    if (media >= 7 && media != 10) {
        res.innerText = 'Você foi aprovado!'
    }else if (media == 10) {
        res.innerText = 'Você foi aprovado com distinção!'
    }else {
        res.innerText = 'Você foi reprovado.'
    }
}