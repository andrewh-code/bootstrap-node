import express from 'express';

// import controllers
import HelloController from '../controller/HelloController.js';


const router = express.Router();
const helloController = new HelloController();

// get request
router.get('/getRequest', helloController.helloGET);

// POST request
router.post('/postRequest', helloController.helloPOST);

// PUT request
router.put('/putRequest', helloController.helloPUT);


// DELETE request
router.delete('/deleteRequest', helloController.helloDELETE);

export default router;