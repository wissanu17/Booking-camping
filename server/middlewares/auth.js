exports.authCheck = (req, res, next) => {
  // code
  try {
    console.log("Hello Middleware")
    if (true) {
      next()
    } else {
      res.status(401).json({ message: "Unauthorized" })
    }
  } catch (error) {
    console.log(error.massage)
  }
}