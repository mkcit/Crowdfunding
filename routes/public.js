
const express = require('express');

const publicRoutes = express.Router();

const projectsController = require('../controllers/projectController');
const authController = require('../controllers/authController');

publicRoutes.get('/project-details/:id', projectsController.getProjectDetails);

publicRoutes.get('/home', projectsController.getProjects);

publicRoutes.get('/', projectsController.getProjects);

publicRoutes.get('/register', authController.getRegister);

publicRoutes.post('/register', authController.postRegister);

publicRoutes.get('/login', authController.getLogin);

publicRoutes.post('/login', authController.postLogin);

publicRoutes.get('/forgot', authController.getForgot);

publicRoutes.post('/forgot', authController.postForgot);

publicRoutes.get('/reset', authController.getReset);

publicRoutes.post('/reset', authController.postReset);

// This module returns object which contains a group of fnctions,
module.exports = publicRoutes;