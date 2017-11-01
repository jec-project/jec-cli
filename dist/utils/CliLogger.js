"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
class CliLogger {
    constructor() {
        if (CliLogger._locked || CliLogger.INSTANCE) {
            throw new Error();
        }
        CliLogger._locked = true;
    }
    static getInstance() {
        if (CliLogger.INSTANCE === null) {
            CliLogger._locked = false;
            CliLogger.INSTANCE = new CliLogger();
        }
        return CliLogger.INSTANCE;
    }
    log(message) {
        console.log(message);
    }
    action(message) {
        console.log(chalk.green(message));
    }
    verb(verb, message) {
        console.log(chalk.green(`  ${verb} `) + message);
    }
    error(reason) {
        console.log(chalk.red("An error occured:\n"));
        console.error(reason);
    }
    warn(reason) {
        console.log(chalk.magenta("WARN:\n"));
        console.warn(reason);
    }
}
CliLogger._locked = true;
CliLogger.INSTANCE = null;
exports.CliLogger = CliLogger;
;
