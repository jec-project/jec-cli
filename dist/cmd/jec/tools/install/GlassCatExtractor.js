"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const path = require("path");
const CliLogger_1 = require("../../../../utils/CliLogger");
class GlassCatExtractor {
    constructor() { }
    move(callback) {
        const logger = CliLogger_1.CliLogger.getInstance();
        const currentPath = process.cwd();
        const tmpFolder = "jec-glasscat";
        fs.copy(path.join(currentPath, tmpFolder), currentPath, (err) => {
            if (err) {
                logger.error(err);
                process.exit(1);
            }
            else {
                logger.verb("remove", path.join(currentPath, "jec-glasscat"));
                fs.remove(tmpFolder).then(() => {
                    callback();
                }).catch((reason) => {
                    logger.error(reason);
                    process.exit(1);
                });
            }
        });
    }
}
exports.GlassCatExtractor = GlassCatExtractor;
