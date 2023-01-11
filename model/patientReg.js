const mongoose = require('mongoose');

    const patientRegSchema = new mongoose.Schema({
        // _id : {type:mongoose.Schema.Types.ObjectId},
    // name: {type: String, lowercase: true}
  DOB : Date,
  name:String ,
  occupation: String,
  patientCase: String,
  hospitalNo : {type:String, unique:true} ,
  previousCase :String ,
  maritalStatus: String,
  sex:String,

  patientRegImage: String,
  address:String,
  chronicDis :String ,
  pastMedicalCase:String,
  image:String ,
  createdAt: {type: Date, default: Date.now}

});



const patientRegModel = mongoose.model('patientReg', patientRegSchema);
module.exports = patientRegModel;

