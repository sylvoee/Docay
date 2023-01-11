const mongoose = require('mongoose');

    const patientAppointmentRecordSchema = new mongoose.Schema({
        // _id : {type:mongoose.Schema.Types.ObjectId},
    
    hospitalNo : {
       ref : 'patientReg',
       type:String
    },

  report : String ,
  image:String ,
  createdAt: {type: Date, default: Date.now}

});



const patientAppointmentRecordModel = mongoose.model('patientAppointmentRecord', patientAppointmentRecordSchema);
module.exports = patientAppointmentRecordModel;

