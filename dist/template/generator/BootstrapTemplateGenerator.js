"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BootstrapTemplate_1 = require("../resource/BootstrapTemplate");
class BootstrapTemplateGenerator {
    constructor() { }
    generate(config) {
        const template = new BootstrapTemplate_1.BootstrapTemplate();
        return template.getTemplate();
    }
}
exports.BootstrapTemplateGenerator = BootstrapTemplateGenerator;
