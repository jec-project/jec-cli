"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Start_1 = require("../../cmd/glasscat/Start");
function run(argv) {
    const cmd = new Start_1.Start();
    cmd.run(argv);
}
exports.run = run;
