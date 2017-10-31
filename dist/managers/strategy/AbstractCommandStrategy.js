"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigParser_1 = require("../../utils/ConfigParser");
const minimist = require("minimist");
const path = require("path");
class AbstractCommandStrategy {
    constructor(version) {
        this.__argv = null;
        this.__version = null;
        this.__commands = null;
        this.__parser = null;
        this.initObj(version);
    }
    initObj(version) {
        this.__version = version;
        this.__commands = new Map();
        this.__argv = minimist(process.argv.slice(2));
        this.__parser = new ConfigParser_1.ConfigParser();
    }
    initCommands(config) {
        let cfg = this.__parser.parse(config);
        let len = cfg.length;
        let cmd = null;
        while (len--) {
            cmd = cfg[len];
            this.__commands.set(cmd.command, cmd);
        }
    }
    invokeCommand() {
        let commandName = this.__argv._[0];
        let cmd = this.__commands.get(commandName);
        if (cmd) {
            const module = require(path.join("../../scripts", cmd.action));
            module.run(this.__argv);
        }
        else {
            console.log("show help");
        }
    }
}
exports.AbstractCommandStrategy = AbstractCommandStrategy;
