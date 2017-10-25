

module.exports = {
  login:login,
  signup:signup,
  logout:logout
}

function login(req, res) {
  res.cookie('user', JSON.stringify(req.user));
  res.send(req.user);
};

function signup(req, res) {
  
};

function logout(req, res) {
  req.logout();
  res.send(200);
}