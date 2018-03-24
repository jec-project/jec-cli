"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CliLogger_1 = require("../../utils/CliLogger");
const CFG = require("../../../package.json");
class Version {
    constructor() { }
    run(argv) {
        CliLogger_1.CliLogger.getInstance().log(`${CFG.name} - version: ${CFG.version}`);
    }
}
exports.Version = Version;
