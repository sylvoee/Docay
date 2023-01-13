const mongoose = require('mongoose');

    const careGiverProfileSchema = new mongoose.Schema({
        // _id : {type:mongoose.Schema.Types.ObjectId},
    // name: {type: String, lowercase: true}

  specialties: String,
  nationality: String,
  maritalStatus: String,
  educationalBackground:String,
  sex:String,
  summaryStatement: String ,

  institute:String,
  portfolioLink:String,
  linkedlnLink:String,
  profileImage: String,
  DOB: String,
  
  qualification:String,
  workExperience: Array,

  user:{
      ref:'User',
      type:mongoose.Schema.Types.ObjectId, 
      unique:true
  },
    createdAt: {type: Date, default: Date.now}

});



const careGiverProfileModel = mongoose.model('careGiverProfile', careGiverProfileSchema);
module.exports = careGiverProfileModel;

