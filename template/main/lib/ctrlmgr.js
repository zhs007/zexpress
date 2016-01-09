"use strict";

class BaseCtrl{

    constructor(groupid, ctrlid) {
        this.groupid = groupid;
        this.ctrlid = ctrlid;
    }

    checkParams(res, params) {
        if (arguments.length > 2) {

            for (let i = 2; i < arguments.length; ++i) {
                if (!params.hasOwnProperty(arguments[i])) {
                    res.resret.outputJsonObj({err: 'no param ' + arguments[i]});

                    return false;
                }
            }
        }

        return true;
    }

    onProc(req, res, next) {
    }
}

class CtrlMgr{

    constructor() {
        this.mapCtrl = {};
    }

    addCtrl(ctrl) {
        if (!this.mapCtrl.hasOwnProperty(ctrl.groupid)) {
            this.mapCtrl[ctrl.groupid] = {};
        }

        if (!this.mapCtrl[ctrl.groupid].hasOwnProperty(ctrl.ctrlid)) {
            this.mapCtrl[ctrl.groupid][ctrl.ctrlid] = ctrl;
        }
    }

    onReq(groupid, req, res, next) {
        if (this.mapCtrl.hasOwnProperty(groupid)) {
            if (req.params.hasOwnProperty('ctrlid')) {
                if (this.mapCtrl[groupid].hasOwnProperty(req.params.ctrlid)) {
                    this.mapCtrl[groupid][req.params.ctrlid].onProc(req, res, next);

                    return ;
                }
            }

            res.resret.outputJsonObj({err: 'no ctrl.'});
            res.resret.render(res);
        }

        next();
    }
}

var singleton = new CtrlMgr();

exports.BaseCtrl = BaseCtrl;

exports.singleton = singleton;
