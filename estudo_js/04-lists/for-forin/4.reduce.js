const { obterPessoas } = require('./service')

async function main(params) {
    try {
        const { results } = await obterPessoas(`a`)
        const pesos = results.map(item => parseInt(item.height))
        const total = results.reduce((anterior, proximo) => {
            return anterior + proximo
        })
    } catch (error) {
        console.error(`DEU RUIM`, error)
    }
}

