module.exports = async function responseMiddleware (req, res, next){
    console.log(req.businessLogic)
    res.header("Content-Type",'application/json');
    res.status(req.businessLogic.code).send(req.businessLogic)
}