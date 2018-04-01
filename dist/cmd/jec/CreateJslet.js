"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CliLogger_1 = require("../../utils/CliLogger");
const jec_cli_template_1 = require("jec-cli-template");
class CreateJslet {
    constructor() { }
    run(argv) {
        const writer = new jec_cli_template_1.FileWriter();
        const logger = CliLogger_1.CliLogger.getInstance();
        writer.write(jec_cli_template_1.WebJsletTemplateGenerator, argv, (err) => {
            err ? logger.error(err) :
                logger.log(`Jslet file with name '${argv.name}.ts' created in '${process.cwd()}'.`);
        });
    }
}
exports.CreateJslet = CreateJslet;
