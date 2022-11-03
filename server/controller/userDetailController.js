const asyncHandler = require('express-async-handler')
const userDetail = require('../model/userDetail')


const getUserDetail = asyncHandler ( async (req,res) =>{
    console.log(req.user.id);
    const userId = req.user.id;
    try {
        const user_obj = await userDetail.findOne({user : userId})
        res.json(user_obj);
        
    } catch (error) {
        res.json({message : "No user detail found.... "})
    }

}
)

const createUserDetail = asyncHandler ( async (req,res) => {
    console.log(req.body)
    console.log(req.user.id);
    const {name,email,dob,gender,genderInterest} = req.body
    
    
      const userExist = await userDetail.findOne({email})
      if (userExist) {
        res.status(400);
        throw new Error('User already exists');
      }
const u = req.user.id;
      const userDetail = await userDetail.create({
        user : u,
        email : req.user.email,
        name,
        dob,
        gender,
        genderInterest,
      }) 
      if (userDetail) {
        res.status(201).json({
          message: "successfully added use Detail",
        })
      } else {
        res.status(400)
        throw new Error('Invalid user credentials')
      } 
}
)

const addUserMatchDetail =  asyncHandler (async (req, res) => {
    // userId and matcheduserID is from userdetail id
    const {userId, matchedUserId} = req.body;

    console.log(matchedUserId,userId);
        const filter = {_id: userId} ;
        const update = {  $push: {matches: { matchedUserId }}};


    let doc = await userDetail.updateOne(filter, update);    
    res.send(doc);

})

const GetUserByGender =  asyncHandler ( async (req, res) => {
    
    const genderInterest = req.query.gender

        const query = {genderInterest: {$eq : genderInterest}}
        const foundUser = await userDetail.find(query);
        if(!foundUser)
        {
            res.json({message:"Not found"})
        }
        else{
            res.json(foundUser);
        }
 
})

const getUsersBymatch = asyncHandler (async (req, res) => {
    const userIds = JSON.parse(req.query.userIds)

        const pipeline =
            [
                {
                    '$match': {
                        'user_id': {
                            '$in': userIds
                        }
                    }
                }
            ]

        const foundUsers = await userDetail.aggregate(pipeline);
        res.send(foundUsers);


    })

module.exports = {
    getUserDetail,
    createUserDetail,
    addUserMatchDetail,
    GetUserByGender,
    getUsersBymatch
}