"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tool_cli_1 = require("jec-tool-cli");
const GlassCatCommandStrategy_1 = require("./strategy/GlassCatCommandStrategy");
const path = require("path");
class GlassCatCommandManager extends jec_tool_cli_1.AbstractCommandManager {
    constructor(processTitle) {
        super(processTitle, path.resolve(__dirname, "../../package.json"));
        this.initManager();
    }
    initManager() {
        this.__strategy = new GlassCatCommandStrategy_1.GlassCatCommandStrategy(this.__version);
    }
    process() {
        super.process();
    }
}
exports.GlassCatCommandManager = GlassCatCommandManager;
