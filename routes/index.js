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







module.exports=router;