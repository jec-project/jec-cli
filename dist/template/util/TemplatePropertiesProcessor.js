"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TemplatePropertiesProcessor {
    constructor() { }
    resolve(template, config) {
        let result = template;
        let found = null;
        let rawProp = null;
        let prop = null;
        let propLen = -1;
        let propVal = null;
        while ((found = TemplatePropertiesProcessor.PROP_PATTERN.exec(result)) !== null) {
            rawProp = found[0];
            propLen = rawProp.length;
            prop = rawProp.substring(2, propLen - 2).trim();
            if (config.has(prop)) {
                propVal = config.get(prop);
                result = result.replace(rawProp, propVal);
            }
        }
        return result;
    }
}
TemplatePropertiesProcessor.PROP_PATTERN = /<%\s*.*?%>/ig;
exports.TemplatePropertiesProcessor = TemplatePropertiesProcessor;
;
