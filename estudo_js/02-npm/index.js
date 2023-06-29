// Trabalhando com Callbacks

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: "Aladin",
            dataNascimento: new Date()
        })
        
    }, 1000);
    
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null,{
            telefone: '1199002',
            ddd: 11
        }) 
        
    }, 2000);
    
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null,{
            rua: 'dos bobos',
            numero: 0
        }) 
        
    }, 3000);
    
}

const usuario = obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.log('DEU RUIM em USUARIO', error)
        return 
    }

    console.log("usuario", usuario)

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.log('DEU RUIM em TELEFONE', error1)
            return 
        }
        
        console.log("telefone", telefone)
    })
    obterEndereco(usuario.id, function resolverEndereco(error1, endereco) {
        if (error1) {
            console.log('DEU RUIM em TELEFONE', error1)
            return 
        }
        console.log("endereco", endereco)
    })
})
// const telefone = obterTelefone(usuario.id)
// console.log('telefone',telefone)