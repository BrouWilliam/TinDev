const express = require('express');
const routes = express.Router();

const DevController = require('./Controllers/DevController'); 
const LikeController = require('./Controllers/LikeController'); 
const DislikeController = require('./Controllers/DislikeController');

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;
