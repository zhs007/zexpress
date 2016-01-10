"use strict";

var modulemgr = require('../../lib/modulemgr');
//<--require Begin

//<--require End

const MODULENAME = '{{curmod.name_lc}}';

class Module_{{curmod.name}} extends modulemgr.Module{
    constructor() {
        super(MODULENAME);

//<--constructor Begin

//<--constructor End
    }

    isNeedProc(req) {
//<--isNeedProc Begin
        return false;
//<--isNeedProc End
    }

    onProc(req, res, next) {
//<--onProc Begin
        next();
//<--onProc End
    }
};

exports.Module_{{curmod.name}} = Module_{{curmod.name}};