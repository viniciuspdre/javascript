function checar() {
    var l = document.getElementById('letra')
    var r = document.getElementById('resultado')
    if (l.value == 'a' || l.value == 'e' || l.value == 'i' || l.value == 'o' || l.value == 'u') {
        r.innerText = `Você digitou a vogal: ${l.value}.`
    }
    else {
        r.innerText = `Você digitou a consoante: ${l.value}.`
    }
}