"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CliLogger_1 = require("../../utils/CliLogger");
const CFG = require("../../../config/glasscat-install-config.json");
class GlassCatVersion {
    constructor() { }
    run(argv) {
        const logger = CliLogger_1.CliLogger.getInstance();
        logger.log(`Default GlassCat version: ${CFG.version}.`);
    }
}
exports.GlassCatVersion = GlassCatVersion;
