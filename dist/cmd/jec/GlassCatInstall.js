"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tool_cli_1 = require("jec-tool-cli");
const GlassCatLoader_1 = require("./tools/install/GlassCatLoader");
const GlassCatExtractor_1 = require("./tools/install/GlassCatExtractor");
const GlassCatNpmInstaller_1 = require("./tools/install/GlassCatNpmInstaller");
const GlassCatInstallCleaner_1 = require("./tools/install/GlassCatInstallCleaner");
class GlassCatInstall {
    constructor() { }
    run(argv) {
        const CFG = require("../../../config/glasscat-install-config.json");
        const loader = new GlassCatLoader_1.GlassCatLoader();
        const logger = jec_tool_cli_1.ConsoleCliLogger.getInstance();
        const version = CFG.version;
        let extractor = null;
        let installer = null;
        let cleaner = null;
        logger.action(`Installing GlassCat ${version}.`);
        loader.download(version, () => {
            extractor = new GlassCatExtractor_1.GlassCatExtractor();
            extractor.move(() => {
                installer = new GlassCatNpmInstaller_1.GlassCatNpmInstaller();
                installer.install(() => {
                    cleaner = new GlassCatInstallCleaner_1.GlassCatInstallCleaner();
                    cleaner.clean(() => {
                        logger.action("Server successfully installed.");
                    });
                });
            });
        });
    }
}
exports.GlassCatInstall = GlassCatInstall;
