"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CliLogger_1 = require("../../utils/CliLogger");
const TemplateBuilder_1 = require("../../template/util/TemplateBuilder");
const WebJsletTemplateGenerator_1 = require("../../template/generator/WebJsletTemplateGenerator");
const fs = require("fs");
class CreateJslet {
    constructor() { }
    run(argv) {
        const logger = CliLogger_1.CliLogger.getInstance();
        const builder = new TemplateBuilder_1.TemplateBuilder();
        const name = argv.name;
        const template = builder.build(WebJsletTemplateGenerator_1.WebJsletTemplateGenerator, argv);
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
