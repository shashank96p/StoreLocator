const store = require('../models/store');
const path = require('path');
const fs = require('fs');

module.exports = {
    addStore: async (req, res, next) => {
    try {
        const { storeName, address,city, country,state,postalCode } = req.body;
        //add user and save
       
           let image =  fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename));
                    
         
        
        const newUser = new store({ storeName, address,city, country,state,postalCode,image });
         
        const insert =  await newUser.save();
        if(insert){
            res.redirect('/getStore')
        } else {

          return res.render('/addStore',{msg: 'Failed to insert',})
        }
    } catch (error) {
    return next(error);
    }
    },
    getStoreList: async (req, res, next) => {
        try {
      
        const stores = await store.find()
          return res.render('index', {data:stores });
        
        } catch (error) {
        return next(error);
        }
    },
    updateStore: async (req, res, next) => {
        try {
            if (!req.body) {
                return res.status(400).send({
                message: "Data to update can not be empty!"
                });
            }
            const id = req.params.id;
            let image =  fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename));
            req.body.image = image;
            const data = await store.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            
                if (!data) {
                    return res.render('')
                } else res.redirect('/getStore')
                }catch (error) {
                    return next(error);
                }
    },
    deleteStore: async (req, res, next) => {
        try {
        
            const id = req.params.id;
            const data = await store.findByIdAndRemove(id)
            
            if (!data) {
                return res.render('')
            } else res.redirect('/getStore')
                }catch (error) {
                    return next(error);
                }
    },
    getStoreListById: async (req, res, next) => {
        try {
      
        const stores = await store.findOne({_id:req.params.id})
          return res.render('storeEdit', {data:stores });
        
        } catch (error) {
        return next(error);
        }
    },
}
