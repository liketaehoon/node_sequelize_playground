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
    updatedAt : {
        type: Sequelize.DATE,
        field : 'MODIFYDATE'
    }
}, {
    timestamps: true,
    freezeTableName: true,
    tableName: 'tb_user',
    paranoid: false, // don't delete set deleatedAt:
});

User
    .findOne()
    .then(user => {
        console.log(user.get('name'));
    });

