"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateNotifier = require("update-notifier");
const PKG = require("../../package.json");
class AbstractCommandManager {
    constructor(processTitle) {
        this.__strategy = null;
        this.__version = null;
        this.initObj(processTitle);
    }
    initObj(processTitle) {
        updateNotifier({ pkg: PKG }).notify();
        process.title = processTitle;
        this.__version = PKG.version;
    }
    process() {
        this.__strategy.invokeCommand();
    }
}
exports.AbstractCommandManager = AbstractCommandManager;
