const mongoose = require('mongoose');
const Db = 'mongodb+srv://mogo22:newPassword@cluster0.oetu1.mongodb.net/storeLocator?retryWrites=true&w=majority'
 mongoose.connect(Db).then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log(`Not connected ${err}`)
});