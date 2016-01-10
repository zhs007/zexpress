"use strict";

var sessionmgr = require('../lib/sessionmgr');

class {{projname}}Session extends sessionmgr.Session {

    constructor() {
        super();
    }

    isAlreadyLogin() {
        return false;
    }
};

sessionmgr.setSessionType({{projname}}Session);