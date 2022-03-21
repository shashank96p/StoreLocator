
const controller = require("../controller/user")
const Store = require("../controller/store")
const  upload  = require('../helper/multer');

module.exports = (app) =>{
    app.post("/login",controller.login)
    app.post("/create",upload.single("image"), Store.addStore);
    app.get("/getStore", Store.getStoreList);
    app.post("/edit/:id", Store.updateStore);
    app.get("/edit/:id", Store.getStoreListById);
    app.get("/delete/:id", Store.deleteStore);
}