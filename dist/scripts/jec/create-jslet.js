"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateJslet_1 = require("../../cmd/jec/CreateJslet");
function run(argv) {
    const cmd = new CreateJslet_1.CreateJslet();
    cmd.run(argv);
}
exports.run = run;
