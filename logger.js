module.exports = function (req, res, next) {
  console.log("== Got a request");
  console.log("  - Method:", req.method);
  console.log("  - Path:", req.url);
  next();
};
