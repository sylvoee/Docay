const mongoose = require('mongoose');

    const careProviderProfileSchema = new mongoose.Schema({
        // _id : {type:mongoose.Schema.Types.ObjectId},
    // name: {type: String, lowercase: true}
  DOB : Date,
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
  
  qualification:String,
  workExperience: Array,

  user:{
      ref:'User',
      type:mongoose.Schema.Types.ObjectId, 
      unique:true
  },
    createdAt: {type: Date, default: Date.now}

});



const careProviderProfileModel = mongoose.model('careProviderProfile', careProviderProfileSchema);
module.exports = careProviderProfileModel;

