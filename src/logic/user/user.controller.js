const responseHelper = require('../../helper/response.helper');

class UserController {
    async profile(req, res, next) {
        try {
            console.log('masuk')
            if (req.user.uid === 987654321) {
                req.businessLogic = await responseHelper({
                    "code": 200,
                    "message": "Get Profile Success",
                    "entity": "profile",
                    "state": "getProfileSuccess",
                    "data": {
                        "username": 'tata',
                        "age": 27,
                        "address": "Jogja"
                    }
                })
                next()
                return
            } else if (req.user.uid === 123498765) {
                req.businessLogic = await responseHelper({
                    "code": 200,
                    "message": "Get Profile Success",
                    "entity": "profile",
                    "state": "getProfileSuccess",
                    "data": {
                        "username": 'dona',
                        "age": 17,
                        "address": "Surabaya"
                    }
                })
                next()
                return
            } else {
                req.businessLogic = await responseHelper({
                    "code": 401,
                    "message": "Uauthorized",
                    "entity": "profile",
                    "state": "Unauthorized"
                })
                next()
                return
            }
        } catch (error) {
            console.log(error)
            req.businessLogic = await responseHelper({
                "code": 500,
                "entity": "profile",
                "state": "getProfileError",
            })
            next()
            return
        }
    }
}

module.exports = UserController