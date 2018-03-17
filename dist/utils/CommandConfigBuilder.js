"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommandConfig_1 = require("./CommandConfig");
class CommandConfigBuilder {
    constructor() { }
    build(config) {
        const cmd = new CommandConfig_1.CommandConfig();
        cmd.command = config.command;
        cmd.action = config.action;
        cmd.alias = config.alias || null;
        cmd.description = config.description || null;
        return cmd;
    }
}
exports.CommandConfigBuilder = CommandConfigBuilder;
