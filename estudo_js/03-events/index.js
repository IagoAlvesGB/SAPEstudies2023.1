const EventEmitter = require('events')
const interval = 1000
class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function (click){
    console.log('um usuario clicou', click)
})

const stdin = process.openStdin()
function main() {
    return new Promise(function (resolve, reject) {
        stdin.addListener('data', function (value) {
            console.log(`Voce digitou: ${value.toString().trim()}`)
            return resolve(value)
        })
    })
}
main().then(function (resultado){
    console.log(resultado.toString())
})

/*
// A Cada segundo...

meuEmissor.emit(nomeEvento, 'na barra de rolagem')
meuEmissor.emit(nomeEvento, 'no ok')

let count = 0
setInterval(() => {
    meuEmissor.emit(nomeEvento, 'no ok ' + (count++))
}, interval);
*/

