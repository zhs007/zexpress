"use strict";

var util = require('util');
var fs = require("fs");
var strPackage = fs.readFileSync('./package.json').toString();
var pkg = JSON.parse(strPackage);

var timestamp = Date.now();

exports.ver = pkg.version;

exports.service_port = {{port}};
exports.appname = '{{title}}';

//exports.log_path = util.format('./%s.log', timestamp);
//exports.logdev_path = util.format('./%s.dev.log', timestamp);

exports.openLogDev = true;

{{#each dbmgr}}
exports.{{@key}}_host = '{{host}}';
exports.{{@key}}_user = '{{user}}';
exports.{{@key}}_pwd = '{{password}}';
exports.{{@key}}_name = '{{database}}';

{{/each}}
