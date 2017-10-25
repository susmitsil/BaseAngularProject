
var orgService = require('../service/organizationService.js');

module.exports = {
  getAllOrganizations:getAllOrganizations,
  addOrganization:addOrganization,
  updateOrganization:updateOrganization
}

function getAllOrganizations(req, res) {
  var listOrgs=orgService.getAllOrganizations();
};

function addOrganization(req, res) {
  var status=orgService.addOrganization();
};

function updateOrganization(req, res) {
  var status=orgService.updateOrganization();
};

function getOrganization(req, res) {
  //var status=orgService.updateOrganization();
};