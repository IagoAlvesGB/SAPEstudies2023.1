const { obterPessoas } = require('./service')

Array.prototype.newFilter = function (callback) {
    const lista = []
    for(index in this){
        const item = this[index]
        const result = callback(item, index, this)
        // 0, NULL, "", UNDEFINED === FALSE
        if(!result) continue;
        lista.push(item)
    }
}
async function main() {
    try {

        const { results } = await obterPessoas(`a`)

        const familiaLars = results.filter(function (item){
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1
            return result
        })
        const names = familiaLars.map((pessoa) => pessoa.name)

       /*
        const familiaLars = results.meulFilter((item,index,lista) => { 
            console.log(`index:  ${index}`, lista.length)
            return item.name.toLowerCase().indexOf(`lars`) !== -1 
        })

        const names = familiaLars.map((pessoa) => pessoa.name)
       */
        console.log(names)
    } catch (error) {
        
    }    
}

main()