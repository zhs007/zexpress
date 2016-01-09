"use strict";

var modulemgr = require('../../lib/modulemgr');
//<--require Begin
var childmgr = require('../../base/childmgr');
//<--require End

const MODULENAME = 'edtchild';

class Module_EdtChild extends modulemgr.Module{
    constructor() {
        super(MODULENAME);

//<--constructor Begin

//<--constructor End
    }

    isNeedProc(req) {
//<--isNeedProc Begin
        return req.allparams.leftmenu == 'edtchild';
//<--isNeedProc End
    }

    onProc(req, res, next) {
//<--onProc Begin
        childmgr.getChild(function (lstchild) {
            let curpid = parseInt(req.allparams.pid);
            for (let ii = 0; ii < lstchild.length; ++ii) {
                if (lstchild[ii].pid == curpid) {
                    res.resret.param.curchild = lstchild[ii];
                }
            }

            res.resret.render(res);

            next();
        });
//<--onProc End
    }
};

exports.Module_EdtChild = Module_EdtChild;