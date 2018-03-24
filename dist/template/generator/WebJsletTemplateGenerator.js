"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebJsletTemplate_1 = require("../resource/WebJsletTemplate");
class WebJsletTemplateGenerator {
    constructor() { }
    generate(config) {
        const template = new WebJsletTemplate_1.WebJsletTemplate();
        return template.getTemplate();
    }
}
exports.WebJsletTemplateGenerator = WebJsletTemplateGenerator;
