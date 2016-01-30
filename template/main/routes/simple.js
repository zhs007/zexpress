"use strict";

var config = require('../config');
var routermgr = require('../lib/routermgr');
//<--require Begin

//<--require End

const URLROOT = '{{currouter.urlroot}}';
const URL = {{{currouter.urlstr}}};
const HTTPTYPE = routermgr.HTTP_{{currouter.http}};
const NEEDLOGIN = {{currouter.needlogin}};

class Router_{{currouter.name}} extends routermgr.Router{
    constructor() {
        super(HTTPTYPE, URLROOT, URL, NEEDLOGIN);
    }

    onProc(req, res, next) {
        super.onProc(req, res, function () {
//<--onProc Begin
            res.resret.renderJade('views/{{currouter.name_lc}}/{{currouter.name_lc}}.jade');
            res.resret.param = {};
            res.resret.render(res);
//<--onProc End
        });
    }
};

routermgr.singleton.addRouter(new Router_{{currouter.name}}());