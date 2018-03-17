"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlassCatInstall_1 = require("../../cmd/jec/GlassCatInstall");
function run(argv) {
    const cmd = new GlassCatInstall_1.GlassCatInstall();
    cmd.run(argv);
}
exports.run = run;
