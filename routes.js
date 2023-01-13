// importing controllers
const indexController = require('./controller/indexController');
const userController = require('./controller/userController');
const registerPatientController = require('./controller/patientRegController');
const patientReportController = require('./controller/patientReportController');
const careProviderController = require('./controller/careProviderProfileController');
const careGiverController = require('./controller/careGiverController');



const express = require('express');

const router = express.Router();

router.get('/', index);

router.get('/sign-up', signUp);
router.post('/sign-up', signUp);

router.get('/login', login);
router.post('/login', login, confirmLogin);

router.get('/logout', logOut);

router.get('/confirm-password', confirmPassword);
router.post('/confirm-password', confirmPassword);

router.get('/change-password', changePassword);
router.post('/change-password', changePassword);


// register patient
router.get('/register-patient', registerPatient);
router.post('/register-patient', registerPatient);

// pateint report routes
router.get('/patient-report', patientReport);
router.post('/patient-report', patientReport);
router.put('/patient-report', patientReport);

router.post('/search', patientSearch);


// // Care Provisers Routes
// router.get('/care-provider', careProvider);
// router.post('/care-provider', careProvider);
// router.put('/care-provider', careProvider);
// router.get('/aCare-provider:id', careProvider);


router.get('/care-giver', careGiver);
router.post('/care-giver', careGiver);
router.put('/care-giver', careGiver);

router.get('/care-giver/:id', acareGiver);








module.exports = router;



