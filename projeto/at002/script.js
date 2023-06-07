function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var n = document.getElementById('nasc')
    var res = document.getElementById('res')
    if (n.value.length == 0 || n.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else{
        var s = document.getElementsByName('sex')
        var idade = ano - Number(n.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(s[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/bebem.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'img/jovm.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'img/adulm.png')
            }else { 
                img.setAttribute('src','img/idosom.png')
            }
        }else if (s[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/bebef.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'img/jovf.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'img/adulf.png')
            }else {
                img.setAttribute('src', 'img/idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}