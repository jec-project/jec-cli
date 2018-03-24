"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OptionConfigBuilder_1 = require("./OptionConfigBuilder");
class ConfigParser {
    constructor() { }
    parse(config) {
        const optCfg = new Array();
        const builder = new OptionConfigBuilder_1.OptionConfigBuilder();
        let len = config.length;
        let opt = null;
        while (len--) {
            opt = builder.build(config[len]);
            optCfg.push(opt);
        }
        return optCfg;
    }
}
exports.ConfigParser = ConfigParser;
