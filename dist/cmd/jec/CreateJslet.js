"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CliLogger_1 = require("../../utils/CliLogger");
const jec_cli_template_1 = require("jec-cli-template");
const fs = require("fs");
class CreateJslet {
    constructor() { }
    run(argv) {
        const logger = CliLogger_1.CliLogger.getInstance();
        const builder = new jec_cli_template_1.TemplateBuilder();
        const name = argv.name;
        const template = builder.build(jec_cli_template_1.WebJsletTemplateGenerator, argv);
        fs.writeFile(`${name}.ts`, template, (err) => {
            if (err) {
                logger.error(err);
            }
            else {
                logger.log(`Jslet file with name '${name}.ts' created in '${process.cwd()}'.`);
            }
        });
    }
}
exports.CreateJslet = CreateJslet;
