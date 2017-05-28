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
    name:{
        type: Sequelize.STRING,
        field: 'NAME'
    },
    createdAt : {
        type: Sequelize.DATE,
        field: 'REGDATE'
    },
}, {
    tableName: 'tb_user'
});

User
    .findOne()
    .then(user => {
        console.log(user);
    });

