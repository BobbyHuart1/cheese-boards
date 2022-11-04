const {Board, Cheese, User} = require('../models')
const db = require('../db/db')


async function seed(){

    await db.sync({
        force:true
    })

    await User.bulkCreate([
        {
            name: 'Olabusoye',
            email: 'olabusoye@gmail.com'
        },
        {
            name: 'Rashdan',
            email: 'rashdan@gmail.com'
        },
        {
            name: 'Esgrid',
            email: 'tuktuk@gmail.com'
        },
        {
            name: 'Alessio',
            email: 'Alessio@gmail.com'
        },
        {
            name: 'Sasha',
            email: 'fish@gmail.com'
        },
        {
            name: 'Ihsan',
            email: 'Ihsan@gmail.com'
        },
       
    ])

    await Board.bulkCreate([
        {
            type: 'Steel',
            description: 'Hard and break-proof',
            rating: 7
        },
        {
            type: 'Wood',
            description: 'Hard and easy to use',
            rating: 9
        },
        {
            type: 'Plastic',
            description: 'Cheap and replaceable',
            rating: 5
        },
    ])

    await Cheese.bulkCreate([
        {
            title: 'Mozzarella',
            description: 'semi-soft Mozzarella is supposed to be consumed fresh, within a few hours of being made from pasteurized.'
        },
        {
            title: 'Cheddar',
            description: 'crumbly texture when it is young, but is still largely smooth. As it ages, its texture gets sharper.'
        },
        {
            title: 'Emmental',
            description: 'hard in texture and its thin rind is typically wrapped in paper.'
        },
        {
            title: 'Brie',
            description: 'soft in texture and derives its name from the French region Brie.'
        },
        {
            title: 'Gouda',
            description: 'rich, flavorful and semi-hard cheese which is made from cows milk.'
        }
    ])


 
    
}

seed()

module.exports = seed