"use strict";

var routermgr = require('../lib/routermgr');
{{#each currouter.lstmodule}}
require('../mod/{{../currouter.name_lc}}/{{name_lc}}');
{{/each}}
//<--require Begin

//<--require End

const URLROOT = '{{currouter.urlroot}}';
const URL = {{{currouter.urlstr}}};
const HTTPTYPE = routermgr.HTTP_{{currouter.http}};
const NEEDLOGIN = {{currouter.needlogin}};

class Router_{{currouter.name}} extends routermgr.ModuleRouter{
    constructor() {
        super(HTTPTYPE, URLROOT, URL, NEEDLOGIN);

{{#each currouter.lstmodule}}
        this.modulemgr.addModule(new {{name_lc}}.Module_{{name}}());
{{/each}}

//<--constructor Begin

//<--constructor End
    }

    onProc(req, res, next) {
//<--onProc Begin        
        res.resret.renderJade('views/main.jade');
        res.resret.param = {title: config.appname, admininfo: req.session.admininfo};

        super.onProc(req, res, function () {
            console.log(JSON.stringify(res.resret));

            res.resret.render(res);
        });
//<--onProc End        
    }
};

routermgr.singleton.addRouter(new Router_{{currouter.name}}());
