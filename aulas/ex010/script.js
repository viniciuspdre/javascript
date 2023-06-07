var agora = new Date()
var h = agora.getHours()
console.log(`Seu Dentista informa a hora certa: ${h} horas.`)
if (h < 12){
    console.log('Nós do Seu Dentista te desejamos bom dia!')
} else if (h < 18){    
    console.log('Nós do Seu Desntista te desejamos boa tarde!')
} else if (h  >= 18){
    console.log('Nós do Seu Dentista te desejamos boa noite!')
}