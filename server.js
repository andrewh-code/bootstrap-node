import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import router from './routes/router.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// default set .env file in the same directory as server.js
dotenv.config();

const PORT = process.env.PORT || 1234;

console.log(process.env.PORT);

const frontendURL = 'http://localhost:5000';

app.use((request, response, next) => {
    var id = uuidv4();
    request.uuid = id;
    var startExecutionTime = process.hrtime();
    request.startExecutionTime = startExecutionTime;
    
    response.setHeader('Access-Cotntrol-Allow-Origin', frontendURL);
    response.setHeader('Access-Control-All-Methods', 'GET');
    response.setHeader('Access-Control-Allow_headers', 'X-Requested-With,content-type');
    
    next();

});

// routes here
app.use('/', router);


app.listen(PORT, () => {
    console.log(`server running on ${PORT} ...`)
});