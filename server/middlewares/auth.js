const renderError = require("../utils/renderError")
const { clerkClient } = require('@clerk/express')

exports.authCheck = async (req, res, next) => {
  // code
  try {
    const userId = req.auth.userId;

    if (!userId) {
      return renderError(401, "Unauthorized")
    }
    const user = await clerkClient.users.getUser(userId)
    req.user = user
    next()
  } catch (error) {
    next(error)  }
}