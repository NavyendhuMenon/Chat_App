

const express = require ('express')
const registerUser = require('../controller/signUpUser')
const signIn = require('../controller/verifySignIn')
const getuserDetails = require('../controller/getUserDetails')
const logout = require('../controller/logout')

const user = express.Router()


user.post('/register', registerUser)
user.post('/login', signIn)
user.get('/user-details',getuserDetails)
user.get('/logout', logout)

module.exports = user