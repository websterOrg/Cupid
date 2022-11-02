const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const user = require('../model/user')

const createUser = asyncHandler ( async (req,res) => {
    console.log(req.body)
    const {email, password} = req.body
    
    if (!email || !password) {
        res.status(400);
        throw new Error('Please enter all the required detail');
      }
      const userExist = await user.findOne({email})
      if (userExist) {
        res.status(400);
        throw new Error('User already exists');
      }
    
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
    

      const userDetail = await user.create({
        email,
        password: hashedPassword,
      }) 
      if (user) {
        res.status(201).json({
          _id: userDetail.id,
          email: userDetail.email,
          token: generateWebToken(userDetail._id)
          
        })
      } else {
        res.status(400)
        throw new Error('Invalid user credentials')
      } 
}
)

const loginUser = asyncHandler( async (req,res) => {
    const { email, password } = req.body;

  const userData = await user.findOne({ email })
  if (userData && (await bcrypt.compare(password, userData.password))) {
    res.json({
      _id: userData.id, 
      email: userData.email,
      token: generateWebToken(userData._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})
const getUser = asyncHandler (async (req,res) => {
    console.log("gdfhdvnc");
    res.json({message : "user created"})
})

const generateWebToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  }
module.exports = {
    createUser,
    loginUser,
    getUser
}