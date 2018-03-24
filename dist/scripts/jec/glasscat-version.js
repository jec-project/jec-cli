"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlassCatVersion_1 = require("../../cmd/jec/GlassCatVersion");
function run(argv) {
    const cmd = new GlassCatVersion_1.GlassCatVersion();
    cmd.run(argv);
}
exports.run = run;
