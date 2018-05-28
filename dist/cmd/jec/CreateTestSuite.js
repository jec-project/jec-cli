"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_tool_cli_1 = require("jec-tool-cli");
const fs = require("fs");
const fsExtra = require("fs-extra");
const path = require("path");
const typescript_parser_1 = require("typescript-parser");
const jec_cli_template_1 = require("jec-cli-template");
const TestSuiteDto_1 = require("../../utils/TestSuiteDto");
class CreateTestSuite {
    constructor() {
        this.DOT = ".";
        this.SLASH = "/";
        this.RELATIVE_PATH = "../";
        this.EXTENSION = ".ts";
    }
    createDto(argv) {
        const result = new TestSuiteDto_1.TestSuiteDto();
        const classRef = argv.class;
        const lastDotId = classRef.lastIndexOf(this.DOT);
        result.className = classRef.substr(lastDotId + 1);
        result.name = result.className + "Test";
        result.classPath = classRef.substr(0, lastDotId)
            .replace(this.DOT, this.SLASH);
        result.testPath = path.join("test", result.classPath);
        this.createRelativeClassPath(result);
        return result;
    }
    createRelativeClassPath(dto) {
        const buffer = dto.testPath.split(this.SLASH);
        let pathFix = this.RELATIVE_PATH;
        let len = buffer.length;
        while (len--) {
            pathFix += this.RELATIVE_PATH;
        }
        dto.relativeClassPath = `${pathFix}src/${dto.classPath}/${dto.className}`;
    }
    loadClass(dto, onLoad) {
        const filePath = path.join(process.cwd(), "src", dto.classPath, dto.className + this.EXTENSION);
        fs.readFile(filePath, (err, data) => {
            onLoad(err, data);
        });
    }
    extractDeclarations(data, complete) {
        const result = new Array();
        const parser = new typescript_parser_1.TypescriptParser();
        const parsed = parser.parseSource(data);
        let len = -1;
        let declarations = null;
        let declaration = null;
        parsed.then((file) => {
            declarations = file.declarations[0].methods;
            len = declarations.length;
            while (len--) {
                declaration = declarations[len];
                if (declaration.visibility === 2) {
                    result.push(declaration.name);
                }
            }
            complete(null, result);
        }, (reason) => {
            complete(reason, null);
        });
    }
    write(config, callback) {
        const builder = new jec_cli_template_1.TemplateBuilder();
        const template = builder.build(jec_cli_template_1.TestSuiteTemplateGenerator, config);
        const name = config.name + this.EXTENSION;
        fsExtra.ensureDir(config.testPath, (err) => {
            if (err)
                callback(err);
            else {
                fsExtra.writeFile(path.join(config.testPath, name), template, (err) => {
                    callback(err);
                });
            }
        });
    }
    run(argv) {
        const logger = jec_tool_cli_1.ConsoleCliLogger.getInstance();
        let dto = this.createDto(argv);
        this.loadClass(dto, (err, data) => {
            if (err)
                logger.error(err);
            else {
                this.extractDeclarations(data.toString(), (error, data) => {
                    if (err)
                        logger.error(error);
                    else {
                        dto.methods = data;
                        this.write(dto, (err) => {
                            err ? logger.error(err) :
                                logger.log(`Test suite with name '${dto.name}.ts' created in '${dto.testPath}'.`);
                        });
                    }
                });
            }
        });
    }
}
exports.CreateTestSuite = CreateTestSuite;
