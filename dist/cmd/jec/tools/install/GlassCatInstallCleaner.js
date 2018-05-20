"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tool_cli_1 = require("jec-tool-cli");
const fs = require("fs-extra");
const path = require("path");
class GlassCatInstallCleaner {
    constructor() {
        this.FILES = [
            ".tscache", "src", "test", "juta", ".editorconfig", ".npmignore",
            "Gruntfile.js", "package.json", "tsconfig.json"
        ];
    }
    clean(callback) {
        const logger = jec_tool_cli_1.ConsoleCliLogger.getInstance();
        const currentPath = process.cwd();
        let numFiles = this.FILES.length;
        let len = numFiles;
        let filePath = null;
        logger.action("Removing temporary files.");
        while (len--) {
            filePath = path.join(currentPath, this.FILES[len]);
            logger.verb("remove", filePath);
            fs.remove(filePath)
                .then(() => {
                numFiles--;
                if (numFiles <= 0)
                    callback();
            })
                .catch(err => {
                logger.warn(err);
                numFiles--;
                if (numFiles <= 0)
                    callback();
            });
        }
    }
}
exports.GlassCatInstallCleaner = GlassCatInstallCleaner;
