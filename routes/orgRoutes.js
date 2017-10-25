
var express = require('express');
var orgController = require('../src/controller/organizationController.js');

var router = module.exports = express.Router();

router.post("/api/organization", orgController.addOrganization);

router.put("/api/organization", orgController.updateOrganization);

router.get("/api/organizations", orgController.getAllOrganizations);

//router.get("/api/organization", orgController.getOrganization);
