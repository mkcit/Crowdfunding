


const express = require('express');
const userRoutes = express.Router();

const projectsController = require('../controllers/projectController');

//#region User Pages
// dashboard page
userRoutes.get('/dashboard', (req, res, next) => {
    res.status(200).render('user/dashboard', {
        pageTitle: 'لوحة التحكم'
    });
});

userRoutes.get('/add-project', projectsController.getAddProject);

userRoutes.post('/add-project', projectsController.postAddProject);

userRoutes.get('/edit-project', projectsController.getEditProject);

userRoutes.post('/edit-project', projectsController.postEditProject);


module.exports = userRoutes;