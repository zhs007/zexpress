"use strict";

var assert = require('assert');
var mysql = require('mysql');
var util = require('util');
var zmysql = require('zmysql');
var log = require('./logger');

var dblog = {
    err: function (str) {
        log.log('err', str);
    },

    info: function (str) {
        log.log('info', str);
    }
};

function newDBClient(dbid, host, user, password, database, callback) {
    let cfg = zmysql.newConfig(dbid, host, user, password, database, 5000, dblog);
    zmysql.newDBClient(cfg, callback);
}

exports.getDBClient = zmysql.getDBClient;
exports.newDBClient = newDBClient;