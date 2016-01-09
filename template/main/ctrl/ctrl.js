"use strict";

const CTRL_GROUPID = '{{curctrlrouter.name_lc}}';

{{#each curctrlrouter.lstctrl}}
const CTRLID_{{name_uc}} = '{{name_lc}}';
{{/each}}

exports.CTRL_GROUPID = CTRL_GROUPID;

{{#each curctrlrouter.lstctrl}}
exports.CTRLID_{{name_uc}} = CTRLID_{{name_uc}};
{{/each}}