let usermodel = require("../Models/user.model")
class User {
    static adduser = async function(req, res) {
        try {
            let msg = await usermodel.create(
                req.body
            )
            res.send(msg)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }

    static findall = async function(req, res) {
        try {
            let getall = await usermodel.find()
            res.send(getall)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }

    static updateuser = async function(req, res) {
        try {
            let updateditem = await usermodel.findOneAndUpdate({
                _id: req.params.id
            }, req.body)
            res.send(updateditem)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }

    static deleteuser = async function(req, res) {
        try {
            let deleteitem = await usermodel.findOneAndDelete({
                _id: req.params.id
            })
            res.send(deleteitem)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }
}
module.exports = User