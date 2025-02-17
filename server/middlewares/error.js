const handleErrors = (err, req, res, next) => {
  // codee body
  res.status(err.statusCode || 400)
  .json({ message: err.message || "Somethig Wrong!!!" });
}

module.exports = handleErrors;