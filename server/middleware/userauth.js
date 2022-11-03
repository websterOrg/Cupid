const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const user = require('../model/user')

const authorize = asyncHandler(async (req, res, next) => {

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Getting token from header after revoing bearer
      token = req.headers.authorization.split(' ')[1]

      // comparing both the tokens
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // user data from decoded id from jwt
      req.user = await user.findById(decoded.id).select('-password')

      next()
    }
    // if any error occured like token is not provided or wrong token is provided
    catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = { authorize }