const mongoose = require('mongoose');

    const patientAppointmentRecordSchema = new mongoose.Schema({
        // _id : {type:mongoose.Schema.Types.ObjectId},
  report : String ,
  image:String ,
  nextAppointmentDate : Date ,

  patientReg : {
    ref : 'patientReg',
    type:mongoose.Schema.Types.ObjectId
 },

 user:{
   ref:'User',
   type:mongoose.Schema.Types.ObjectId, 
   unique:true
},
  createdAt: {type: Date, default: Date.now}

});



const patientAppointmentRecordModel = mongoose.model('patientAppointmentRecord', patientAppointmentRecordSchema);
module.exports = patientAppointmentRecordModel;

