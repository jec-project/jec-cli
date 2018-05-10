"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateInterface_1 = require("../../cmd/jec/CreateInterface");
function run(argv) {
    const cmd = new CreateInterface_1.CreateInterface();
    cmd.run(argv);
}
exports.run = run;
