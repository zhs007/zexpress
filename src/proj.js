"use strict";

var path = require('path');
var util = require('util');
var zhandlebars = require('zhandlebars');

function procParams(params) {
    params.projname_lc = params.projname.toLowerCase();

    let arrmod_simple = [];
    let arrmod_ctrl = [];
    let arrmod_module = [];
    for (let ii = 0; ii < params.router.length; ++ii) {
        let currouter = params.router[ii];
        currouter.name_lc = currouter.name.toLowerCase();
        currouter.name_uc = currouter.name.toUpperCase();

        if (util.isArray(currouter.url)) {
            currouter.urlstr = JSON.stringify(currouter.url);
        }
        else {
            currouter.urlstr = util.format("'%s'", currouter.url);
        }

        //console.log(currouter.urlstr);

        if (currouter.type == 'simple') {
            arrmod_simple.push(currouter);
        }
        else if (currouter.type == 'ctrl') {
            arrmod_ctrl.push(currouter);

            for (let jj = 0; jj < currouter.lstctrl.length; ++jj) {
                currouter.lstctrl[jj].name_uc = currouter.lstctrl[jj].name.toUpperCase();
                currouter.lstctrl[jj].name_lc = currouter.lstctrl[jj].name.toLowerCase();
            }
        }
        else if (params.router[ii].type == 'module') {
            arrmod_module.push(currouter);

            for (let jj = 0; jj < currouter.lstmodule.length; ++jj) {
                currouter.lstmodule[jj].name_uc = currouter.lstmodule[jj].name.toUpperCase();
                currouter.lstmodule[jj].name_lc = currouter.lstmodule[jj].name.toLowerCase();
            }
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