const responseHelper = require('../../helper/response.helper');
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const path = require('path')
const slugify = require('slugify');


class UserController {
    async upload(req, res, next) {
        console.log(req.files)
        try {
            const file_storage = `${__dirname}/data`
            const attachment = req.files.attachment
    
            if (!fs.existsSync(file_storage)){
                fs.mkdirSync(file_storage);
            }
            const nameSlug = slugify(attachment.name);
            const uuid = uuidv4();
    
            const slug =  uuid + '_' + nameSlug;
            const createdFilePath = file_storage + '/' + slug;
            attachment.mv(createdFilePath);
    
            const bodyRes = {
                message: "Success"
            }
            res.status(200).send(bodyRes)
        }   
        catch (error){
            console.log(error)
            reg.businessLogic = await responseHelper({
                "code" : 500,
                "enttity" : "authentication",
                "state" : "attemAuthenticationError"
            })
            next();
            return
        }     
    }
}
module.exports = UserController