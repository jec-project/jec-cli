"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommandConfigBuilder_1 = require("./CommandConfigBuilder");
class ConfigParser {
    constructor() { }
    parse(config) {
        let cmdCfg = new Array();
        let len = config.length;
        let builder = new CommandConfigBuilder_1.CommandConfigBuilder();
        let cmd = null;
        while (len--) {
            cmd = builder.build(config[0]);
            cmdCfg.push(cmd);
        }
        return cmdCfg;
    }
}
exports.ConfigParser = ConfigParser;
