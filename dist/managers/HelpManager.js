"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CliLogger_1 = require("../utils/CliLogger");
class HelpManager {
    constructor() {
        this.EMPTY_STRING = "";
        this.WHITESPACE = " ";
        this.NEW_LINE = "\n\r";
    }
    getGutter(size) {
        let gutter = this.EMPTY_STRING;
        while (size--)
            gutter += this.WHITESPACE;
        return gutter;
    }
    outputHelpInfo(command) {
        const logger = CliLogger_1.CliLogger.getInstance();
        const commandName = command.command.toUpperCase();
        let nextValue = null;
        logger.log(`-> ${commandName}${this.NEW_LINE}`);
        logger.log(command.description + this.NEW_LINE);
        nextValue = command.alias;
        if (nextValue) {
            logger.log(`    alias: ${nextValue}${this.NEW_LINE}`);
        }
        nextValue = command.signature || this.EMPTY_STRING;
        logger.log(`    usage: ${commandName} ${nextValue}${this.NEW_LINE}`);
    }
    static build() {
        const helpManager = new HelpManager();
        return helpManager;
    }
    showSummary(commandList) {
        const it = commandList[Symbol.iterator]();
        const logger = CliLogger_1.CliLogger.getInstance();
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
