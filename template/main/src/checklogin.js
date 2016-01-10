"use strict";

function procSession(req, res) {
    let session = req.session;

    if (session.admininfo == undefined) {
        if (req.originalUrl != '/login') {
            res.resret.redirect('/login');
            res.resret.render(res);

            return true;
        }
    }
    else {
        if (req.originalUrl == '/') {
            res.resret.redirect('/main');
            res.resret.render(res);

            return true;
        }
    }

    return false;
}

exports.procSession = procSession;