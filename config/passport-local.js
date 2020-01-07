const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;



passport.use(new LocalStrategy({
    usernameField: 'email',
   
},
function(email, password, done){
    // find a user and establish the identity
       let user={
           email:email,
           password:password
       };
       console.log(user);
       if(user.email=='soldier@thetarzanway.com' && user.password=='soldier')
       {   user.name='soldier';
               return done(null, user);
       }else if(user.email=='terrorist@thetarzanway.com' && user.password=='terrorist')
       {    user.name='terrorist';
               return done(null, user);
       }

         return done(null,false);
    }
));


passport.serializeUser(function(user, done){
    console.log(user);
    done(null, user.name);
});

passport.deserializeUser(function(name, done){
    

        return done(null,name );
});









passport.setAuthenticatedUser = function(req, res, next){
    if (req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.user = req.user;
    }

    next();
}



module.exports = passport;


