"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Version_1 = require("../../cmd/jec/Version");
function run(argv) {
    const cmd = new Version_1.Version();
    cmd.run(argv);
}
exports.run = run;
