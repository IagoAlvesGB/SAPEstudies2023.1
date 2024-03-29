const {
    deepEqual, ok
} = require('assert')
const database = require('./database')
const DEFAULT_ITEM_CADASTRAR = { nome: 'Flash', nome: 'Speed', id: 1 }

describe('Suite de manipulacao de Herois', () => {
    before(async ()=> {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    })
    it('deve pesquisar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)
        //
        deepEqual(resultado, expected)
    })
    it('cadastrar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(actual, expected)
    })
    it('deve remover um heroid por id', async () => {
        const expected = true;
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(actual, expected)
    })
})