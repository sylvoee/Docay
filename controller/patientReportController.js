
const { findOne } = require('../model/appointmentReport');
const patientAppointmentRecordModel = require('../model/appointmentReport');
const patientRegModel = require('../model/patientReg');


// get patient report
module.exports = patientReport = (req, res, next) =>{
 res.send("Repoert page or form");

//  next()
}


// post  patient report
module.exports = patientReport = (req, res, next) =>{

const{report,image,  hospitalNo, user, patientReg} = req.body ;
    
let aPatient = new patientAppointmentRecordModel({report, image, nextAppointmentDate,  hospitalNo, 
    user: '63bfe4c8c158348a1d7f191e', patientReg: '63bf240a6f59f56af71747a1'});

    aPatient.save((err, docs)=>{
       if(err){res.send("Err in posting")}
       if(docs){"REPOR SUCCESS " + res.send(docs)}
    });   
    // next(); 

}



// edit  patient report
module.exports = patientReport = (req, res, next) =>{

    const{report,image, id} = req.body ;
    console.log(id);

    patientAppointmentRecordModel.findOneAndUpdate({_id:req.body.id} , {
        report,image, nextAppointmentDate }, (err, success)=>{
       if(err){
        res.send("failed");
       }
       if(success){
        res.send("Article edited");
       }
    })
        
    
        // next(); 
    
    }
 
// search a patient 
module.exports = patientSearch = (req, res) =>{
    const{search} = req.body;
    
    patientAppointmentRecordModel.findOne({hospitalNo:search}).populate('patientReg').exec((err, docs)=>{
     if(docs){
        res.send(docs);
       console.log(docs);
     }
     if(err){
     res.send("Error in Querying database");
     console("Error in Querrying database")
     }b
    }); 
}
