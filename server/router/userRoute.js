

const express = require ('express')
const registerUser = require('../controller/signUpUser')
const signIn = require('../controller/verifySignIn')

const user = express.Router()


user.post('/register', registerUser)
user.post('/login', signIn)

module.exports = user