//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {JecTemplate} from "../JecTemplate";
import {TemplateGenerator} from "../TemplateGenerator";
import {TemplatePropertiesProcessor} from "../../template/util/TemplatePropertiesProcessor";
import { MapUtils } from "../../utils/MapUtils";

/**
 * The <code>TemplateBuilder</code> allows to create JEC components from
 * predefined templates.
 */
export class TemplateBuilder {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>TemplateBuilder</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Builds and returns a new JEC template by using the specified
   * <code>TemplateGenerator<code> class reference and config object.
   * 
   * @param {any} generatorClass the <code>TemplateGenerator<code> class
   *                             reference used to instanciate the template
   *                             generator.
   * @param {any} config the config object used to customize the template.
   * @return {string} a sting that represent a custom JEC component. 
   */
  public build(generatorClass:any, config:any):string {
    const processor:TemplatePropertiesProcessor =
                                              new TemplatePropertiesProcessor();
    const mapConfig:Map<string, any> = MapUtils.objectToMap(config);
    let generator:TemplateGenerator = new generatorClass();
    let template:string = processor.resolve(
      generator.generate(config), mapConfig
    );
    return template;
  }
}