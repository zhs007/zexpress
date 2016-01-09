"use strict";

class ModProc{
    constructor() {
        this.lstMod = [];
    }

    addMod(mod) {
        this.lstMod.push(mod);
    }

    __proc() {
        let mp = this;
        if (mp.lstMod.length == mp.curindex) {
            mp.next();
        }
        else {
            mp.lstMod[mp.curindex++].proc(mp.req, mp.res, function () {
                mp.__proc();
            });
        }
    }

    proc(req, res, next) {
        let mp = this;
        mp.curindex = 0;
        mp.req = req;
        mp.res = res;
        mp.next = next;

        mp.__proc();
    }
};

exports.ModProc = ModProc;