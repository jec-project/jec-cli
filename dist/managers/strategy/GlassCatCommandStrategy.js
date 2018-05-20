"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tool_cli_1 = require("jec-tool-cli");
const CFG = require("../../../config/glasscat-config.json");
class GlassCatCommandStrategy extends jec_tool_cli_1.AbstractCommandStrategy {
    constructor(version) {
        super(version);
        this.initCommands(CFG);
    }
    invokeCommand() {
        super.invokeCommand();
    }
}
exports.GlassCatCommandStrategy = GlassCatCommandStrategy;
