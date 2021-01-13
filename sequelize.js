const Sequelize = require("sequelize");
const UserModel = require("./models/user.js");
// const UploadModel = require("./models/upload.js");
// const RequestModel = require("./models/request_log.js");
const sequelize = new Sequelize(
    'fredy_db', 'fredy', 'Fredy50ftD3v2020',{
        host : 'ariefdfaltah.com',
        dialect : 'mysql'
    }
);

const user = UserModel(sequelize,Sequelize);
sequelize.sync().then(()=>{
    console.log(`User table have been created`)
});
// const upload = UploadModel(sequelize,Sequelize);
// sequelize.sync().then(()=>{
    // console.log(`Upload Table have been created`)
// });
// const request_log = RequestModel(sequelize,Sequelize);
// sequelize.sync().then(()=>{
    // console.log(`Request table have been created`)
// });


exports.user = user;
// exports.upload = upload;
// exports.request_log = request_log;
