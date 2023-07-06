const assert = require('assert')
const { obterPessoas } = require(`./service`)

describe('Star Wars Tests',() => {
    it('deve buscar o r2d2 com o formato correto',async () => {
        const expected = [{ nome: 'RD-D2', peso: '96' }]
        const nomeBase = 'rd-d2'
        const resultado = await obterPessoas(nomeBase)
        assert.deepEqual(resultado, expected)
    })
})