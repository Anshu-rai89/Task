module.exports.home= async function(req,res)
{ try{
    
    console.log('in home controller');
   return res.render('home',
    {
        title:'Home||Signin'
    });
  }catch(err)
  {
      console.log(err);
      return ;
  }
}


module.exports.create_session=function(req,res)
{ 
       if(req.user.name=='soldier')
            {
                return res.render('soldier',
    {
        title:'soldier'
    });
       }
       else if(req.user.name=='terrorist')
            {
                return res.render('terrorist',
                {
                    title:'terrorist'
                });
                   
       }

       return res.redirect('back');
}


module.exports.terrorist=async function(req,res)
{ try{
    return res.render('terrorist',
    {
        title:'terrorist'
    });
}catch(err)
{
    console.log(err);
    return;
}
}

module.exports.soldier=async function(req,res)
{ try{ 
    return res.render('soldier',
    {
        title:'soldier'
    });
}catch(err)
{
    console.log(err);
    return;
}
}