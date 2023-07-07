const {
    deepEqual, ok
} = require('assert')
const database = require('./database')
const DEFAULT_ITEM_CADASTRAR = { nome: 'Flash', nome: 'Speed', id: 1 }

describe('Suite de manipulacao de Herois', () => {
    it('deve pesquisr um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.listar(expected.id)
        //
        ok(resultado, expected)
    })
})