const Sequelize = require('sequelize'); 
const sequelize = new Sequelize('instawash', 'root', 'instawash', {
    host: 'localhost',
    dialect : 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

sequelize
    .transaction((transaction) => {
        return User.create({
            firstName: 'Abraham',
            lastName: 'Lincoln'}, { transaction }).then( (user) => {
                return User.findAll( { transaction });
            }).then(() => {
                return new Promise((resolve, reject) => {
                    reject(new Error('test for rollback'))
                });
            });
    })
    .then(result => console.log(result))
    .catch(err => console.error(err));



