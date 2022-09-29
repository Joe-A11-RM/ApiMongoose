let mongoose = require('mongoose')
require("dotenv").config({ path: "Config/.env" })
class Database {
    connect() {
        let server = process.env.SERVER
        let database = process.env.DATABASE
        mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log("Database connection successfully")
            }).catch((err) => {
                console.log("Database connection error")
            })
    }
}
module.exports = new Database()