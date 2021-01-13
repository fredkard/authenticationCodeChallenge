const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const routes = require('./src/http/route/route');
const CORSMiddleware = require('./src/http/middleware/CORS.middleware');
const responseMiddleware = require('./src/http/middleware/response.middleware');

const env = require('dotenv');
env.config();

app.use(bodyParser.json())
app.use(CORSMiddleware);

app.set('json spaces', 2)

app.use('/api', routes);

app.use(responseMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT} with Application Name: ${process.env.APPLICATION_NAME}`);
  });