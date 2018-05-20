"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tool_cli_1 = require("jec-tool-cli");
class Version {
    constructor() { }
    run(argv) {
        const CFG = require("../../../package.json");
        jec_tool_cli_1.ConsoleCliLogger.getInstance().log(`${CFG.name} - version: ${CFG.version}`);
    }
}
exports.Version = Version;
