"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tool_cli_1 = require("jec-tool-cli");
const CFG = require("../../../config/glasscat-install-config.json");
class GlassCatVersion {
    constructor() { }
    run(argv) {
        const logger = jec_tool_cli_1.ConsoleCliLogger.getInstance();
        logger.log(`Default GlassCat version: ${CFG.version}.`);
    }
}
exports.GlassCatVersion = GlassCatVersion;
