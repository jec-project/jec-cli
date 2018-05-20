"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tool_cli_1 = require("jec-tool-cli");
const JecCommandStrategy_1 = require("./strategy/JecCommandStrategy");
class JecCommandManager extends jec_tool_cli_1.AbstractCommandManager {
    constructor(processTitle) {
        super(processTitle);
        this.initManager();
    }
    initManager() {
        this.__strategy = new JecCommandStrategy_1.JecCommandStrategy(this.__version);
    }
    process() {
        super.process();
    }
}
exports.JecCommandManager = JecCommandManager;
