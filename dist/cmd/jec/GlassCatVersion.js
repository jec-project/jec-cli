"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tool_cli_1 = require("jec-tool-cli");
class GlassCatVersion {
    constructor() { }
    run(argv) {
        const CFG = require("../../../config/glasscat-install-config.json");
        const logger = jec_tool_cli_1.ConsoleCliLogger.getInstance();
        logger.log(`Default GlassCat version: ${CFG.version}.`);
    }
}
exports.GlassCatVersion = GlassCatVersion;
