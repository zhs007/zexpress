"use strict";

var config = require('../config');
var routermgr = require('../lib/routermgr');
var {{currouter.name_lc}} = require('../ctrl/{{currouter.name_lc}}');
{{#each currouter.lstctrl}}
require('../ctrl/{{../currouter.name_lc}}/{{name_lc}}');
{{/each}}
//<--require Begin

//<--require End

const URLROOT = '{{currouter.urlroot}}';
const URL = '/:ctrlid/';

class Router_{{currouter.name}} extends routermgr.CtrlRouter{
    constructor() {
        super({{currouter.name_lc}}.CTRL_GROUPID, URLROOT, URL);
//<--constructor Begin

//<--constructor End
    }

    onProc(req, res, next) {
        super.onProc(req, res, function () {
//<--onProc Begin
//<--onProc End
        });
    }
};

routermgr.singleton.addRouter(new Router_{{currouter.name}}());