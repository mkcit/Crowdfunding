exports.getRegister = (req, res, next) => {
    res.status(200).render('auth/register', {
        pageTitle: 'تسجيل مستخدم جديد'

    });
}

exports.postRegister = (req, res, next) => {
    console.log(req.body);
    res.redirect('auth/login');
}

exports.getLogin = (req, res, next) => {
    res.status(200).render('auth/login', {
        pageTitle: 'تسجيل الدخول'
    });
}

exports.postLogin = (req, res, next) => {
    console.log(req.body);
    res.redirect('user/dashboard');
}

exports.getForgot = (req, res, next) => {
    res.status(200).render('auth/forgot', {
        pageTitle: 'إعادة تعيين كلمة المرور'
    });
}

exports.postForgot = (req, res, next) => {
    console.log(req.body);
    res.redirect('auth/reset');
}

exports.getReset = (req, res, next) => {
    res.status(200).render('auth/reset', {
        pageTitle: 'إعادة تعيين كلمة المرور'
    });
}

exports.postReset = (req, res, next) => {
    console.log(req.body);
    res.redirect('/auth/login');
}