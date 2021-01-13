const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const routes = require('./src/http/route/route');
const CORSMiddleware = require('./src/http/middleware/CORS.middleware');
const responseMiddleware = require('./src/http/middleware/response.middleware');

app.use(bodyParser.json())
app.use(CORSMiddleware);

app.set('json spaces', 2)

app.use('/', routes);

app.use(responseMiddleware);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});