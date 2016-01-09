"use strict";

var path = require('path');
var zhandlebars = require('zhandlebars');

function procParams(params) {
    params.projname_lc = params.projname.toLowerCase();

    let arrmod_simple = [];
    let arrmod_ctrl = [];
    let arrmod_module = [];
    for (let ii = 0; ii < params.router.length; ++ii) {
        params.router[ii].name_lc = params.router[ii].name.toLowerCase();

        if (params.router[ii].type == 'simple') {
            arrmod_simple.push(params.router[ii]);
        }
        else if (params.router[ii].type == 'ctrl') {
            let curctrl = params.router[ii];
            arrmod_ctrl.push(curctrl);

            for (let jj = 0; jj < curctrl.lstctrl.length; ++jj) {
                curctrl.lstctrl[jj].name_uc = curctrl.lstctrl[jj].name.toUpperCase();
                curctrl.lstctrl[jj].name_lc = curctrl.lstctrl[jj].name.toLowerCase();
            }
        }
        else if (params.router[ii].type == 'module') {
            arrmod_module.push(params.router[ii]);
        }
    }

    params.router_simple = arrmod_simple;
    params.router_ctrl = arrmod_ctrl;
    params.router_module = arrmod_module;

    return params;
}

function procProj(params) {
    params = procParams(params);

    zhandlebars.procProj(params, path.join(__dirname, '../template', 'main.json'), path.join(__dirname, '../template'));
}

exports.procProj = procProj;