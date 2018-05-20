"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tool_cli_1 = require("jec-tool-cli");
const jec_cli_template_1 = require("jec-cli-template");
class CreateInterface {
    constructor() { }
    run(argv) {
        const writer = new jec_cli_template_1.FileWriter();
        const logger = jec_tool_cli_1.ConsoleCliLogger.getInstance();
        writer.write(jec_cli_template_1.InterfaceTemplateGenerator, argv, (err) => {
            err ? logger.error(err) :
                logger.log(`JEC interface with name '${argv.name}.ts' created in '${process.cwd()}'.`);
        });
    }
}
exports.CreateInterface = CreateInterface;
