const { Cheese, Board, User } = require('../models')
const db = require('../db/db')

console.log(db)

describe('Cheese', () => {

    test('Cheese model exists', async () => {
        expect(Object.keys(db.models)).toContain('Cheese')
    })

    test('Cheese model fills', async () => {
        const exampleCheese = await Cheese.findByPk(1)
        expect (exampleCheese.title).toEqual('Mozzarella')
        expect (exampleCheese.description).toEqual('semi-soft Mozzarella is supposed to be consumed fresh, within a few hours of being made from pasteurized.')

    }) 
})
describe('Board', () => {

    test('Board model exists', async () => {
        expect(Object.keys(db.models)).toContain('Board')
    })

    test('Board model fills', async () => {
        const exampleBoard = await Board.findByPk(1)
        expect (exampleBoard.type).toEqual('Steel')
        expect (exampleBoard.description).toEqual('Hard and break-proof')

    }) 
})
describe('User', () => {

    test('User model exists', async () => {
        expect(Object.keys(db.models)).toContain('User')
    })

    test('User model fills', async () => {
        const exampleUser = await User.findByPk(1)
        expect (exampleUser.name).toEqual('Olabusoye')
        expect (exampleUser.email).toEqual('olabusoye@gmail.com')

    }) 
})

describe('associations', () => {
    test('check user can have multiple boards', async () =>{
        const rash = await User.findByPk(2)
        const board1 = await Board.findByPk(1)
        const board2= await Board.findByPk(2)
        await rash.addBoards([board1, board2])
        expect(await rash.countBoards()).toBe(2);
    })

})






