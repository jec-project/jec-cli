"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tool_cli_1 = require("jec-tool-cli");
class HelpManager {
    constructor() {
        this.EMPTY_STRING = "";
        this.WHITESPACE = " ";
        this.NEW_LINE = "\n\r";
        this.REQUIRED = "+";
        this.OPTIONAL = "-";
    }
    getGutter(size) {
        let gutter = this.EMPTY_STRING;
        while (size--)
            gutter += this.WHITESPACE;
        return gutter;
    }
    getRequiredPrefix(required) {
        return required ? this.REQUIRED : this.OPTIONAL;
    }
    outputHelpInfo(command) {
        const logger = jec_tool_cli_1.ConsoleCliLogger.getInstance();
        const commandName = command.command.toUpperCase();
        const options = command.options.reverse();
        const COLSPACE = 20;
        let nextValue = null;
        let len = options.length;
        let option = null;
        let gutterSize = 0;
        logger.log(`-> ${commandName}${this.NEW_LINE}`);
        logger.log(command.description + this.NEW_LINE);
        nextValue = command.alias;
        if (nextValue) {
            logger.log(`    alias: ${nextValue}${this.NEW_LINE}`);
        }
        nextValue = command.signature || this.EMPTY_STRING;
        logger.log(`    usage: ${commandName} ${nextValue}${this.NEW_LINE}`);
        while (len--) {
            option = options[len];
            nextValue = option.name;
            gutterSize = COLSPACE - nextValue.length;
            logger.log(`    ${this.getRequiredPrefix(option.required)} ${nextValue}${this.getGutter(gutterSize)}${option.description}`);
        }
    }
    static build() {
        const helpManager = new HelpManager();
        return helpManager;
    }
    showSummary(commandList) {
        const it = commandList[Symbol.iterator]();
        const logger = jec_tool_cli_1.ConsoleCliLogger.getInstance();
        const COLSPACE = 25;
        let gutterSize = 0;
        let cmd = null;
        let cusor = 0;
        let commandName = null;
        logger.log("For more information on a specific command, type HELP command-name:\n\r");
        for (let item of it) {
            cusor++;
            if (cusor % 2) {
                cmd = item[1];
                commandName = cmd.command.toUpperCase();
                gutterSize = COLSPACE - commandName.length;
                logger.log(`${commandName}${this.getGutter(gutterSize)}${cmd.description}`);
            }
        }
    }
    showHelp(argv, commandList) {
        const commands = argv._;
        if (commands.length === 1) {
            this.showSummary(commandList);
        }
        else {
            this.outputHelpInfo(commandList.get(commands[1]));
        }
    }
}
exports.HelpManager = HelpManager;
