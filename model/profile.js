const mongoose = require('mongoose');

    const doctorProfileSchema = new mongoose.Schema({
        // _id : {type:mongoose.Schema.Types.ObjectId},
    // name: {type: String, lowercase: true}
  DOB : Date,
  Specialties: String,
  nationality: String,
  maritalStatus: String,
  educationalBackground:String,
  sex:String,

  institute:String,
  portfolioLink:String,
  linkedlnLink:String,
  doctorProfileImage: String,
  
  qualification:String,
  workExperience: Array,

  user:{
      ref:'User',
      type:mongoose.Schema.Types.ObjectId, 
      unique:true
  },
    createdAt: {type: Date, default: Date.now}

});



const doctorProfileModel = mongoose.model('doctorProfile', doctorProfileSchema);
module.exports = doctorProfileModel;

