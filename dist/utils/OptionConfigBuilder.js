"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OptionConfig_1 = require("./OptionConfig");
class OptionConfigBuilder {
    constructor() { }
    build(config) {
        const opt = new OptionConfig_1.OptionConfig();
        opt.name = config.name;
        opt.required = config.description || false;
        opt.description = config.description || null;
        return opt;
    }
}
exports.OptionConfigBuilder = OptionConfigBuilder;
