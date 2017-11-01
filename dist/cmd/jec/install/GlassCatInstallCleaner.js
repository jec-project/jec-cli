"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CliLogger_1 = require("../../../utils/CliLogger");
const fs = require("fs-extra");
const path = require("path");
class GlassCatInstallCleaner {
    constructor() {
        this.FILES = [
            ".tscache", "src", ".editorconfig", ".npmignore", "Gruntfile.js",
            "package.json", "tsconfig.json"
        ];
    }
    clean(callback) {
        let logger = CliLogger_1.CliLogger.getInstance();
        let currentPath = process.cwd();
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
