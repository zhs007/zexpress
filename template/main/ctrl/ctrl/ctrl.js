"use strict";

var {{curctrlrouter.name_lc}} = require('../{{curctrlrouter.name_lc}}');
var ctrlmgr = require('../../lib/ctrlmgr');
//<--require Begin

//<--require End

class Ctrl_{{curctrl.name}} extends ctrlmgr.BaseCtrl {
    constructor() {
        super({{curctrlrouter.name_lc}}.CTRL_GROUPID, {{curctrlrouter.name_lc}}.CTRLID_{{curctrl.name_uc}});
    }

    onProc(req, res, next) {
        let params = req.allparams;
        let session = req.session;

        if (!this.checkParams(res, params{{#each curctrl.reqparam}}, '{{this}}'{{/each}})) {
            res.resret.render(res);

            return next();
        }
//<--onProc Begin
        next();
//<--onProc End
    }
}

ctrlmgr.singleton.addCtrl(new Ctrl_{{curctrl.name}}());