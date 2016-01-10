"use strict";

{{#each router}}
require('../routes/{{name_lc}}');
{{/each}}