"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const childProcess = require("child_process");
const CliLogger_1 = require("../../../../utils/CliLogger");
const DATA = "data";
const EXIT = "exit";
const NPM_WARN = "npm";
const WARN = "WARN";
const TS_BUILD = "ts:build";
const BUILD_DIRS_TASK = "running new task: BuildDirsTask";
const COPY_CONFIG_FILES_TASK = "running new task: CopyConfigFilesTask";
const COPY_DIRS_TASK = "running new task: CopyDirsTask";
const BUILD_CONSOLE_TASK = "running new task: BuildConsoleTask";
const WEBAPP = "webapp";
const SKIPPING_OPTIONAL_DEPENDENCY = "SKIPPING OPTIONAL DEPENDENCY";
class GlassCatNpmInstaller {
    constructor() { }
    install(callback) {
        let logger = CliLogger_1.CliLogger.getInstance();
        let execProcess = null;
        let message = null;
        logger.action("Installing packages for tooling via npm.");
        execProcess = childProcess.exec("npm install");
        execProcess.stdout.on(DATA, function (data) {
            message = String(data);
            if (message.indexOf(TS_BUILD) !== -1) {
                logger.verb("compile", "compiling TypeScript files");
            }
            else if (message.indexOf(BUILD_DIRS_TASK) !== -1) {
                logger.verb("build", "creating server directories");
            }
            else if (message.indexOf(COPY_CONFIG_FILES_TASK) !== -1) {
                logger.verb("build", "copying config files");
            }
            else if (message.indexOf(COPY_DIRS_TASK) !== -1) {
                logger.verb("build", "copying core directories");
            }
            else if (message.indexOf(BUILD_CONSOLE_TASK) !== -1) {
                logger.verb("build", "installing packages for admin console via npm");
            }
            else if (message.indexOf(WEBAPP) !== -1) {
                logger.verb("build", "installed packages for admin console via npm");
            }
        });
        execProcess.stderr.on(DATA, function (err) {
            message = String(err);
            if (message.indexOf(NPM_WARN) !== -1 ||
                message.indexOf(WARN) !== -1 ||
                message.indexOf(SKIPPING_OPTIONAL_DEPENDENCY) !== -1)
                return;
            logger.warn(err);
        });
        execProcess.on(EXIT, function (code, signal) {
            logger.action("Installed packages for tooling via npm.");
            callback();
        });
    }
}
exports.GlassCatNpmInstaller = GlassCatNpmInstaller;
