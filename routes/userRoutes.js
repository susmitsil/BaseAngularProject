
var express = require('express');
var userController = require('../src/controller/userController.js');

var router = module.exports = express.Router();

router.post("/api/login", userController.login);

router.post("/api/signup", userController.signup);

router.post("/api/logout", userController.signup);

router.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

