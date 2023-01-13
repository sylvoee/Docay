
const userModel = require('../model/user');
const careGiverProfileModel = require('../model/careGiver');

// get careGiver
module.exports = careGiver = (req, res, next) =>{
    res.send("Care Giver");
    console.log('care giver');
   //  next()

   }

   // post  care Giver Profile
module.exports = careGiver = (req, res, next) =>{
    
const{specialties,  nationality, DOB, maritalStatus, sex, summaryStatement, portfolioLink,
profileImage, user, qualification, workExperience} = req.body ;
    
let aCareGiver = new careGiverProfileModel({specialties, DOB, nationality, maritalStatus, sex, 
summaryStatement, portfolioLink, profileImage, qualification, workExperience, user:'63bfe51fc158348a1d7f1921'});

aCareGiver.save((err, docs)=>{
       if(err){res.send("Err in posting " + err)}
       if(docs){" SUCCESS " + res.send(docs)}
    });   
    // next(); 

}

// edit  care Provider
module.exports = careGiver = (req, res, next) =>{

const{DOB,specialties,  nationality, maritalStatus, sex, summaryStatement, portfolioLink,
     profileImage, qualification, workExperience, id} = req.body;

careGiverProfileModel.findOneAndUpdate({_id:id},{
DOB,specialties,  nationality, maritalStatus, sex, summaryStatement, portfolioLink, profileImage, 
qualification, workExperience}, (err, success)=>{
       if(err){
        res.send("failed");
       }
       if(success){
        res.send("Care Provider edited");
       }
       
    });
// res.send(req.body);
    
    }

 

// find a care provider
module.exports = acareGiver = (req, res, next) =>{
    const user = req.params.id;
    console.log(user);
    
    careGiverProfileModel.findOne({user:user}).exec((err, docs)=>{
     if(docs){
       res.send(docs);
       console.log(docs);
     }
     if(err){
     res.send(err);
     console.log(err)
     }
    }); 

}