"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BootstrapTemplate {
    constructor() { }
    getTemplate() {
        let template = `import {AbstractBootstrapScript, Bootstrap } from "jec-commons";
import {DomainContainer} from "jec-glasscat-core";

/**
 * Runs frameworks initialization scripts.
 */
@Bootstrap()
export class <% name %> extends AbstractBootstrapScript {

  /**
   * @inheritDoc
   */
  public run(container:DomainContainer):void {
    // TODO Auto-generated method stub
  }
}`;
        return template;
    }
}
exports.BootstrapTemplate = BootstrapTemplate;
