
const patientAppointmentRecordModel = require('../model/appointmentReport');


// get patient report
module.exports = patientReport = (req, res, next) =>{
 res.send("Repoert page or form");

//  next()
}

// post  patient report
module.exports = patientReport = (req, res, next) =>{

    const{report,image,  hospitalNo} = req.body ;
    
    let aPatient = new patientAppointmentRecordModel({report, image,  hospitalNo});

    aPatient.save((err, docs)=>{
       if(err){res.send("Err in posting")}
       if(docs){"REPOR SUCCESS " + res.send(docs)}
    });   
    // next(); 

}

 
// search a patient 
module.exports = patientSearch =( req, res) =>{
    const{search} = req.body ;
    patientAppointmentRecordModel.find({hospitalNo:search}).exec((err, docs)=>{
     if(docs){
        res.send(docs);
     console.log(docs);
     }
     if(err){
     res.send("Error in Querrying database");
     console("Error in Querrying database")
     }
    }); 
}
