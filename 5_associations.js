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

const UserCar = sequelize.define('userCar', {
    CAR_NAME: {
        type: Sequelize.STRING,
        field: 'CAR_NAME',
    }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'tb_user_carinfo',
    paranoid: false, // don't delete set deleatedAt:
});

User.hasMany(UserCar, {foreignKey:'TB_USER_ID', sourceKey: 'id' })
UserCar.belongsTo(User, {foreignKey: 'TB_USER_ID', targetKey: 'id' }); // Adds fk_company to User

User.findOne()
    .then(user => console.log(user));
User.findOne()
    .then(user => {return user.getUserCars();})
    .then(usercars => console.log(usercars));
