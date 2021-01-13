const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const path = require('path')
const slugify = require('slugify');

module.exports = {
    FileMiddleware: (req, res, next) => {
        console.log(req.files);
        if (!req.files || Object.keys(req.files).length === 0) {
            const bodyRes = {
                message: "Unprocessable Entity"
            }
            res.status(422).send(bodyRes)
            return
        } else{
            next()
        }
    }
};
