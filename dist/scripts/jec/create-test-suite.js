"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateTestSuite_1 = require("../../cmd/jec/CreateTestSuite");
function run(argv) {
    const cmd = new CreateTestSuite_1.CreateTestSuite();
    cmd.run(argv);
}
exports.run = run;
