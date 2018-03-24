"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateBootstrap_1 = require("../../cmd/jec/CreateBootstrap");
function run(argv) {
    const cmd = new CreateBootstrap_1.CreateBootstrap();
    cmd.run(argv);
}
exports.run = run;
