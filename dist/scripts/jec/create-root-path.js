"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateRootPath_1 = require("../../cmd/jec/CreateRootPath");
function run(argv) {
    const cmd = new CreateRootPath_1.CreateRootPath();
    cmd.run(argv);
}
exports.run = run;
