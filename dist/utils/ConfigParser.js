"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommandConfigBuilder_1 = require("./CommandConfigBuilder");
class ConfigParser {
    constructor() { }
    parse(config) {
        const cmdCfg = new Array();
        const builder = new CommandConfigBuilder_1.CommandConfigBuilder();
        let len = config.length;
        let cmd = null;
        while (len--) {
            cmd = builder.build(config[len]);
            cmdCfg.push(cmd);
        }
        return cmdCfg;
    }
}
exports.ConfigParser = ConfigParser;
