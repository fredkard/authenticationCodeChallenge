const responseHelper = require('../../helper/response.helper');
const jwt = require('jsonwebtoken');

class AuthController {
    async auth(req, res, next) {
        try {
            const { username, password } = req.body
            if (username === 'tata' && password === '12345678') {
                const token = jwt.sign({
                    uid: 987654321
                }, process.env.SECRET, { expiresIn: '1h' });
                req.businessLogic = await responseHelper({
                    "code": 200,
                    "message": "Attempt Authentication Success",
                    "entity": "authentication",
                    "state": "attemptAuthenticationSuccess",
                    "data": {
                        "token": token
                    }
                })
                next()
                return
            } else if (username === 'dona' && password === 'juventus') {
                const token = jwt.sign({
                    uid: 123498765
                }, process.env.SECRET, { expiresIn: '1h' });
                req.businessLogic = await responseHelper({
                    "code": 200,
                    "message": "Attempt Authentication Success",
                    "entity": "authentication",
                    "state": "attemptAuthenticationSuccess",
                    "data": {
                        "token": token
                    }
                })
                next()
                return
            } else {
                req.businessLogic = await responseHelper({
                    "code": 401,
                    "message": "Username or password invalid",
                    "entity": "authentication",
                    "state": "attemptAuthenticationError",
                })
                next()
                return
            }
        } catch (error) {
            console.log(error)
            req.businessLogic = await responseHelper({
                "code": 500,
                "entity": "authentication",
                "state": "attemptAuthenticationError",
            })
            next()
            return
        }
    }
}

module.exports = AuthController