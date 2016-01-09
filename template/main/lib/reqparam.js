"use strict";

function funcMain(req, res, next) {
    let allparams;

    if (req.method == 'POST') {
        allparams = req.body;
    }
    else if (req.method == 'GET') {
        allparams = req.query;
    }

    for (let key in req.params) {
        allparams[key] = req.params[key];
    }

    req.allparams = allparams;

    next();
}

exports.funcMain = funcMain;