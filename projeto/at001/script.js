var h = window.document.getElementById('hora')
var i = document.getElementById('imagem')
var tempo = new Date()
var hora = tempo.getHours()

if (hora >= 0 && hora < 12) {
    h.innerHTML = `Agora são ${hora} horas.`
    i.src = 'fotomanha.png'
    document.body.style.backgroundColor = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    h.innerHTML = `Agora são ${hora} horas.`
    i.src = 'fototarde.png'
    document.body.style.backgroundColor = '#b9846f'
}else {
    h.innerHTML = `Agora são ${hora} horas.`
    i.src = 'fotonoite.png'
    document.body.style.backgroundColor = '#515154'
}
