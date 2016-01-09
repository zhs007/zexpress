"use strict";

var util = require('util');
var express = require('express');
var modulemgr = require('./modulemgr');
var reqparam = require('./reqparam');
var ctrlmgr = require('./ctrlmgr');
var checklogin = require('../src/checklogin');

const HTTP_GET      = 1;
const HTTP_POST     = 2;
const HTTP_ALL      = 3;

class Router{
    constructor(httptype, urlroot, url, needlogin) {
        this.httptype = httptype;
        this.urlroot = urlroot;
        this.url = url;
        this.needlogin = needlogin;
        this.router = express.Router();

        let r = this;
        if (util.isArray(url)) {
            for (let i = 0; i < url.length; ++i) {
                if (httptype == HTTP_GET) {
                    this.router.get(url[i], function(req, res, next) {
                        reqparam.funcMain(req, res, function () {
                            r.onProc(req, res, next);
                        });
                    });
                }
                else if (httptype == HTTP_POST) {
                    this.router.post(url[i], function(req, res, next) {
                        reqparam.funcMain(req, res, function () {
                            r.onProc(req, res, next);
                        });
                    });
                }
                else if (httptype == HTTP_ALL) {
                    this.router.all(url[i], function(req, res, next) {
                        reqparam.funcMain(req, res, function () {
                            r.onProc(req, res, next);
                        });
                    });
                }
            }
        }
        else {
            if (httptype == HTTP_GET) {
                this.router.get(url, function(req, res, next) {
                    reqparam.funcMain(req, res, function () {
                        r.onProc(req, res, next);
                    });
                });
            }
            else if (httptype == HTTP_POST) {
                this.router.post(url, function(req, res, next) {
                    reqparam.funcMain(req, res, function () {
                        r.onProc(req, res, next);
                    });
                });
            }
            else if (httptype == HTTP_ALL) {
                this.router.all(url, function(req, res, next) {
                    reqparam.funcMain(req, res, function () {
                        r.onProc(req, res, next);
                    });
                });
            }
        }
    }

    onProc(req, res, next) {
        if (next == undefined) {
            next = function () {}
        }

        if (this.needlogin) {
            if (checklogin.procSession(req, res)) {
                return ;
            }
        }

        next();
    }
};

class ModuleRouter extends Router{
    constructor(httptype, urlroot, url, needlogin) {
        super(httptype, urlroot, url, needlogin);

        this.modulemgr = new modulemgr.ModuleMgr();
    }

    onProc(req, res, next) {
        let mr = this;
        super.onProc(req, res, function () {
            mr.modulemgr.onProc(req, res, next);
        });
    }
};

class CtrlRouter extends Router{
    constructor(name, urlroot, url) {
        super(HTTP_ALL, urlroot, url, false);

        this.name = name;
    }

    onProc(req, res, next) {
        ctrlmgr.singleton.onReq(this.name, req, res, next);
    }
};

class RouterMgr{
    constructor() {
        this.mapRouter = {};
        this.app = undefined;
    }

    setApp(app) {
        this.app = app;
    }

    addRouter(r) {
        this.mapRouter[r.urlroot] = r;

        this.app.use(r.urlroot, r.router);
    }
};

exports.singleton = new RouterMgr();

exports.Router = Router;
exports.ModuleRouter = ModuleRouter;
exports.CtrlRouter = CtrlRouter;

exports.HTTP_GET = HTTP_GET;
exports.HTTP_POST = HTTP_POST;
exports.HTTP_ALL = HTTP_ALL;