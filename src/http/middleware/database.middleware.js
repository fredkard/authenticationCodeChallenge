const model = require("../../../sequelize.js");
const user = model.user;
//const upload = model.upload;
//const request_log = model.request_log;

module.exports = {
    DatabaseMiddleware: (req, res, next) => {
        req.user = user;
  //      req.upload = upload;
  //      req.request_log = request_log;
        next()
    }
};
