const express=require('express');
const passport = require('passport');
// using express route
const router=express.Router();
const homecontroler=require('../controllers/home-controller');
console.log('inside index');
console.log(homecontroler);
router.get('/',homecontroler.home);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/'}),homecontroler.create_session);


router.use('/soldier',require('./soldier'));
router.use('/terrorist',require('./terrorist'));





module.exports=router;