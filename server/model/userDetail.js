const mongoose = require('mongoose');

const userDetailSchema = new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
      },
      name: {
            type: String,
        },
      dob: {
        type: Date,
        required: true
      },
      gender : {
        type: String,
      },
      genderInterst : {
        type: String,
      },
      about:{
        type:String,
      },
      matches : Array,
    },
    { timestamps: true }
  );

  module.exports = mongoose.model('userDetail', userDetailSchema)