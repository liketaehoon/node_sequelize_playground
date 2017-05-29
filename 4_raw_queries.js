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

sequelize.query("SELECT * FROM `tb_user` LIMIT 1", { type: sequelize.QueryTypes.SELECT})
  .then(users => {
      // We don't need spread here, since only the results will be returned for select queries
      console.log(users);
  })

sequelize.query('SELECT * FROM `tb_user` WHERE USEYN IN(:status) LIMIT :count',
  { replacements: { status: ['Y', 'N'], count: 1 }, type: sequelize.QueryTypes.SELECT }
).then(users => {
  console.log(users)
})
