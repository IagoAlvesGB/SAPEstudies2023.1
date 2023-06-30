// Trabalhando com Callbacks

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(callback) {
    // Erro -> Reject
    // Sucesso -> Resolve
    return new Promise(function resolvePromise(resolve, reject){
        // return reject(new Error('DEU RUIM DE VERDADE!'))
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: "Aladin",
                dataNascimento: new Date()
            })
            
        }, 1000);
    })    
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject){
        // return reject(new Error('DEU RUIM DE VERDADE!'))
        setTimeout(function () {
            return resolve({
                telefone: '1199002',
                ddd: 11
            })            
        }, 2000);
    })  
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null,{
            rua: 'dos bobos',
            numero: 0
        }) 
        
    }, 3000);
    
}

const usuarioPromise = obterUsuario()

usuarioPromise
    .then(function (usuario){
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado){
       const endereco = obterEnderecoAsync(resultado.usuario.id)
       return endereco.then(function resolverEndereco(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
       })

    })
    .then(function (resultado){
        console.log('resultado', resultado) // Resultado Final
    })
    .catch(function (error){
        console.log('DEU RUIM', error)
    })









// const usuario = obterUsuario(function resolverUsuario(error, usuario) {
//     if (error) {
//         console.log('DEU RUIM em USUARIO', error)
//         return 
//     }

//     console.log("usuario", usuario)

//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//         if (error1) {
//             console.log('DEU RUIM em TELEFONE', error1)
//             return 
//         }
        
//         console.log("telefone", telefone)
//     })
//     obterEndereco(usuario.id, function resolverEndereco(error1, endereco) {
//         if (error1) {
//             console.log('DEU RUIM em TELEFONE', error1)
//             return 
//         }
//         console.log("endereco", endereco)
//     })
// })
// const telefone = obterTelefone(usuario.id)
// console.log('telefone',telefone)