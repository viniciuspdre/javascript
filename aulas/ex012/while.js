var i = 1
var x = 8
var ord = ''
while (i <= x) {
    switch(i) {
        case 1:
           ord = 'primeira'
        break
        case 2:
            ord = 'segunda'
        break
        case 3:
            ord = 'terceira'
        break
        case 4:
            ord = 'quarta'
        break
        case 5:
            ord = 'quinta'
        break
        case 6:
            ord = 'sexta'
        break
        case 7:
            ord = 'sétima'
        break
        case 8:
            ord = 'oitava'
        break
    }
    console.log(`Comi a ${ord} fatia de pizza.`)
    i++
}