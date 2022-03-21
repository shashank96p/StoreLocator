

const User = require('../models/users');
const bcrypt = require('bcrypt')


// console.log(User);
module.exports = {
    login:async(req,res,next) => {
        try{
            const user = await User.findOne({ where : {username : req.body.username}});
            console.log(user);
            if(user){
               const password_valid = await bcrypt.compare(req.body.password,user.password);
               if(password_valid){
                return res.redirect('/getStore');
               } else {
      
                 return res.render('login',{err_msg: 'Username or Password is incorrect',})
               }
             }else{
               return res.render('login',{err_msg: 'Username Not Found'})
             }
        }catch(error){
            next(error);
        }
    }
}
