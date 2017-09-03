"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommandManager_1 = require("./AbstractCommandManager");
const GlassCatCommandStrategy_1 = require("./strategy/GlassCatCommandStrategy");
class GlassCatCommandManager extends AbstractCommandManager_1.AbstractCommandManager {
    constructor(processTitle) {
        super(processTitle);
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
