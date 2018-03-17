"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlassCatLoader_1 = require("./install/GlassCatLoader");
const GlassCatExtractor_1 = require("./install/GlassCatExtractor");
const GlassCatNpmInstaller_1 = require("./install/GlassCatNpmInstaller");
const GlassCatInstallCleaner_1 = require("./install/GlassCatInstallCleaner");
const CliLogger_1 = require("../../utils/CliLogger");
const CFG = require("../../../config/glasscat-install-config.json");
class GlassCatInstall {
    constructor() { }
    run(argv) {
        const loader = new GlassCatLoader_1.GlassCatLoader();
        const logger = CliLogger_1.CliLogger.getInstance();
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
