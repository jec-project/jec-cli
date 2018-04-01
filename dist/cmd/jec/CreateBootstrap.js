"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CliLogger_1 = require("../../utils/CliLogger");
const jec_cli_template_1 = require("jec-cli-template");
class CreateBootstrap {
    constructor() { }
    run(argv) {
        const writer = new jec_cli_template_1.FileWriter();
        const logger = CliLogger_1.CliLogger.getInstance();
        writer.write(jec_cli_template_1.BootstrapTemplateGenerator, argv, (err) => {
            err ? logger.error(err) :
                logger.log(`Bootstrap file with name '${argv.name}.ts' created in '${process.cwd()}'.`);
        });
    }
}
exports.CreateBootstrap = CreateBootstrap;
