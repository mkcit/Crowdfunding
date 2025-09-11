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

    var id = req.params.id;
    Project.findById(id).then((result) => {

        // Result is Array of two arrays
        // Like this:
        // [ 0 , 1 ]
        // [ [{id:1,name:'Ahmaed'..},{..}],[] ]

        
        const [projects, schema] = result;
        if (projects.length > 0) {
            const project = projects[0];
            res.status(200).render('project-details', {
                pageTitle: 'تفاصيل المشروع',
                project: project
            });
        } else {
            res.status(404).render('404', {
                pageTitle: 'الصفحة غير موجودة'
            });
        }

    }).catch(err => {
        console.log(err);
    });

    // res.status(200).render('project-details', {
    //     pageTitle: 'تفاصيل المشروع'
    // });
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

