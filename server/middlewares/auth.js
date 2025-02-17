const renderError = require("../utils/renderError")
const { clerkClient } = require('@clerk/express')

exports.authCheck = async (req, res, next) => {
  // code
  try {
    console.log('hello i sus')
    const userId = req.auth.userId
    //console.log(userId)
    //console.log(ascaSaSc)
    if (!userId) {
      return renderError(401, "Unauthorized")
    }
    const user = await clerkClient.users.getUser(userId)
    req.user = user
    next()
  } catch (error) {
    next(error)  }
}