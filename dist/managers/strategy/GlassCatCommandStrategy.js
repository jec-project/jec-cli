"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommandStrategy_1 = require("./AbstractCommandStrategy");
const CFG = require("../../../config/glasscat-config.json");
class GlassCatCommandStrategy extends AbstractCommandStrategy_1.AbstractCommandStrategy {
    constructor(version) {
        super(version);
        this.initCommands(CFG);
    }
    invokeCommand() {
        super.invokeCommand();
    }
}
exports.GlassCatCommandStrategy = GlassCatCommandStrategy;
