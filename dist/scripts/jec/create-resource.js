"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateResource_1 = require("../../cmd/jec/CreateResource");
function run(argv) {
    const cmd = new CreateResource_1.CreateResource();
    cmd.run(argv);
}
exports.run = run;
