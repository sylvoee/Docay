

// const userModel = require('../model/user');
// const careProviderProfileModel = require('../model/careProviderProfile');

// // get careprovider
// module.exports = careProvider = (req, res, next) =>{
//  res.send("care provider");
//  console.log('care proviseer home ok? ');
// //  next()
// }

// // post  care Provider Profile
// module.exports = careProvider = (req, res, next) =>{
// // const{DOB,specialties,  nationality, maritalStatus, sex, summaryStatement, portfolioLink,
// // profileImage, qualification, workExperience, user} = req.body ;
    
// // let aCareProvider = new careProviderProfileModel({DOB,specialties,  nationality, maritalStatus, sex, 
// // summaryStatement, portfolioLink, profileImage, qualification, workExperience, user : '63bfe4c8c158348a1d7f191e'});

// // aCareProvider.save((err, docs)=>{
// //        if(err){res.send("Err in posting")}
// //        if(docs){" SUCCESS " + res.send(docs)}
// //     });   
// //     next(); 
// res.send("Post page ok");

// }


// // edit  care Provider
// module.exports = careProvider = (req, res, next) =>{

// const{DOB,specialties,  nationality, maritalStatus, sex, summaryStatement, portfolioLink,
//      profileImage, qualification, workExperience,id} = req.body ;

// careProviderProfileModel.findOneAndUpdate({_id:req.body.id},{
// DOB,specialties,  nationality, maritalStatus, sex, summaryStatement, portfolioLink, profileImage, 
// qualification, workExperience}, (err, success)=>{
//        if(err){
//         res.send("failed");
//        }
//        if(success){
//         res.send("Care Provider edited");
//        }
       
//     });
//         next(); 
//     }

 
// // find a care provider
// module.exports = aCareProvider = (req, res, next) =>{
//     const{aCareProviderRecord} = req.body;
    
//     careProviderProfileModel.findOne({email:aCareProviderRecord}).populate('user').exec((err, docs)=>{
//      if(docs){
//         res.send(docs);
//        console.log(docs);
//      }
//      if(err){
//      res.send("Error in Querying database");
//      console("Error in Querrying database")
//      }
//     }); 
//     next();
// }
