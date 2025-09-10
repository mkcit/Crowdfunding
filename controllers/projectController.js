const Project = require('../models/project');

exports.getProjects = (req, res, next) => {
    var title = req.query.q;
    var sortBy = req.query.sort;
    Project.findByTitle(title, sortBy).then(([projects, fieldData]) => {
        res.status(200).render('home', {
            pageTitle: 'جميع المشاريع',
            projectsList: projects,
            searchTitle: title,
            sortBy: sortBy
        });
    }).catch(err => {
        console.log(err);
    });
}


exports.getProjectDetails = (req, res, next) => {
    res.status(200).render('project-details', {
        pageTitle: 'تفاصيل المشروع'
    });
}

exports.getAddProject = (req, res, next) => {
    res.status(200).render('user/add-project', {
        pageTitle: 'إنشاء مشروع جديد'
    });
}

exports.postAddProject = (req, res, next) => {
    console.log('POST add project');
    console.log(req.body);
}

exports.getEditProject = (req, res, next) => {
    res.status(200).render('user/add-project', {
        pageTitle: 'تعديل المشروع'
    });
}

exports.postEditProject = (req, res, next) => {
    res.redirect('/user/dashboard');
}

