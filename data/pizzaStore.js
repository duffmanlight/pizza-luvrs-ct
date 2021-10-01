const Sequelize = require('sequelize')

const database = 'pizza-db-sept-28'
const host = 'pizza-db-sept28.ch2rp96pc7jf.us-west-2.rds.amazonaws.com'
const username = 'postgres'
const password = 'password'


const pgClient = new Sequelize(
  database,
  username,
  password,
  {
    host: host,
    dialect: 'postgres'
  }
)

const Pizza = pgClient.define('pizza', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  toppings: {
    type: Sequelize.STRING
  },
  img: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  created: {
    type: Sequelize.BIGINT
  }
})

Pizza.initialize = async () => {
  return Pizza.sync({ force: true }).then(() => {
    console.log('postgres connection ready')
  }).catch(err => console.error(err))
}

module.exports = Pizza
