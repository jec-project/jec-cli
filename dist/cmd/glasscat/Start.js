"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const childProcess = require("child_process");
const path = require("path");
class Start {
    constructor() { }
    run(argv) {
        let scriptPath = path.normalize(process.cwd() + "/server/com/onsoft/glasscat/cli/scripts/start-server");
        childProcess.fork(scriptPath);
    }
}
exports.Start = Start;
