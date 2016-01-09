"use strict";

var async = require('async');

class Module{

    constructor(name) {
        this.name = name;
    }

    isNeedProc(req) {
        return false;
    }

    onProc(req, res, next) {
    }
};

class ModuleMgr{

    constructor() {
        this.lstModule = [];
    }

    addModule(m) {
        this.lstModule.push(m);
    }

    onProc(req, res, next) {
        async.eachSeries(this.lstModule, function (cur, callback) {
            if (!cur.isNeedProc(req)) {
                callback();
            }
            else {
                cur.onProc(req, res, function () {
                    callback();
                });
            }
        }, function (err) {
            next();
        });
    }
};

exports.Module = Module;
exports.ModuleMgr = ModuleMgr;