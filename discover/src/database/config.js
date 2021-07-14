<<<<<<< HEAD
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

module.exports = () => {
    return open({
        filename: './src/database/rocketq.sqlite',
        driver: sqlite3.Database,
    })
}
=======
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

module.exports = () => {
    return open({
        filename: './src/database/rocketq.sqlite',
        driver: sqlite3.Database,
    })
}
>>>>>>> b83758e74df287c14007443e70c1a368ae59d90a
