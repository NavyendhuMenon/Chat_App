

const express = require ('express')
const registerUser = require('../controller/signUpUser')
const signIn = require('../controller/verifySignIn')
const getuserDetails = require('../controller/getUserDetails')

const user = express.Router()


user.post('/register', registerUser)
user.post('/login', signIn)
user.get('/user-details',getuserDetails)

module.exports = user