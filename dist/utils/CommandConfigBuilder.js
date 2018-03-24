"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommandConfig_1 = require("./CommandConfig");
class CommandConfigBuilder {
    constructor() { }
    build(config) {
        const cmd = new CommandConfig_1.CommandConfig();
        const opts = config.options;
        cmd.command = config.command;
        cmd.action = config.action;
        cmd.alias = config.alias || null;
        cmd.description = config.description || null;
        cmd.usage = config.usage || null;
        cmd.signature = config.signature || null;
        if (opts)
            cmd.options = opts;
        return cmd;
    }
}
exports.CommandConfigBuilder = CommandConfigBuilder;
