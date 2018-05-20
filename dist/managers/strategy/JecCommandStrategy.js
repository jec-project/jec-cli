"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tool_cli_1 = require("jec-tool-cli");
const chalk = require("chalk");
const figlet = require("figlet");
const CFG = require("../../../config/jec-config.json");
class JecCommandStrategy extends jec_tool_cli_1.AbstractCommandStrategy {
    constructor(version) {
        super(version);
        this.initStrategy();
    }
    initStrategy() {
        console.log(chalk.yellow(figlet.textSync("JEC CLI", { horizontalLayout: "full" })));
        this.initCommands(CFG);
    }
    invokeCommand() {
        super.invokeCommand();
    }
}
exports.JecCommandStrategy = JecCommandStrategy;
