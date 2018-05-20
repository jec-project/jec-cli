"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tool_cli_1 = require("jec-tool-cli");
const CFG = require("../../../package.json");
class Version {
    constructor() { }
    run(argv) {
        jec_tool_cli_1.ConsoleCliLogger.getInstance().log(`${CFG.name} - version: ${CFG.version}`);
    }
}
exports.Version = Version;
