const service = require('./service') 

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []
    for (let indice = 0; indice <= this.length - 1; indice++) {
        const resultado = callback(this[indice])
        novoArrayMapeado.push(resultado)       
    }
    return 
}

async function main(params) {
    try {
        const results = await service.obterPessoas(`a`)
        // const names = []
        /* Modo 1
        
        
        results.results.forEach(item => {
            names.push(item.name)
        });

        Modo 2
        const names = results.results.meuMap((pessoa) => { return pessoa.name } )
       */
  

      const names = results.results.map(function (pessoa){
        return pessoa.name
       })

        console.log(`names`, names)
    } catch (error) {
        console.log(`DEU RUIM`, error)
    }
}
main()