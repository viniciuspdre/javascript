function mostrar() {
    var p = document.getElementsByName('perso')
    var msg = document.getElementById('nomepp')
    var nome = ''
    if (p[0].checked) {
        nome = 'Naruto'
    }else if (p[1].checked) {
        nome = 'Sakura'
    }else if (p[2].checked){
        nome = 'Sasuke'
    }
msg.innerText = `${nome}`
}
p.addEventListener('click', mostrar)