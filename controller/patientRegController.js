
const patientRegModel = require('../model/patientReg');


// get patient form
module.exports = registerPatient = (req, res) =>{
 res.send("this is pateint registeration");
}

// post register patient
module.exports = registerPatient = (req, res) =>{

    const{DOB, occupation, patientCase, previousCase, maritalStatus, sex, patientRegImage, 
    address, chronicDis, pastMedicalCase, image, hospitalNo} = req.body ;
    
    let aPatient = new patientRegModel({DOB, occupation, patientCase, previousCase, maritalStatus, sex, patientRegImage, 
        address, chronicDis, pastMedicalCase, image, hospitalNo});

    aPatient.save((err, docs)=>{
       if(err){res.send("Err in posting")}
       if(docs){res.send(docs)}
    });    

}


// search a patient 
module.exports = patientSearch =( req, res) =>{
    const{search} = req.body ;
    patientRegModel.find({hospitalNo:search}).exec((err, docs)=>{
     if(docs){
        res.send(docs);
     console.log(docs);
     }
     if(err){
     res.send("Error in Querying database");
     console("Error in Querrying database")
     }
    }); 
}
