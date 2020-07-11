module.exports = function (res, req, next) {
  if (!req.user.isAdmin) return res.status(403).send("Access Denied");

  next();
};
