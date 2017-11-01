"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TarballUtil_1 = require("../../../utils/TarballUtil");
const CliLogger_1 = require("../../../utils/CliLogger");
class GlassCatLoader {
    constructor() { }
    download(version, callback) {
        let logger = CliLogger_1.CliLogger.getInstance();
        let util = new TarballUtil_1.TarballUtil();
        let uri = `https://registry.npmjs.org/jec-glasscat/-/jec-glasscat-${version}.tgz`;
        logger.verb("download", uri);
        util.download(uri, process.cwd(), (e) => {
            if (e === null) {
                logger.verb("extract", `jec-glasscat-${version}.tgz`);
                callback();
            }
            else {
                logger.error(e);
                process.exit(1);
            }
        });
    }
}
exports.GlassCatLoader = GlassCatLoader;
