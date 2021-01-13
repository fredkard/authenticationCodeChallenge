const jwt = require('jsonwebtoken');

module.exports = {
    JWTMiddleware: (req, res, next) => {
        try {
            const authHeader = req.header('Authorization')
        if (authHeader.indexOf("Basic ") >= 0) {
            const token = authHeader.split("Basic ")
            const authData = Buffer.from(token[1], 'base64').toString()
            const credential = authData.split(':')
            const username = credential[0]
            const password = credential[1]
    
            if (username === "tata" && password === "12345678") {
                next()
            } else {
                const bodyRes = {
                  message: "Unauthorized"
                }
                res.status(401).send(bodyRes)
                return
            }
        } else if (authHeader.indexOf("Apikey ") >= 0) {
            const token = authHeader.split("Apikey ")
            if (token[1] === '1234567890987654321') {
                next()
            } else {
                const bodyRes = {
                  message: "Unauthorized"
                }
                res.status(401).send(bodyRes)
                return
            }
        } else if (authHeader.indexOf("Bearer ") >= 0) {
            const token = authHeader.split("Bearer ")
            var decoded = jwt.verify(token[1], process.env.SECRET);
            req.user = decoded
            next()
        } else {
            const bodyRes = {
                message: "Unauthorized"
              }
            res.status(401).send(bodyRes)
            return
        }
        } catch(error) {
            console.log(error)
            if (error.name === 'TypeError') {
                const bodyRes = {
                    message: "Unauthorized"
                  }
                res.status(401).send(bodyRes)
                return 
            }
            if (error.name === 'TokenExpiredError') {
                const bodyRes = {
                    message: "Token Expired"
                  }
                res.status(401).send(bodyRes) 
                return
            }
            const bodyRes = {
                message: "Internal Server Error"
            }
            res.status(500).send(bodyRes)
            return
        }
    }
};
