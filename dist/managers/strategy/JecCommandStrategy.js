"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tool_cli_1 = require("jec-tool-cli");
const path = require("path");
class JecCommandStrategy extends jec_tool_cli_1.AbstractCommandStrategy {
    constructor(version) {
        super(version);
        this.initStrategy();
    }
    initStrategy() {
        const CFG = require("../../../config/jec-config.json");
        this.setScriptPath(path.resolve(__dirname, "../../scripts"));
        console.log(jec_tool_cli_1.SplashScreenBuilder.build("JEC CLI"));
        this.initCommands(CFG);
    }
    invokeCommand() {
        super.invokeCommand();
    }
}
exports.JecCommandStrategy = JecCommandStrategy;
