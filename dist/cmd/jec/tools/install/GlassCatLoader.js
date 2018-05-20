"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TarballUtil_1 = require("../../../../utils/TarballUtil");
const jec_tool_cli_1 = require("jec-tool-cli");
class GlassCatLoader {
    constructor() { }
    download(version, callback) {
        const logger = jec_tool_cli_1.ConsoleCliLogger.getInstance();
        const util = new TarballUtil_1.TarballUtil();
        const uri = `https://registry.npmjs.org/jec-glasscat/-/jec-glasscat-${version}.tgz`;
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
