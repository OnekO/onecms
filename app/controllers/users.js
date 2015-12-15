'use strict';

exports.renderLogin = function (req, res) {
    if (!req.user) {
        res.render('users/login', {
            title: 'Log-in Form',
            messages: req.flash('error') || req.flash('info')
        });
    }
    else {
        return res.redirect('/');
    }
};

exports.renderRegister = function (req, res) {
    if (!req.user) {
        res.render('users/register', {
            title: 'Register Form',
            messages: req.flash('error')
        });
    }
    else {
        return res.redirect('/');
    }
};

exports.logout = function (req, res) {
    req.logout();
    res.redirect('/');
};
