// importing controllers
const indexController = require('./controller/indexController');
const userController = require('./controller/userController');
const registerPatientController = require('./controller/patientRegController');
const patientReportController = require('./controller/patientReportController');



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

// pateint report
router.get('/patient-report', patientReport);
router.post('/patient-report', patientReport);

router.post('/search', patientSearch);









module.exports = router;



