const mongoose = require('mongoose')

const connect = async (uri) => {
    try {
        await mongoose.connect(uri)
        console.log("Succsfully connected MongoDB")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connect;