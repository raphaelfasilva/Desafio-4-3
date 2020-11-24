const express = require('express')
const routes = express.Router()
const instructors = require('./teachers');
routes.get('/', function(req, res) {
    return res.redirect("/teachers")

})
routes.get('/teachers', function(req, res) {
    return res.render("teachers/index")
})
routes.post('/teachers', instructors.post)
routes.get('/teachers/create', function(req, res) {
    return res.render("teachers/create")
})
routes.get('/members', function(req, res) {
    return res.render("members/index")
})
module.exports = routes